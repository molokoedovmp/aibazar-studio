import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { portfolioCases } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Услуги — разработка сайтов на Next.js",
  description:
    "Кастомная разработка сайтов на Next.js, UX/UI, e-commerce, SaaS, AI-автоматизация и брендинг от студии aibazar.",
  keywords: [
    "разработка сайтов Next.js",
    "UX/UI дизайн",
    "e-commerce решения",
    "SaaS разработка",
    "AI автоматизация",
    "брендинг",
  ],
  openGraph: {
    title: "Услуги — aibazar studio",
    description:
      "Разработка на Next.js, UX/UI, e-commerce, SaaS, автоматизация и брендинг.",
    url: "https://aibazar.studio/services",
    images: [
      {
        url: "/og-base.svg",
        width: 1200,
        height: 630,
        alt: "aibazar services",
      },
    ],
  },
  alternates: {
    canonical: "https://aibazar.studio/services",
  },
};

const services = [
  {
    id: "custom-web",
    title: "Кастомная разработка сайтов на Next.js",
    description:
      "Маркетинговые системы с модульными блоками, глобальными компонентами и SEO-архитектурой. Быстрые, адаптивные, готовы к росту.",
    deliverables: [
      "Лендинги с героем, доказательствами, тарифами и FAQ",
      "Оптимизация скорости и подключение аналитики",
      "Контентные модели, готовые для CMS",
    ],
  },
  {
    id: "ux-ui",
    title: "UX/UI дизайн",
    description:
      "Продуктовый и маркетинговый дизайн с атомарными токенами, понятным UI и гайдлайнами по motion и анимациям.",
    deliverables: [
      "Библиотеки компонентов и документация",
      "Адаптивные макеты с упором на читаемость",
      "Спеки взаимодействий и прототипирование",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce решения",
    description:
      "Конверсионные витрины с редакционным мерчендайзингом, нарративными PDP и быстрыми чекаутами.",
    deliverables: [
      "Коллекции, PDP и корзина",
      "Промо-лендинги под кампании",
      "Аудиты скорости и SEO",
    ],
  },
  {
    id: "saas",
    title: "SaaS разработка",
    description:
      "Фронтенды для SaaS с онбордингом под активацию, дэшбордами и самообслуживанием тарифа.",
    deliverables: [
      "Маркетинговые сайты продукта",
      "In-app UI и наборы компонентов",
      "Отчёты по использованию и биллинг",
    ],
  },
  {
    id: "ai-automation",
    title: "AI-автоматизация",
    description:
      "AI-интерфейсы и автоматизация процессов: ясные промпты, защитные сценарии и измеримый ROI.",
    deliverables: [
      "Стратегия и интеграция автоматизаций",
      "Дизайн интерфейсов для AI-копилотов",
      "Измерение и эксперименты",
    ],
  },
  {
    id: "branding",
    title: "Брендинг",
    description:
      "Айдентика — логотип, типографика и гайды запуска, согласованные с цифровыми поверхностями.",
    deliverables: [
      "Визуальная айдентика и гайдлайны",
      "Лонч-киты и соц-ассеты",
      "Презентационные шаблоны",
    ],
  },
];

export default function ServicesPage() {
  const visuals = {
    custom: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
    uxui: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    ecommerce: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80",
    saas: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    ai: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    branding: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  };

  const heroNature =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 px-6 py-12 md:px-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroNature})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black/90" />
        <div className="relative space-y-5">
          <SectionHeading
            label="Услуги"
            title="Дизайн и разработка, которые двигают продукт"
            description="Собираем сайты, маркетплейсы и SaaS-интерфейсы, где сходятся стратегия, UX/UI, продакшн-код и автоматизация."
          />
          <div className="text-white/70 max-w-3xl">
            Работаем спринтами, подключаем аналитику, строим структуру для SEO и
            конверсии. Все ключевые состояния экранов документируем и передаём.
          </div>
        </div>
      </div>

      <div className="grid gap-12">
        {services.map((service, idx) => {
          const media =
            service.id === "custom-web"
              ? visuals.custom
              : service.id === "ux-ui"
              ? visuals.uxui
              : service.id === "ecommerce"
              ? visuals.ecommerce
              : service.id === "saas"
              ? visuals.saas
              : service.id === "ai-automation"
              ? visuals.ai
              : visuals.branding;

          const square = (
            <div className="relative w-full overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition duration-200 hover:-translate-y-1 hover:border-white/20">
              <div
                className="aspect-square bg-cover bg-center opacity-90"
                style={{ backgroundImage: `url(${media})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/45" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur border border-white/20" />
              </div>
            </div>
          );

          const text = (
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-[0.08em] text-white/60">
                0{idx + 1} — {service.title}
              </div>
              <h2 className="text-3xl font-semibold">{service.title}</h2>
              <p className="text-white/70 text-lg">{service.description}</p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.08em] text-white/50">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">shadcn/ui</Badge>
                <Badge variant="outline">Tailwind</Badge>
              </div>
              <div className="grid gap-2 text-sm text-white/70">
                {service.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex gap-2 items-start">
                    <span className="text-white/30">—</span>
                    <span>{deliverable}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Link href="/contact">
                  <Button variant="outline">Запустить услугу</Button>
                </Link>
                <Link
                  href="/services"
                  className="text-xs uppercase tracking-[0.08em] text-white/60 hover:text-white"
                >
                  Подробнее →
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-white/60">
                <span>Связанные кейсы:</span>
                {portfolioCases.slice(idx, idx + 2).map((project) => (
                  <Link
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    className="underline decoration-white/30 underline-offset-4 hover:text-white"
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
            </div>
          );

          return (
            <section
              key={service.id}
              id={service.id}
              className="grid gap-8 md:grid-cols-2 items-center"
            >
              {idx % 2 === 0 ? (
                <>
                  {text}
                  {square}
                </>
              ) : (
                <>
                  {square}
                  {text}
                </>
              )}
            </section>
          );
        })}
      </div>

      <div className="grid gap-6 rounded-2xl border border-white/10 p-8 md:grid-cols-2 md:p-10">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Модель работы</h3>
          <p className="text-white/70">
            Работаем спринтами, где дизайн, разработка и QA движутся вместе.
            Еженедельные ревью, прозрачный roadmap и KPI по конверсии и SEO в
            центре.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Готовы начать</h3>
          <p className="text-white/70">
            Расскажите о дедлайне и целях. Ответим в течение рабочего дня с
            понятным планом.
          </p>
          <Link href="/contact">
            <Button>Назначить звонок</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
