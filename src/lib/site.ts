export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pbccfacts.com"
)
  .trim()
  .replace(/\/+$/, ""); // no trailing whitespace/newline or slash; paths start with "/"

export const SITE_NAME = "The Facts · Plymouth Brethren Christian Church";

export const GITHUB_URL =
  "https://github.com/PBCC-Facts/Plymouth-Brethren-Christian-Church";
