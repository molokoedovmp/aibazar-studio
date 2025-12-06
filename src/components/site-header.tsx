import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/marketplace", label: "Маркетплейс" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/about", label: "О студии" },
  { href: "/contact", label: "Контакты" },
];

type SiteHeaderProps = {
  dense?: boolean;
};

export function SiteHeader({ dense = false }: SiteHeaderProps) {
  return (
    <header className={cn("w-full sticky top-0 z-50 backdrop-blur-lg")}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-white/80 ring-[0.5px] ring-white/80 bg-black">
              <Image
                src="/Logo2.png"
                alt="aibazar logo"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="tracking-tight">aibazar studio</span>
          </div>
        </Link>
        <nav
          className={cn(
            "hidden items-center gap-6 text-sm uppercase tracking-[0.08em] md:flex",
            dense ? "text-white/70" : "text-white"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <Button size="sm" variant="outline">
              Записаться
            </Button>
          </Link>
        </div>
      </div>
      <div className="edge-line h-px w-full" />
    </header>
  );
}
