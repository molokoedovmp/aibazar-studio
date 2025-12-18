import type { Metadata } from "next";
import Link from "next/link";
import SplineClient from "@/app/components/home/SplineClient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { marketplaceTemplates } from "@/data/marketplace";
import { portfolioCases } from "@/data/portfolio";
import MagicBento from "@/components/section-services";
import CardSwap, { Card as SwapCard } from "@/components/card-swap";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiPrisma,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "aibazar — разработка сайтов и дизайн-студия",
  description:
    "aibazar — студия, которая делает сайты, интернет-магазины и сервисы с понятным дизайном и быстрой работой.",
  keywords: [
    "aibazar",
    "разработка сайтов",
    "дизайн-студия",
    "веб-дизайн",
    "студия сайтов",
    "веб-разработка",
  ],
  openGraph: {
    title: "aibazar — студия разработки сайтов и сервисов",
    description: "Сайты, маркетплейсы и сервисы с простым и понятным дизайном.",
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
  description: "Студия, которая делает сайты и интерфейсы с упором на простоту и скорость.",
  sameAs: [
    "https://aibazar.studio/services",
    "https://aibazar.studio/portfolio",
    "https://aibazar.studio/marketplace",
  ],
  logo: "https://aibazar.studio/og-base.svg",
};

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
];

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff14,transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pt-12 space-y-16">
        <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_40%)]" />
          <div className="hero-overlay" />
          <div className="relative z-10 grid gap-8 p-10 md:grid-cols-5 md:items-center md:gap-12 lg:p-14">
            <div className="flex flex-col gap-8 md:col-span-3">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-[1.04] tracking-tight">
                aibazar делает{" "}
                <span className="underline decoration-white/40">сайты и сервисы</span>, которые дают понятный результат.
              </h1>
              <p className="max-w-3xl text-lg text-white/70">
                Берём на себя план, дизайн и разработку. Делаем лендинги, магазины и личные кабинеты так,
                чтобы ими было удобно пользоваться и их можно было быстро развивать.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">Оставить заявку</Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Посмотреть услуги
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "16+ проектов за год",
                  "Современный стек: TypeScript, React",
                  "Ответ в течение 1 рабочего дня",
                  "Дизайн и разработка вместе",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70"
                  >
                    {pill}
                  </span>
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
            title="Дизайн и разработка под задачу"
            description="Планируем, рисуем и собираем в коде сайты, магазины и сервисы, чтобы вы быстрее запустились и получили результат."
          />
          <MagicBento />
        </section>
        

        <section className="space-y-8 mt-20 md:mt-28" style={{ marginTop: "6cm" }}>
          <div className="grid gap-8 md:grid-cols-[1.05fr_1fr] items-start">
            <div className="space-y-4 max-w-2xl self-start">
              <Badge variant="outline">Портфолио</Badge>
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                Проекты и кейсы
              </h3>
              <p className="text-white/70 text-lg">
                Посмотрите, какие сайты и сервисы мы уже сделали. Коротко показываем задачу и результат.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/60">
                <span className="rounded-full border border-white/15 px-3 py-1">Next.js</span>
                <span className="rounded-full border border-white/15 px-3 py-1">UX/UI</span>
                <span className="rounded-full border border-white/15 px-3 py-1">SEO</span>
                <span className="rounded-full border border-white/15 px-3 py-1">Автоматизация</span>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex text-sm uppercase tracking-[0.08em] hover:text-white/80"
              >
                Полное портфолио →
              </Link>
            </div>
          <div className="relative min-h-[440px] flex items-center justify-center">
            <CardSwap
              width={460}
              height={320}
              cardDistance={58}
                verticalDistance={68}
                delay={4200}
                pauseOnHover
                easing="elastic"
                className="relative translate-x-[0%] translate-y-[2%] scale-[0.86] md:scale-[0.94]"
              >
                {portfolioCases.slice(0, 3).map((project, idx) => (
                  <SwapCard
                    key={project.slug}
                    className="overflow-hidden border border-white/80 bg-black/90 shadow-[0_0_30px_rgba(0,0,0,0.55)]"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%), url(${project.image})`,
                      }}
                    />
                    <div className="relative flex h-full flex-col justify-between p-6">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.08em] text-white/60">
                        <span>#{idx + 1} {project.industry}</span>
                        <span>{project.year}</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify_between gap-3">
                          <h4 className="text-xl font-semibold">{project.name}</h4>
                          <Badge variant="outline">{project.technologies[0]}</Badge>
                        </div>
                        <p className="text-white/70 line-clamp-3">{project.summary}</p>
                        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.08em] text-white/60">
                          <span>{project.technologies.slice(0, 3).join(" / ")}</span>
                          {project.metrics[0] ? (
                            <>
                              <span className="text-white/30">•</span>
                              <span>{project.metrics[0].label} {project.metrics[0].value}</span>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </SwapCard>
                ))}
              </CardSwap>
            </div>
          </div>
        </section>
        
        <section className="space-y-8">
          <SectionHeading
            label="Маркетплейс"
            title="Готовые к запуску шаблоны"
            description="Шаблоны, которые уже готовы к публикации. Их видно поисковикам и их просто настроить под себя."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {marketplaceTemplates.slice(0, 3).map((template, idx) => (
              <Link
                key={template.slug}
                href={`/marketplace/${template.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 transition duration-200 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              >
                <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 transition duration-200 group-hover:opacity-100" />
                <div className="relative h-44 w-full overflow-hidden rounded-2xl">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%), url(${template.image})`,
                    }}
                  />
                </div>
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

        <section className="space-y-6">
          <SectionHeading
            label="Стек"
            title="Технологический стек"
            description="Инструменты, на которых собираем продукты и сервисы."
          />
          <LogoLoop
            logos={techLogos}
            speed={90}
            direction="left"
            logoHeight={56}
            gap={48}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#050505"
            scaleOnHover
            ariaLabel="Стек aibazar"
            className="w-full"
          />
        </section>

        <section className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <SectionHeading
              label="О студии"
              title="Студия, где дизайн и код идут вместе"
              description="aibazar — команда, которая делает продукты под ваши цели: от идеи и UX до готового кода и аналитики."
            />
            <p className="text-white/70">
              Работаем со стартапами и зрелыми командами: сайты, маркетплейсы,
              панели и личные кабинеты. Регулярно показываем прогресс, следим за конверсией,
              SEO, скоростью и удобством.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_40%)]" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm uppercase tracking-[0.08em] text-white/60">
                    Запись на звонок
                  </div>
                  <div className="text-2xl font-semibold">Запустим проект вместе</div>
                </div>
                <Badge variant="outline" className="bg-white text-black font-semibold">
                  Запись
                </Badge>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                Опишите задачу: сайт, сервис или маркетинговая кампания. Ответим с планом и
                свободными датами в течение одного рабочего дня.
              </p>
              <div className="grid gap-3 text-sm text-white/60 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.08em] text-white/50">Формат</div>
                  <div className="text-white">30–45 минут звонка</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.08em] text-white/50">Результат</div>
                  <div className="text-white">Понятный план и сроки старта</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">Оставить заявку</Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Услуги
                  </Button>
                </Link>
              </div>
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
