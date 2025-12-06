import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { portfolioCases } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Портфолио — кейсы aibazar",
  description:
    "Индексируемое портфолио кейсов aibazar. Проекты для SaaS, e-commerce, финтеха и автоматизации.",
  openGraph: {
    title: "Портфолио — aibazar",
    description:
      "Изучите кейсы для SaaS, e-commerce, финтеха и автоматизации.",
    url: "https://aibazar.studio/portfolio",
    images: [
      {
        url: "/og-base.svg",
        width: 1200,
        height: 630,
        alt: "aibazar portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://aibazar.studio/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
      <SectionHeading
        label="Портфолио"
        title="Индексируемые проекты и кейсы"
        description="Каждый проект построен с измеримым результатом. Открывайте кейсы ниже, чтобы увидеть детали."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {portfolioCases.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="card-shell rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-white/30 transition"
          >
            <div
              className="h-40 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <Badge variant="outline">{project.industry}</Badge>
              </div>
              <p className="text-white/70">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.metrics.slice(0, 3).map((metric) => (
                  <span
                    key={metric.label}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.08em] text-white/60"
                  >
                    {metric.label}: {metric.value}
                  </span>
                ))}
              </div>
              <div className="text-sm text-white/60">Читать кейс →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
