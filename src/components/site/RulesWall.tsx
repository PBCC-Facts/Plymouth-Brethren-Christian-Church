"use client";

import { useMemo, useState } from "react";
import { rules, RULE_CATEGORIES, type RuleCategory } from "@/data/rules";
import { getSource } from "@/lib/sources";

/**
 * The rules wall. A dense, scannable grid: one card per documented rule.
 * The design goal is scale — a visitor should feel the sheer number of
 * rules before reading any single one. Filter chips narrow by category;
 * the count in the "All" chip keeps the total in view.
 */
export function RulesWall() {
  const [active, setActive] = useState<RuleCategory | "All">("All");

  const visible = useMemo(
    () => (active === "All" ? rules : rules.filter((r) => r.category === active)),
    [active],
  );

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const r of rules) m.set(r.category, (m.get(r.category) ?? 0) + 1);
    return m;
  }, []);

  return (
    <div>
      <div className="rules-filter" role="group" aria-label="Filter rules by category">
        <button
          type="button"
          className="rules-filter__chip"
          aria-pressed={active === "All"}
          onClick={() => setActive("All")}
        >
          All <span className="rules-filter__count">{rules.length}</span>
        </button>
        {RULE_CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            className="rules-filter__chip"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
          >
            {c} <span className="rules-filter__count">{counts.get(c) ?? 0}</span>
          </button>
        ))}
      </div>

      <ul className="rules-grid" aria-live="polite">
        {visible.map((r) => (
          <li key={r.id} className="rule-card">
            <p className="rule-card__cat">{r.category}</p>
            <p className="rule-card__statement">{r.statement}</p>
            {r.quote ? (
              <p className="rule-card__quote">
                &ldquo;{r.quote.text}&rdquo;
                <span className="rule-card__quote-by"> — {r.quote.by}</span>
              </p>
            ) : null}
            {r.detail ? <p className="rule-card__detail">{r.detail}</p> : null}
            <p className="rule-card__src">
              {r.tier === "exmember" ? (
                <span
                  className="exmember-badge"
                  title="Reported by verified ex-members (identity verified by the editor, held off-repo). Public documentation pending; see /what-we-need."
                >
                  Ex-member reported
                </span>
              ) : (
                r.sourceIds.map((id, i) => {
                  const s = getSource(id);
                  return (
                    <a
                      key={id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="rule-card__srclink"
                    >
                      source&nbsp;{i + 1}
                    </a>
                  );
                })
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
