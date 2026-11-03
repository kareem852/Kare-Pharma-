import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/team")({
  head: () => meta("Team — Kare Pharma", "Meet Kare Pharma's founders, commercial advisors and scientific advisory board."),
  component: Team,
});

const founders = [
  { n: "Kareem Abdur-Rashid", r: "Co-Founder & CEO", d: "Founded KCT, raised several funding rounds, 9 years of industry experience." },
  { n: "Dr. Kamal Abdur-Rashid", r: "Co-Founder & Acting CSO", d: "Founded several technology companies." },
  { n: "Dr. Wenli Jia", r: "Co-Founder & Scientist", d: "Expert synthetic chemist." },
];

function Card({ n, r, d }: { n: string; r: string; d: string }) {
  const initials = n.replace("Dr. ", "").split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display font-semibold text-accent-foreground">{initials}</div>
      <h3 className="mt-4 text-lg font-semibold">{n}</h3>
      <p className="text-sm font-medium text-primary">{r}</p>
      <p className="mt-3 text-sm text-muted-foreground">{d}</p>
    </div>
  );
}

function Team() {
  return (
    <SiteShell>
      <PageHeader eyebrow="People" title="Experienced builders of chemistry and medicine" intro="Our team has previously commercialized technologies with Firmenich, Teva, Merck and Apotex. With over 62 issued patents and 40 peer-reviewed publications; and decades of experience in academia and industry." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Founders</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">{founders.map((f) => <Card key={f.n} {...f} />)}</div>
        <h2 className="mt-16 text-2xl font-semibold">Advisors</h2>
      </section>
    </SiteShell>
  );
}
