import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioCases } from "@/data/portfolio";

type CasePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return portfolioCases.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const project = portfolioCases.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Кейс не найден — aibazar",
      description: "Этот кейс не найден.",
    };
  }

  return {
    title: `${project.name} — кейс aibazar`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — кейс`,
      description: project.summary,
      url: `https://aibazar.studio/portfolio/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.name} project preview`,
        },
      ],
    },
    alternates: {
      canonical: `https://aibazar.studio/portfolio/${project.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }: CasePageProps) {
  const project = portfolioCases.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioCases
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: project.name,
    description: project.summary,
    datePublished: `${project.year}-01-01`,
    about: project.industry,
    provider: {
      "@type": "Organization",
      name: "aibazar",
      url: "https://aibazar.studio",
    },
    url: `https://aibazar.studio/portfolio/${project.slug}`,
    image: project.image,
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
      <div className="flex flex-col gap-4">
        <Link
          href="/portfolio"
          className="text-xs uppercase tracking-[0.08em] text-white/60 hover:text-white"
        >
          ← Назад в портфолио
        </Link>
        <Badge variant="outline">{project.industry}</Badge>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          {project.name} — кейс разработки
        </h1>
        <p className="text-lg text-white/70 max-w-3xl">{project.summary}</p>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.08em] text-white/60">
          <Badge variant="outline">{project.year}</Badge>
          <Badge variant="outline">Next.js</Badge>
          <Badge variant="outline">Design + Build</Badge>
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/services">
            <Button size="lg">Услуги</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Запустить похожий проект
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="w-full rounded-2xl border border-white/10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${project.image})`, minHeight: 320 }}
      >
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-black/60 to-black/20 p-6 flex items-end">
          <div className="text-sm uppercase tracking-[0.08em] text-white/80">
            Визуал кейса
          </div>
        </div>
      </div>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Цели проекта</h2>
          <div className="space-y-2 text-white/70">
            {project.goals.map((goal) => (
              <div key={goal} className="flex gap-2">
                <span className="text-white/30">—</span>
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Поставки</h2>
          <div className="flex flex-wrap gap-2">
            {project.deliverables.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 p-6 space-y-3">
          <h3 className="text-xl font-semibold">До</h3>
          <p className="text-white/70">
            Разрозненные страницы, нечёткая иерархия CTA и разный визуальный язык
            в маркетинге и продукте.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 space-y-3">
          <h3 className="text-xl font-semibold">После</h3>
          <p className="text-white/70">
            Единая система, индексируемые лендинги и доказательный storytelling,
            который конвертит.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 space-y-3">
          <h3 className="text-xl font-semibold">Технологии</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Результаты</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 text-white/70">
            {project.results.map((result) => (
              <div key={result} className="flex gap-2">
                <span className="text-white/30">—</span>
                <span>{result}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 p-4 flex items-center justify-between"
              >
                <span className="text-white/60 text-sm uppercase tracking-[0.08em]">
                  {metric.label}
                </span>
                <span className="text-xl font-semibold">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Другие кейсы</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {otherProjects.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="rounded-2xl border border-white/10 overflow-hidden hover:border-white/30"
            >
              <div
                className="h-24 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{item.name}</div>
                  <Badge variant="outline">{item.industry}</Badge>
                </div>
                <p className="mt-2 text-sm text-white/60">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
    </div>
  );
}
