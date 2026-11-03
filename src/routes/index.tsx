import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { SiteShell, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => meta("Kare Pharma — From Orange Peels to Medicine", "Pre-clinical small-molecule biotech developing new treatments for neurological conditions and pain."),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pre-clinical · Small molecule</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            From orange peels <span className="text-citrus">to medicine.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Kare Pharma turns abundant agricultural waste into novel drug candidates for neurological conditions and pain.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/science" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">Our science</Link>
            <Link to="/invest" className="rounded-full border px-6 py-3 font-medium hover:bg-secondary">Invest</Link>
          </div>
        </div>
        <img src={hero} alt="Orange peel beside a laboratory flask" width={1280} height={1024} className="rounded-2xl border" />
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="max-w-2xl text-3xl font-semibold">One starting point, many shots on goal.</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Our synthesis is a platform for the modular configuration of novel compounds — each customized for a different receptor and therapeutic profile, and each a New Chemical Entity we own.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["Catalytic platform", "A cost-effective process producing synthetic drug structures from orange peels."],
            ["Neurology & pain", "Focused on epilepsy and non-psychoactive pain treatment options."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
