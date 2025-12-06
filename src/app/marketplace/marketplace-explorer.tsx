'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { MarketplaceTemplate } from "@/data/marketplace";

type MarketplaceExplorerProps = {
  templates: MarketplaceTemplate[];
};

export function MarketplaceExplorer({ templates }: MarketplaceExplorerProps) {
  const [category, setCategory] = useState("Все");
  const [style, setStyle] = useState("Все");
  const [theme, setTheme] = useState("Все");

  const categories = useMemo(
    () => ["Все", ...new Set(templates.map((t) => t.category))],
    [templates]
  );
  const styles = useMemo(
    () => ["Все", ...new Set(templates.map((t) => t.style))],
    [templates]
  );
  const themes = useMemo(
    () => ["Все", ...new Set(templates.map((t) => t.theme))],
    [templates]
  );

  const filtered = templates.filter((template) => {
    const categoryMatch = category === "Все" || template.category === category;
    const styleMatch = style === "Все" || template.style === style;
    const themeMatch = theme === "Все" || template.theme === theme;
    return categoryMatch && styleMatch && themeMatch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 p-4">
        <FilterGroup
          label="Категория"
          options={categories}
          active={category}
          onChange={setCategory}
        />
        <FilterGroup
          label="Стиль"
          options={styles}
          active={style}
          onChange={setStyle}
        />
        <FilterGroup
          label="Тема"
          options={themes}
          active={theme}
          onChange={setTheme}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((template) => (
          <div
            key={template.slug}
            className="card-shell rounded-2xl p-6 flex flex-col gap-4 border border-white/10 hover:border-white/30 transition"
          >
            <div
              className="h-40 w-full rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${template.image})` }}
            />
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold">{template.name}</h2>
                <p className="text-white/60">{template.summary}</p>
              </div>
              <Badge variant="outline">{template.category}</Badge>
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.08em] text-white/50">
              <span>{template.style}</span>
              <span>/</span>
              <span>{template.theme}</span>
            </div>
            <div className="grid gap-2 text-sm text-white/70">
              {template.features.slice(0, 3).map((feature) => (
                <div key={feature} className="flex gap-2">
                  <span className="text-white/30">—</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">От ${template.price}</span>
              <div className="flex flex-wrap gap-2 text-white/60">
                {template.stack.slice(0, 3).map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <Link href={`/marketplace/${template.slug}`}>
                <Button size="sm">Открыть шаблон</Button>
              </Link>
              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.08em] text-white/60 hover:text-white"
              >
                Запросить кастомизацию →
              </Link>
            </div>
          </div>
        ))}
        {filtered.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-white/10 p-6 text-white/60">
            Под эти фильтры пока нет шаблонов.
          </div>
        ) : null}
      </div>
    </div>
  );
}

type FilterGroupProps = {
  label: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
};

function FilterGroup({ label, options, active, onChange }: FilterGroupProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs uppercase tracking-[0.08em] text-white/60">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            size="sm"
            variant={option === active ? "default" : "outline"}
            onClick={() => onChange(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
