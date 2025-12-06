import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Контакты — aibazar studio",
  description:
    "Свяжитесь с aibazar для создания сайтов, SaaS-интерфейсов и запусков продуктов.",
  openGraph: {
    title: "Контакты — aibazar",
    description: "Начните проект с aibazar. Монохромная digital-студия.",
    url: "https://aibazar.studio/contact",
    images: [
      {
        url: "/og-base.svg",
        width: 1200,
        height: 630,
        alt: "aibazar contact",
      },
    ],
  },
  alternates: {
    canonical: "https://aibazar.studio/contact",
  },
};

export default function ContactPage() {
  const bgImage =
    "/image.png";

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-4xl px-6 py-16 space-y-10">
        <div className="space-y-4">
          <Badge variant="outline">Контакты</Badge>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Расскажите о вашем сайте
          </h1>
          <p className="text-lg text-white/75">
            Кастомный сайт, SaaS UI или автоматизация — опишите цели и сроки.
            Ответим в течение рабочего дня.
          </p>
        </div>

        <form className="space-y-6 rounded-2xl border border-white/15 bg-black/60 p-8 backdrop-blur">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-white/70">
              <span className="uppercase tracking-[0.08em] text-white">Имя</span>
              <Input name="name" placeholder="Ваше имя" required />
            </label>
            <label className="space-y-2 text-sm text-white/70">
              <span className="uppercase tracking-[0.08em] text-white">Email</span>
              <Input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-white/70">
            <span className="uppercase tracking-[0.08em] text-white">
              Сообщение о проекте
            </span>
            <Textarea
              name="message"
              rows={5}
              placeholder="Опишите цели, сроки и ссылки."
              required
            />
          </label>
          <label className="flex items-center gap-3 text-sm text-white/70">
            <input
              type="checkbox"
              name="requestWebsite"
              className="size-4 accent-white"
            />
            <span className="uppercase tracking-[0.08em]">
              Запросить создание сайта
            </span>
          </label>
          <Button type="submit" size="lg">
            Отправить
          </Button>
        </form>

        <div className="rounded-2xl border border-white/15 bg-black/60 p-6 backdrop-blur space-y-3">
          <div className="text-sm uppercase tracking-[0.08em] text-white/60">
            Нужен прямой контакт?
          </div>
          <div className="flex flex-wrap gap-4 text-lg font-semibold">
            <a href="mailto:hello@aibazar.studio" className="hover:underline">
              hello@aibazar.studio
            </a>
            <span className="text-white/40">/</span>
            <Link href="/marketplace" className="hover:underline">
              Шаблоны маркетплейса
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
