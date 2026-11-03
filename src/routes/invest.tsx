import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/invest")({
  head: () => meta("Invest — Kare Pharma", "Kare Pharma is raising a US$2.5–3M seed round to advance screening, animal studies and toxicology."),
  component: Invest,
});

const uses = [
  ["Functional receptor screening", "160 compounds — confirm binding and effect."],
  ["Animal studies", "Verify PK; confirm epilepsy, metabolic and pain models."],
  ["Toxicology", "Tox and further indication-specific animal models."],
];

function Invest() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Seed round" title="Raising US$2.5–3M" intro="Providing the NewCo with approximately 18–24 months of capital. Notable Kare Chemical investors include Francois Ravenelle and Capital M Ventures." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Use of funds</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          {uses.map(([t, d], i) => (
            <li key={t} className="rounded-xl border bg-card p-6">
              <span className="font-display text-sm font-semibold text-citrus">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 rounded-2xl bg-primary p-10 text-primary-foreground">
          <h2 className="text-3xl font-semibold">Get in touch</h2>
          <p className="mt-2 opacity-90">Kareem Abdur-Rashid, Co-Founder & CEO</p>
          <div className="mt-6 flex flex-wrap gap-6 font-medium">
            <a href="mailto:kareem@karechem.com" className="underline-offset-4 hover:underline">kareem@karechem.com</a>
            <a href="tel:+16473037248" className="underline-offset-4 hover:underline">647-303-7248</a>
            <a href="https://www.karechem.com/" className="underline-offset-4 hover:underline">karechem.com</a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
