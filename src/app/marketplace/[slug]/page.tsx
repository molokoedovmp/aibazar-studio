import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { marketplaceTemplates } from "@/data/marketplace";

type TemplatePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return marketplaceTemplates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({
  params,
}: TemplatePageProps): Promise<Metadata> {
  const template = marketplaceTemplates.find((item) => item.slug === params.slug);

  if (!template) {
    return {
      title: "Шаблон не найден — маркетплейс aibazar",
      description: "Этот шаблон не найден в маркетплейсе aibazar.",
    };
  }

  return {
    title: `${template.name} — шаблон Next.js от aibazar`,
    description: template.description,
    openGraph: {
      title: `${template.name} — шаблон Next.js`,
      description: template.summary,
      url: `https://aibazar.studio/marketplace/${template.slug}`,
      images: [
        {
          url: template.image,
          width: 1200,
          height: 630,
          alt: `${template.name} template preview`,
        },
      ],
    },
    alternates: {
      canonical: `https://aibazar.studio/marketplace/${template.slug}`,
    },
  };
}

export default function TemplateDetailPage({ params }: TemplatePageProps) {
  const template = marketplaceTemplates.find((item) => item.slug === params.slug);

  if (!template) {
    notFound();
  }

  const related = marketplaceTemplates
    .filter((item) => item.slug !== template.slug)
    .slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: template.name,
    description: template.description,
    brand: {
      "@type": "Brand",
      name: "aibazar",
    },
    category: template.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: template.price,
      availability: "https://schema.org/InStock",
      url: `https://aibazar.studio/marketplace/${template.slug}`,
    },
    image: template.image,
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
      <div className="flex flex-col gap-4">
        <Link
          href="/marketplace"
          className="text-xs uppercase tracking-[0.08em] text-white/60 hover:text-white"
        >
          ← Назад в маркетплейс
        </Link>
        <Badge variant="outline">{template.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          {template.name} — шаблон Next.js для брендов {template.theme}
        </h1>
        <p className="text-lg text-white/70 max-w-3xl">{template.description}</p>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.08em] text-white/60">
          <Badge variant="outline">{template.style}</Badge>
          <Badge variant="outline">{template.theme}</Badge>
          <Badge variant="outline">SEO готов</Badge>
          <Badge variant="outline">shadcn/ui</Badge>
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button size="lg">Купить шаблон (${template.price})</Button>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Запросить кастомизацию
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="w-full rounded-2xl border border-white/10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${template.image})`, minHeight: 320 }}
      >
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-black/60 to-black/20 p-6 flex items-end">
          <div className="text-sm uppercase tracking-[0.08em] text-white/80">
            Превью героя — шаблон Next.js
          </div>
        </div>
      </div>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Особенности шаблона</h2>
          <div className="space-y-3 text-white/70">
            {template.features.map((feature) => (
              <div key={feature} className="flex gap-2">
                <span className="text-white/30">—</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Стек</h2>
          <div className="flex flex-wrap gap-2">
            {template.stack.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <div className="text-sm uppercase tracking-[0.08em] text-white/60">
              SEO и производительность
            </div>
            <p className="mt-2 text-white/70">
              Уникальные блоки <code className="text-white">metadata</code>, Product
              JSON-LD, OpenGraph-превью и структурированные заголовки для длинных
              текстов.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Скриншоты</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_45%)] p-6 text-sm text-white/60"
            >
              Структурный плейсхолдер {index}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Похожие шаблоны</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/marketplace/${item.slug}`}
              className="rounded-2xl border border-white/10 overflow-hidden hover:border-white/30"
            >
              <div
                className="h-28 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{item.name}</div>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <p className="mt-2 text-sm text-white/60">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </div>
  );
}
