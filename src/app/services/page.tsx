import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

import SplineClient from "@/app/components/home/SplineClient";

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
      "Делаем сайт под вашу задачу: разбираемся в продукте, рисуем макеты и собираем готовые страницы. Сайт быстро грузится, его легко обновлять, и он сразу готов к продвижению.",
    image: "/public.png",
    deliverables: [
      "Главная и нужные разделы с понятным предложением, тарифами и ответами на вопросы",
      "Подключаем аналитику и настраиваем скорость, чтобы страницы открывались быстро",
      "Блоки и тексты, которые можно просто обновлять и переводить",
      "Пошаговая инструкция по запуску, поддержке и базовым настройкам SEO",
    ],
  },
  {
    id: "ux-ui",
    title: "UX/UI дизайн",
    description:
      "Рисуем понятные экраны, чтобы людям было легко дойти до нужного действия. Продумываем путь пользователя от первого клика до оплаты или заявки.",
    deliverables: [
      "Карты шагов пользователя, черновые схемы и кликабельные прототипы",
      "Единый набор цветов, шрифтов и элементов с простыми правилами",
      "Макеты для разных экранов и состояния элементов (наведение, ошибка, загрузка)",
      "Готовые экраны для сайта и продукта в одном стиле",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce решения",
    description:
      "Собираем интернет-магазин, где легко найти товар и оформить заказ. Покупателю понятно, сколько стоит и как оплатить, без лишних шагов.",
    image: "/prod.png",
    deliverables: [
      "Каталог, карточки товаров, корзина и простой заказ с подключённой аналитикой",
      "Промостраницы для акций, запусков и распродаж",
      "Проверка скорости и видимости в поиске с понятными рекомендациями",
      "Подключаем оплату, CRM, рассылки и уведомления",
    ],
  },
  {
    id: "saas",
    title: "SaaS разработка",
    description:
      "Делаем интерфейсы сервиса и личного кабинета, чтобы пользователи быстро разобрались и могли сами управлять тарифом и данными.",
    image: "/saas.png",
    deliverables: [
      "Сайт о продукте и интерфейсы внутри него в одном стиле",
      "Панели с показателями, отчёты, тарифы, роли и уведомления",
      "Набор готовых элементов и простая документация, чтобы развивать продукт дальше",
      "Шаги для старта: выбор тарифа, пробный период, смена и отмена без лишних обращений",
    ],
  },
  {
    id: "ai-automation",
    title: "AI-автоматизация",
    description:
      "Настраиваем автоматизацию и инструменты с ИИ, чтобы рутинные задачи делались сами. Следим за качеством ответов и безопасностью.",
    image: "/n8n.png",
    deliverables: [
      "План, как подключить нужные сервисы (n8n, API, AI) и какие задачи они будут закрывать",
      "Простые экраны для работы с ИИ с понятными ограничениями и запасным планом",
      "Считаем, сколько времени и денег экономит автоматизация, записываем результаты",
      "Настраиваем безопасность, версии промптов и оповещения об ошибках",
    ],
  },
  {
    id: "branding",
    title: "Брендинг",
    description:
      "Создаём внешний вид бренда: логотип, цвета, шрифты и правила использования. Сразу показываем, как это смотрится на сайте и в презентациях.",
    image: "/logo.png",
    deliverables: [
      "Главные элементы бренда и понятные гайдлайны",
      "Файлы для соцсетей, лендинга и email-рассылок",
      "Шаблоны для презентаций и материалы, которые удобно использовать в продукте",
      "Показываем, как применять бренд в интерфейсах, кнопках и иконках",
    ],
  },
];

const webServiceTable = [
  {
    name: "Консультации",
    scope:
      "Созваниваемся, разбираемся в задаче и конкурентах, выбираем подходящий формат. На выходе — понятный план работ и список шагов.",
    timeline: "1–3 дня",
  },
  {
    name: "UI/UX дизайн",
    scope:
      "Продумываем путь пользователя, рисуем черновики и финальные макеты. Экраны понятные и адаптированы под нужные устройства.",
    timeline: "1–2 недели",
  },
  {
    name: "Лендинг",
    scope:
      "Одностраничный сайт с чётким предложением, выгодами, ценами и ответами на вопросы. Подключаем аналитику и базовую SEO-структуру.",
    timeline: "2–3 недели",
  },
  {
    name: "Маркетинговая система",
    scope:
      "Набор блоков и страниц, которые легко собирать под разные акции и страны. Контент можно обновлять и тестировать без разработчика.",
    timeline: "3–5 недель",
  },
  {
    name: "E-commerce витрина",
    scope:
      "Каталог товаров, карточки, корзина и простой заказ. Настраиваем оплату, рассылки и отчёт по продажам.",
    timeline: "4–6 недель",
  },
  {
    name: "SaaS интерфейс",
    scope:
      "Создаём понятные панели и личный кабинет с ролями и уведомлениями. Пользователям легко начать, платить и находить нужные функции.",
    timeline: "5–7 недель",
  },
  {
    name: "AI-автоматизация",
    scope:
      "Связываем сервисы и настраиваем ИИ, чтобы рутинные задачи выполнялись автоматически. Добавляем логи, проверяем качество и безопасность.",
    timeline: "3–5 недель",
  },
  {
    name: "Веб-разработка",
    scope:
      "Верстаем и программируем страницы под разные устройства, настраиваем скорость загрузки и проверяем качество. Настраиваем сборку и тесты для стабильных релизов.",
    timeline: "2–6 недель",
  },
  {
    name: "Мобильная адаптация",
    scope:
      "Делаем так, чтобы сайт выглядел и работал удобно на любом экране. Проверяем жесты, загрузку и доступность.",
    timeline: "1–2 недели",
  },
  {
    name: "SEO-оптимизация",
    scope:
      "Настраиваем метатеги, понятные адреса и структурированные данные. Проверяем тексты и даём план, как улучшать видимость в поиске.",
    timeline: "1–3 недели",
  },
  {
    name: "Быстрая загрузка",
    scope:
      "Уменьшаем вес картинок и кода, настраиваем кеш и CDN. Проверяем скорость и сразу правим найденные проблемы.",
    timeline: "3–7 дней",
  },
  {
    name: "Техническая поддержка",
    scope:
      "Следим за сайтом, обновляем зависимости, делаем резервные копии и мелкие правки. Работаем по удобному графику.",
    timeline: "Подписка",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 px-6 py-12 md:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_40%)]" />
        <div className="relative space-y-6">
          <SectionHeading
            label="Услуги"
            title="Дизайн и разработка, которые двигают продукт"
            description="Собираем сайты, маркетплейсы и SaaS-интерфейсы, где сходятся стратегия, UX/UI, продакшн-код и автоматизация."
          />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_0.8fr] text-sm">
              <div className="px-4 py-3 text-white/60 uppercase tracking-[0.08em]">Услуга</div>
              <div className="px-4 py-3 text-white/60 uppercase tracking-[0.08em]">Что входит</div>
              <div className="px-4 py-3 text-white/60 uppercase tracking-[0.08em]">Срок</div>
            </div>
            <div className="divide-y divide-white/10">
              {webServiceTable.map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_0.8fr] items-start hover:bg-white/5 transition-colors"
                >
                  <div className="px-4 py-4 font-semibold">{row.name}</div>
                  <div className="px-4 py-4 text-white/70">{row.scope}</div>
                  <div className="px-4 py-4 text-white/80">{row.timeline}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-white/70 max-w-3xl">
            Работаем спринтами, подключаем аналитику, строим структуру для SEO и
            конверсии. Все ключевые состояния экранов документируем и передаём.
          </div>
        </div>
      </div>

      {/* <div className="grid gap-12">
        {services.map((service, idx) => {
          const hasImage = Boolean((service as { image?: string }).image);
          const serviceImage = (service as { image?: string }).image;
          const square = (
            <div className="relative w-full overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition duration-200 hover:-translate-y-1 hover:border-white/20">
              <div
                className={
                  hasImage
                    ? "aspect-square bg-cover bg-center"
                    : "aspect-square bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent)]"
                }
                style={hasImage ? { backgroundImage: `url(${serviceImage})` } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/45" />
            </div>
          );

          const splineBlock =
            idx === 1 ? (
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/80">
                <div className="aspect-square">
                  <SplineClient scene="https://prod.spline.design/xasN6jN3w1ggRc6p/scene.splinecode" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />
              </div>
            ) : null;

          const text = (
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-[0.08em] text-white/60">
                0{idx + 1} — {service.title}
              </div>
              <h2 className="text-3xl font-semibold">{service.title}</h2>
              <p className="text-white/70 text-lg">{service.description}</p>
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
            </div>
          );

          const visual = splineBlock ?? square;

          return (
            <section
              key={service.id}
              id={service.id}
              className="grid gap-8 md:grid-cols-2 items-center"
            >
              {idx % 2 === 0 ? (
                <>
                  {text}
                  {visual}
                </>
              ) : (
                <>
                  {visual}
                  {text}
                </>
              )}
            </section>
          );
        })}
      </div> */}

      <div className="grid gap-6 rounded-2xl border border-white/10 p-8 md:grid-cols-2 md:p-10">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Как работаем</h3>
          <p className="text-white/70">
            Делаем работу по шагам. Каждую неделю показываем, что уже готово, и
            сразу правим по вашим комментариям. План и сроки держим в одном
            документе.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Оставьте заявку</h3>
          <p className="text-white/70">
            Если услуга вам подходит, напишите коротко задачу и дедлайн. Ответим
            в рабочий день с простым планом действий.
          </p>
          <Link href="/contact">
            <Button>Отправить заявку</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
