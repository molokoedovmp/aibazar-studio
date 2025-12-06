import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "О студии — aibazar",
  description:
    "aibazar — премиальная студия, создающая сайты на Next.js, SaaS-интерфейсы и автоматизации.",
  openGraph: {
    title: "О студии — aibazar",
    description:
      "Знакомство с aibazar: digital-студия, создающая уверенные веб-опыты.",
    url: "https://aibazar.studio/about",
    images: [
      {
        url: "/og-base.svg",
        width: 1200,
        height: 630,
        alt: "aibazar about",
      },
    ],
  },
  alternates: {
    canonical: "https://aibazar.studio/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/80 p-10 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent)]" />
        <div className="relative space-y-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border border-white/80 ring-[0.5px] ring-white/80 bg-black overflow-hidden">
                <Image
                  src="/default1.png"
                  alt="aibazar logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold">aibazar®</span>
                <span className="text-sm text-white/60">Studio</span>
              </div>
            </div>
            <Link href="/contact">
              <Button variant="outline">Связаться</Button>
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            <div className="space-y-5">
              <h2 className="text-sm uppercase tracking-[0.12em] text-white/50">
                Миссия
              </h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Премиальный минимализм</h3>
                <p className="text-white/70">
                  aibazar — digital-студия, создающая выразительные и технически
                  точные веб-опыты. Минимализм, читаемая типографика и инженерная
                  ясность.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Философия</h3>
                <p className="text-white/70">
                  Меньше шума — больше смысла. Чёткие сетки, чистые шрифты,
                  функциональная красота и прозрачная логика интерфейсов.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Технологии</h3>
                <p className="text-white/70">
                  Next.js, TypeScript, Tailwind, shadcn/ui, современные UI-компоненты
                  и мягкие микроанимации.
                </p>
              </div>
              <div className="pt-4 text-sm text-white/50">
                © 2025 aibazar® · All Rights Reserved
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-sm uppercase tracking-[0.12em] text-white/50">
                Почему aibazar
              </h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Единая галерея работ</h3>
                <p className="text-white/70">
                  Шаблоны и реальные проекты в одном интерфейсе, фильтрация по
                  категориям, высокая контрастность и удобная навигация.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Дизайн-этос</h3>
                <p className="text-white/70">
                  Крупная типографика, щедрые отступы, плавный motion. Каждый экран
                  служит конверсии и активации.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Система визуала</h3>
                <p className="text-white/70">
                  Чёткие токены, единый язык для веба, маркетинга и продуктовых
                  экранов. Баланс формы и функции.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-sm uppercase tracking-[0.12em] text-white/50">
                Подпись студии
              </h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Техническая точность</h3>
                <p className="text-white/70">
                  Каждый пиксель сверен с задачей продукта. Чистая композиция на всех
                  разрешениях.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Дизайн- и продукт-фокус</h3>
                <p className="text-white/70">
                  Форму не отделяем от функции: любой экран работает на задачу —
                  активация, конверсия, удержание.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Элитные результаты</h3>
                <p className="text-white/70">
                  Уверенный минимализм, скорость запуска и чёткие KPI: рост
                  конверсии, SEO и качественные лиды.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-white/70">
            <div className="flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "UX/UI", "Motion"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.08em]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link href="/portfolio" className="underline underline-offset-4">
                Портфолио
              </Link>
              <Link href="/services" className="underline underline-offset-4">
                Услуги
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
