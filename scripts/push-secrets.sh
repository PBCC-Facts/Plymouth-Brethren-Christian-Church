#!/usr/bin/env bash
# Push non-empty values from .env.secrets into Vercel (production + preview).
# Usage: ./scripts/push-secrets.sh
set -euo pipefail
cd "$(dirname "$0")/.."

[ -f .env.secrets ] || { echo "No .env.secrets file. Copy .env.secrets.example first."; exit 1; }

while IFS='=' read -r key value; do
  [[ "$key" =~ ^[A-Z_]+$ ]] || continue
  [ -n "$value" ] || continue
  for env in production preview; do
    # Remove any existing value first so add doesn't fail on duplicates.
    npx -y vercel@latest env rm "$key" "$env" --yes >/dev/null 2>&1 || true
    printf "%s" "$value" | npx -y vercel@latest env add "$key" "$env" >/dev/null 2>&1 \
      && echo "  ✓ $key → $env" \
      || echo "  ✗ $key → $env FAILED"
  done
done < .env.secrets

echo
echo "Done. Redeploy to pick the values up:  vercel redeploy --prod  (or push a commit)"
