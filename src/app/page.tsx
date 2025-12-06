import type { Metadata } from "next";
import Link from "next/link";
import SplineClient from "@/app/components/home/SplineClient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { marketplaceTemplates } from "@/data/marketplace";
import { portfolioCases } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "aibazar — разработка сайтов и дизайн-студия",
  description:
    "aibazar — студия, создающая премиальные сайты на Next.js, маркетплейсы и SaaS-опыт с продуманным UX/UI и автоматизацией.",
  keywords: [
    "aibazar",
    "разработка сайтов",
    "дизайн-студия",
    "Next.js сайты",
    "премиальный веб-дизайн",
    "digital студия",
  ],
  openGraph: {
    title: "aibazar — премиальная студия разработки сайтов",
    description:
      "Сайты на Next.js, маркетплейсы и SaaS-запуски с инженерной точностью.",
    url: "https://aibazar.studio",
    siteName: "aibazar studio",
    images: [
      {
        url: "/og-base.svg",
        width: 1200,
        height: 630,
        alt: "aibazar студия",
      },
    ],
  },
  alternates: {
    canonical: "https://aibazar.studio",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "aibazar studio",
  url: "https://aibazar.studio",
  description:
    "Premium digital-студия, создающая элитные сайты и продуктовые интерфейсы на Next.js.",
  sameAs: [
    "https://aibazar.studio/services",
    "https://aibazar.studio/portfolio",
    "https://aibazar.studio/marketplace",
  ],
  logo: "https://aibazar.studio/og-base.svg",
};

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff14,transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 space-y-16">
        <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_40%)]" />
          <div className="hero-overlay" />
          <div className="relative z-10 grid gap-8 p-10 md:grid-cols-5 md:items-center md:gap-12 lg:p-14">
            <div className="flex flex-col gap-8 md:col-span-3">
              <Badge variant="outline">Премиальная digital-студия</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-[1.04] tracking-tight">
                aibazar создаёт премиальные{" "}
                <span className="underline decoration-white/40">сайты на Next.js</span>.
              </h1>
              <p className="max-w-3xl text-lg text-white/70">
                Стратегия, дизайн, разработка и автоматизация в одном цикле. Создаём лендинги,
                маркетплейсы и SaaS-интерфейсы с чёткой типографикой, продуманным стэком и
                SEO/конверсией по умолчанию.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">Назначить созвон</Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Посмотреть услуги
                  </Button>
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: "Дизайн", value: "Сильная визуальная система" },
                  { label: "Инженерия", value: "Next.js 16 / TypeScript" },
                  { label: "Фокус", value: "Лендинги, SaaS, e-commerce, AI" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/20 bg-black/40 p-5 backdrop-blur transition hover:border-white/40"
                  >
                    <div className="text-xs uppercase tracking-[0.08em] text-white/60">
                      {item.label}
                    </div>
                    <div className="mt-2 text-lg font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full md:col-span-2 min-h-[520px] lg:min-h-[620px]">
              <div className="absolute inset-0 pointer-events-none">
                <SplineClient scene="https://prod.spline.design/xasN6jN3w1ggRc6p/scene.splinecode" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/40 to-transparent" />
            </div>
          </div>
        </section>

        <section className="space-y-6 px-2 md:px-0">
          <SectionHeading
            label="Услуги"
            title="Дизайн и разработка, которые двигают продукт"
            description="От продуманной стратегии и UX/UI до продакшн-кода и автоматизации. Собираем сайты, маркетплейсы и SaaS-интерфейсы под реальные KPI."
          />
          <div className="grid gap-4 md:gap-5 md:grid-cols-12 auto-rows-[1fr]">
            {[
              {
                title: "Разработка сайтов",
                body: "Быстрые лендинги и системы с SEO-архитектурой и модульными блоками.",
                image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
                span: "md:col-span-4",
              },
              {
                title: "Продуктовый дизайн",
                body: "UX/UI для SaaS и e-commerce: активация, читаемая типографика и понятные флоу.",
                image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
                span: "md:col-span-5",
              },
              {
                title: "AI и автоматизация",
                body: "Интеграции, пайплайны и интерфейсы под задачи автоматизации и внутренних процессов.",
                image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
                span: "md:col-span-3 md:row-span-2",
              },
              {
                title: "E-commerce",
                body: "Витрины, PDP и корзины с мерчендайзингом и чистой архитектурой.",
                image: "/ecom.png",
                span: "md:col-span-6",
              },
              {
                title: "SaaS & Reliability",
                body: "Надёжные интерфейсы с понятной иерархией, метриками и поддержкой.",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
                span: "md:col-span-3",
              },
            ].map((service, idx) => (
              <Link
                key={service.title}
                href="/services"
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 transition duration-200 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] ${service.span} flex h-full flex-col`}
              >
                <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 transition duration-200 group-hover:opacity-100" />
                <div
                  className={`w-full overflow-hidden rounded-[28px] ${
                    service.title.includes("AI")
                      ? "flex-1 min-h-[420px]"
                      : "h-56 md:h-64 flex-shrink-0"
                  }`}
                >
                  <div className="h-full w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                </div>
                <div className="p-5 space-y-3 relative z-10 flex-shrink-0 flex flex-col justify-end mt-3">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.08em] text-white/60">
                    <span>#0{idx + 1} Block</span>
                    <span className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center text-[10px]">
                      ⓘ
                    </span>
                  </div>
                  <div className="text-xl font-semibold">{service.title}</div>
                  <p className="text-white/70">{service.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            label="Маркетплейс"
            title="Готовые к запуску шаблоны"
            description="Лонч быстрее с SEO-индексируемыми шаблонами. Каждый построен на Next.js и shadcn/ui."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {marketplaceTemplates.slice(0, 3).map((template, idx) => (
              <Link
                key={template.slug}
                href={`/marketplace/${template.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 transition duration-200 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              >
                <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 transition duration-200 group-hover:opacity-100" />
                <div className="h-44 w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <div className="p-5 space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.08em] text-white/60">
                    <span>#0{idx + 1} Block</span>
                    <span className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center text-[10px]">
                      ?
                    </span>
                  </div>
                  <div className="text-xl font-semibold">{template.name}</div>
                  <p className="text-white/70">{template.summary}</p>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.08em] text-white/50">
                    <span>{template.style}</span>
                    <span className="text-white/30">/</span>
                    <span>{template.theme}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-sm">
                    <span className="text-white/60">Категория: {template.category}</span>
                    <span className="text-white group-hover:text-white/90">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/marketplace"
            className="inline-flex text-sm uppercase tracking-[0.08em] hover:text-white/80"
          >
            Открыть все шаблоны →
          </Link>
        </section>

        <section className="space-y-8">
          <SectionHeading
            label="Портфолио"
            title="Кейсы и реализованные проекты"
            description="Доказательная база из живых проектов — структурированные кейсы для SEO, продаж и доверия."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioCases.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="card-shell group rounded-2xl overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-white/30"
              >
                <div className="h-40 w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold">{project.name}</div>
                    <Badge variant="outline">{project.industry}</Badge>
                  </div>
                  <p className="text-white/70">{project.summary}</p>
                  <div className="flex gap-4 text-xs uppercase tracking-[0.08em] text-white/50">
                    <span>{project.year}</span>
                    <span>Next.js</span>
                    <span>UX/UI</span>
                  </div>
                  <div className="text-sm text-white/60 group-hover:text-white">
                    Читать кейс →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="inline-flex text-sm uppercase tracking-[0.08em] hover:text-white/80"
          >
            Полное портфолио →
          </Link>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <SectionHeading
              label="О студии"
              title="Студия, где стратегия, дизайн и код идут вместе"
              description="aibazar — команда, которая собирает продукты под бизнес-цели: от смысла и UX до продакшн-кода и аналитики."
            />
            <p className="text-white/70">
              Работаем со стартапами и зрелыми командами: сайты, маркетплейсы,
              SaaS-дэшборды. Прозрачный процесс, измеримые KPI по конверсии, SEO,
              скорости и качеству интерфейсов.
            </p>
          </div>
          <div className="card-shell rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">Забронировать слот</div>
              <Badge>Приоритет</Badge>
            </div>
            <p className="text-white/70">
              Расскажите про ваш запуск — сайт, SaaS или новый маркетинговый спринт.
              Ответим в течение одного рабочего дня.
            </p>
            <div className="flex gap-3">
              <Link href="/contact">
                <Button>Начать проект</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">Услуги</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </div>
  );
}
