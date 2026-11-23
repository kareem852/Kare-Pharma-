import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logoAsset from "@/assets/kare-pharma-logo.asset.json";

const nav = [
  { to: "/science", label: "Science" },
  { to: "/pipeline", label: "Focus Areas" },
  { to: "/team", label: "Team" },
  { to: "/invest", label: "Invest" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // The dropdown should never outlive the page it was opened on.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    // Above the md breakpoint the inline nav takes over, so drop the dropdown.
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);

    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:flex md:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <img src={logoAsset.url} alt="Kare Pharma logo" className="h-9 w-auto shrink-0" />
            <span className="truncate font-display text-xl font-semibold">
              Kare <span className="font-normal text-muted-foreground">Pharma</span>
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Link to="/invest" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              Contact
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border text-foreground hover:bg-secondary md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/70 py-3 last:border-0 hover:text-primary"
                  activeProps={{ className: "font-semibold text-primary" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
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
