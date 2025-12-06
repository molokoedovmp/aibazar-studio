export type PortfolioCase = {
  slug: string;
  name: string;
  summary: string;
  industry: string;
  deliverables: string[];
  goals: string[];
  results: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  image: string;
  year: string;
};

const mono = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "helix-industries",
    name: "Helix Industries",
    summary:
      "Переупаковка промышленной автоматизации: сайт, который продает через ясную структуру и метрики.",
    industry: "Промышленная автоматизация",
    deliverables: [
      "Редизайн сайта на Next.js",
      "Нарратив продукта",
      "Библиотека SEO-лендингов",
    ],
    goals: [
      "Упростить сложные продуктовые линии на одной поверхности",
      "Ускорить сделки через технические доказательства",
      "Построить лендинговую систему под рекламу",
    ],
    results: [
      "42% рост квалифицированных демо за 60 дней",
      "Снижение bounce rate на продуктовых страницах на 31%",
      "120+ небрендовых ключей в SEO за 90 дней",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Plausible"],
    metrics: [
      { label: "Конверсия", value: "+42%" },
      { label: "Bounce rate", value: "-31%" },
      { label: "SEO-ключи", value: "120+" },
    ],
    image: mono("photo-1469474968028-56623f02e42e"),
    year: "2024",
  },
  {
    slug: "lumen-bank",
    name: "Lumen Bank",
    summary:
      "Цифровой банк с цельной визуальной системой и UX, который строит доверие.",
    industry: "Финтех",
    deliverables: [
      "Монохромная дизайн-система",
      "Маркетинговый сайт web-app",
      "Документация компонентов",
    ],
    goals: [
      "Создать публичный сайт с приоритетом доверия",
      "Унифицировать маркетинг и in-app визуал",
      "Улучшить доступность и ясность",
    ],
    results: [
      "Рост NPS на 18 пунктов",
      "Время на странице +25% по фичам",
      "60+ UI-токенов снизили дизайн-долг",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Storybook"],
    metrics: [
      { label: "NPS", value: "+18" },
      { label: "Time on page", value: "+25%" },
      { label: "Design tokens", value: "60+" },
    ],
    image: mono("photo-1482192596544-9eb780fc7f66"),
    year: "2023",
  },
  {
    slug: "northwind-saas",
    name: "Northwind SaaS",
    summary:
      "Переосмысленный SaaS-аналитика: чёткие смыслы, доказательства и UI, что объясняет продукт.",
    industry: "SaaS-аналитика",
    deliverables: [
      "Маркетинговый сайт продукта",
      "Шаблоны кейсов",
      "Интерактивные туры по функциям",
    ],
    goals: [
      "Улучшить понимание продукта для enterprise",
      "Вывести социальные доказательства и партнёров",
      "Запуск с SEO-страницами под каждый сценарий",
    ],
    results: [
      "3 enterprise-контракта в первый месяц",
      "Средняя сессия +38%",
      "Единый голос бренда через блоки",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Sanity CMS"],
    metrics: [
      { label: "Enterprise сделки", value: "3" },
      { label: "Длительность сессии", value: "+38%" },
      { label: "Таймлайн запуска", value: "5 недель" },
    ],
    image: mono("photo-1500530855697-b586d89ba3ee"),
    year: "2024",
  },
  {
    slug: "carbon-studio",
    name: "Carbon Studio",
    summary:
      "Сайт дизайн-студии с модульным storytelling для бренда, продукта и услуг.",
    industry: "Креативная студия",
    deliverables: [
      "Полный веб-опыт",
      "Визуалы для deck",
      "Иллюстрации процесса",
    ],
    goals: [
      "Показать студию как элитную и уверенную",
      "Подсветить процесс и глубину экспертизы",
      "Удерживать интерес закрепленными CTA",
    ],
    results: [
      "Пайплайн расписан на 10 недель вперед",
      "Конверсия в звонок +29%",
      "Целостный бренд в deck и вебе",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    metrics: [
      { label: "Пайплайн", value: "10 недель" },
      { label: "Звонок из заявки", value: "+29%" },
      { label: "Проектов", value: "14" },
    ],
    image: mono("photo-1504384308090-c894fdcc538d"),
    year: "2022",
  },
];
