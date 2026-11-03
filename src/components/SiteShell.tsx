import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/science", label: "Science" },
  { to: "/pipeline", label: "Focus Areas" },
  { to: "/team", label: "Team" },
  { to: "/invest", label: "Invest" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
            <span className="h-3 w-3 rounded-full bg-citrus" />
            Kare <span className="font-normal text-muted-foreground">Pharma</span>
          </Link>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/invest" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Contact
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© 2026 Kare Pharma · Ontario's next major therapeutics platform</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="border-b bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>}
          <h1 className={`${eyebrow ? "mt-3 " : ""}max-w-3xl text-4xl font-semibold md:text-5xl`}>{title}</h1>
          {intro && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
