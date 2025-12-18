import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/marketplace", label: "Маркетплейс" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/about", label: "О студии" },
  { href: "/contact", label: "Контакты" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 text-sm text-white/60">
          <div className="text-lg font-semibold text-white">aibazar</div>
          <p className="max-w-md">
            Студия, которая делает понятные и быстрые сайты, сервисы и интерфейсы.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.08em] text-white/70">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
