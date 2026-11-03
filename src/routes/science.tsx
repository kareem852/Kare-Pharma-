import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/science")({
  head: () => meta("Our Science — Kare Pharma", "Kare's catalytic synthesis platform creates novel small molecules from orange peels, protected by 40+ patents."),
  component: Science,
});

const receptors = ["CB1", "CB2", "GPR55", "NAPE-PLD", "5-HT1A", "GPR75"];
const channels = ["NaV", "TRPV1", "NCX1 (Na/Ca)"];

function Science() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Technology platform" title="Bottom-up synthesis of natural and novel compounds" intro="Kare has developed a cost-effective catalytic process to produce synthetic drug structures from orange peels — protected by an IP moat of over 40 patents, 19 already issued." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div className="space-y-6 text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground">Pre-clinical toolkit for novel drugs</h2>
          <p>Structural control lets us modify Epidiolex and related compounds into New Chemical Entities from cheap, abundant and readily available agricultural waste.</p>
          <p>We use literature data to target receptors in novel ways — eliminating psychoactivity and reducing or removing tolerance.</p>
          <p>Patented methods for modifications including chirality and deuterium can have substantial impact on pharmacology, enabling families of small molecules.</p>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold">Receptors of interest</h3>
            <div className="mt-4 flex flex-wrap gap-2">{receptors.map((r) => <span key={r} className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">{r}</span>)}</div>
            <h3 className="mt-6 font-semibold">Ion channels</h3>
            <div className="mt-4 flex flex-wrap gap-2">{channels.map((r) => <span key={r} className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">{r}</span>)}</div>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold">Manufacturing</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Produced in 50 kg batches</li>
              <li>• 10-ton annual GMP capacity with commercial partners</li>
              <li>• Health Canada drug licence (API manufacturing)</li>
              <li>• Blueprint for future CMC</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="border-t bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-citrus">Proof point</p>
          <h2 className="mt-2 text-3xl font-semibold">KLS-13019</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">An Epidiolex analogue made with Kare's technology — 200× more effective than Epidiolex for chemotherapy-induced peripheral neuropathy (CIPN). Shown to prevent and reverse the condition, and also capable of treating Parkinson's disease at phase 1.</p>
        </div>
      </section>
    </SiteShell>
  );
}
