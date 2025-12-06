import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { marketplaceTemplates } from "@/data/marketplace";
import { MarketplaceExplorer } from "./marketplace-explorer";

export const metadata: Metadata = {
  title: "Маркетплейс — шаблоны Next.js",
  description:
    "SEO-оптимизированные шаблоны Next.js от aibazar. Строгий дизайн, готовые конверсионные блоки и индексируемые URL для каждого шаблона.",
  keywords: [
    "шаблоны Next.js",
    "маркетплейс сайтов",
    "SEO шаблоны",
    "веб-дизайн",
    "aibazar marketplace",
  ],
  openGraph: {
    title: "Маркетплейс — шаблоны aibazar",
    description:
      "Изучите шаблоны Next.js со структурой под SEO и динамическими OpenGraph-превью.",
    url: "https://aibazar.studio/marketplace",
    images: [
      {
        url: "/og-base.svg",
        width: 1200,
        height: 630,
        alt: "aibazar marketplace",
      },
    ],
  },
  alternates: {
    canonical: "https://aibazar.studio/marketplace",
  },
};

export default function MarketplacePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Маркетплейс — шаблоны Next.js под SEO и конверсию
        </h1>
        <p className="text-lg text-white/70">
          Каждый шаблон — самостоятельный SEO-актив с чистыми URL, уникальными
          метаданными и OpenGraph-покрытием. Монохром, чтобы ваш бренд сразу
          вписался. Меняйте контент, подключайте CMS и выкатывайте без переписки
          компонентов.
        </p>
        <div className="grid gap-4 rounded-2xl border border-white/10 p-6 md:grid-cols-3">
          <div>
            <div className="text-sm uppercase tracking-[0.08em] text-white/60">
              Скорость
            </div>
            <p className="text-white/80">
              Next.js 16, TypeScript, Tailwind 4, компоненты shadcn/ui.
            </p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.08em] text-white/60">
              SEO приоритет
            </div>
            <p className="text-white/80">
              Уникальные метаданные, структурный контент, индексируемые динамические
              роуты.
            </p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.08em] text-white/60">
              Конверсия
            </div>
            <p className="text-white/80">
              Готовые CTA-рейлы, блоки доверия и тарифные сценарии.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          label="Шаблоны"
          title="Подборка, готовая к деплою"
          description="Фильтруйте по категории, стилю или теме. Открывайте любой шаблон — у каждого своя SEO-страница с метаданными и продуктовой схемой."
        />
        <MarketplaceExplorer templates={marketplaceTemplates} />
      </section>

      <section className="rounded-2xl border border-white/10 p-8 space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-semibold">Нужна кастомизация?</div>
            <p className="text-white/70">
              Адаптируем любой шаблон под ваш продукт, интегрируем CMS и аналитику.
              Отправим предложение за день.
            </p>
          </div>
          <Link
            href="/contact"
            className="text-sm uppercase tracking-[0.08em] underline underline-offset-4"
          >
            Запросить кастомизацию →
          </Link>
        </div>
      </section>
    </div>
  );
}
