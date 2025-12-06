export type MarketplaceTemplate = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  category: string;
  style: string;
  theme: string;
  price: number;
  stack: string[];
  features: string[];
  keywords: string[];
  image: string;
  previewUrl?: string;
};

const mono = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const marketplaceTemplates: MarketplaceTemplate[] = [
  {
    slug: "monolith-next",
    name: "Monolith Next",
    summary: "Система корпоративных сайтов на Next.js с модульными блоками.",
    description:
      "Жесткий корпоративный дизайн-систем для технологических компаний. Включает герои, преимущества, сравнения и ресурсные разделы, построенные с приоритетом SEO и B2B лидогенерации.",
    category: "SaaS",
    style: "Минимализм",
    theme: "Enterprise",
    price: 4200,
    stack: ["Next.js 16", "TypeScript", "Tailwind 4", "shadcn/ui"],
    features: [
      "Структурированные лендинги и ресурсные страницы для длинного SEO",
      "Блоки тарифов и сравнений с готовыми точками аналитики",
      "CMS-ready контентные модули и отзывчивая сетка",
      "Оптимизированный герой с ясным месседжем выше сгиба",
    ],
    keywords: [
      "корпоративный сайт шаблон",
      "Next.js SaaS стартер",
      "дизайн-система b2b",
      "seo лендинг",
    ],
    image: mono("photo-1460925895917-afdab827c52f"),
  },
  {
    slug: "noir-commerce",
    name: "Noir Commerce",
    summary: "Премиальный e-commerce шаблон с строгой витриной.",
    description:
      "Cinematic витрина для дорогих продуктов: редакционная типографика, акцент на PDP и конверсионные CTA. Создан для основателей, которым нужен бутик-магазин без потери скорости.",
    category: "E-commerce",
    style: "Редакционный",
    theme: "Luxury",
    price: 3800,
    stack: ["Next.js 16", "TypeScript", "Tailwind 4", "shadcn/ui"],
    features: [
      "Lookbook-герой с мягкими переходами",
      "PDP с материалами, размерами и уведомлениями о дропах",
      "Готовая корзина и закрепленные CTA",
      "Коллекции и story-страницы с SEO-разметкой",
    ],
    keywords: [
      "luxury ecommerce шаблон",
      "Next.js магазин",
      "бутик дизайн",
      "конверсионный PDP",
    ],
    image: mono("photo-1500530855697-b586d89ba3ee"),
  },
  {
    slug: "pulse-ai",
    name: "Pulse AI",
    summary: "Шаблон для AI- и автоматизационных сервисов с доказательной структурой.",
    description:
      "Pulse AI раскрывает предложения через ROI-метрики, прозрачность стека и CTA к созвону. Делает AI-студии точными и правдоподобными.",
    category: "AI",
    style: "Футуризм",
    theme: "Automation",
    price: 3600,
    stack: ["Next.js 16", "TypeScript", "Tailwind 4", "shadcn/ui"],
    features: [
      "Ленты метрик и ROI",
      "Матрицы услуг с фильтрами",
      "Превью кейсов с ссылками на полные истории",
      "SEO-готовые FAQ и глоссарии",
    ],
    keywords: [
      "сайт AI агентства",
      "шаблон студии автоматизации",
      "Next.js AI лендинг",
      "performance веб-дизайн",
    ],
    image: mono("photo-1504384308090-c894fdcc538d"),
  },
  {
    slug: "atelier-portfolio",
    name: "Atelier Portfolio",
    summary: "Минималистичный портфолио-грид с нарративом.",
    description:
      "Создан для студий и продуктовых команд, которые показывают процесс, а не только результат. Смелая типографика, строгие сетки и главы кейсов.",
    category: "Portfolio",
    style: "Минимализм",
    theme: "Creative",
    price: 2800,
    stack: ["Next.js 16", "TypeScript", "Tailwind 4", "shadcn/ui"],
    features: [
      "Нарративные главы с цитатами",
      "Таймлайны процесса и блоки поставок",
      "Карточки метрик и before/after",
      "Галерея с клавиатурной навигацией",
    ],
    keywords: [
      "портфолио сайт",
      "шаблон кейса",
      "сайт студии",
      "Next.js portfolio",
    ],
    image: mono("photo-1469474968028-56623f02e42e"),
  },
  {
    slug: "quantum-launch",
    name: "Quantum Launch",
    summary: "Лендинг-система для запуска SaaS или продукта.",
    description:
      "Все для product drop: четкий герой, позиционирование, тур по продукту, тарифы и FAQ. Готов к запуску за часы при премиальной подаче.",
    category: "Launch",
    style: "Структура",
    theme: "Product",
    price: 2500,
    stack: ["Next.js 16", "TypeScript", "Tailwind 4", "shadcn/ui"],
    features: [
      "Герой с парными CTA",
      "Тур по функциям с деликатным motion",
      "Тарифная сетка и сравнения",
      "FAQ и блок контакта",
    ],
    keywords: [
      "saas launch шаблон",
      "продуктовый лендинг",
      "Next.js маркетинг",
      "чистый лендинг",
    ],
    image: mono("photo-1487058792275-0ad4aaf24ca7"),
  },
  {
    slug: "glyph-studio",
    name: "Glyph Studio",
    summary: "Агентский сайт для студий на ретейнере.",
    description:
      "Cinematic, но строгий сайт для агентств: матрицы услуг, лидершип, библиотека CTA, удерживающая лид внутри истории.",
    category: "Agency",
    style: "Архитектоника",
    theme: "Studio",
    price: 4100,
    stack: ["Next.js 16", "TypeScript", "Tailwind 4", "shadcn/ui"],
    features: [
      "Линейка услуг с ссылками на кейсы",
      "Блоки команды и лидершипа",
      "Контент-хаб для статей",
      "Закрепленная контактная полоса",
    ],
    keywords: [
      "сайт агентства",
      "Next.js студия",
      "премиальный веб-дизайн",
      "структурный сайт",
    ],
    image: mono("photo-1482192596544-9eb780fc7f66"),
  },
];
