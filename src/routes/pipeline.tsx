import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/pipeline")({
  head: () => meta("Focus Areas — Kare Pharma", "Kare's CB1/CB2 compound program targets epilepsy and non-psychoactive pain treatment."),
  component: Pipeline,
});

function Pipeline() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Therapeutic value" title="Improving outcomes and quality of life" intro="Similar drugs and natural product structures are well accepted for epilepsy and show broad utility across neurological and metabolic conditions." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
        <article className="rounded-2xl border bg-card p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Epilepsy</p>
          <h2 className="mt-2 text-2xl font-semibold">Epidiolex Analogues</h2>
          <p className="mt-4 text-muted-foreground">Enabling multiple pathways to approval with enhanced pharmacokinetics and bioavailability.</p>
          <p className="mt-6 font-display text-3xl font-semibold text-primary">$9B → $15B</p>
          <p className="text-sm text-muted-foreground">Market size, projected by 2032</p>
          <p className="mt-6 text-sm text-muted-foreground">Recent exits: GW ($7.2B, 2021), Zogenix ($1.9B, 2022), Longboard ($2.6B, 2024).</p>
        </article>
        <article className="rounded-2xl border bg-card p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-citrus">Pain</p>
          <h2 className="mt-2 text-2xl font-semibold">A non-psychoactive option</h2>
          <p className="mt-4 text-muted-foreground">Dronabinol is used by key opinion leaders to treat pain, but physicians and patients want a non-psychoactive alternative.</p>
          <p className="mt-6 font-display text-3xl font-semibold text-citrus">Multi-billion Dollar pain market</p>
        </article>
      </section>
    </SiteShell>
  );
}
