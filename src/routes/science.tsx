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
          <p>Patented methods of modifications can have substantial impact on pharmacology, enabling families of small molecules with tailored effects.</p>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold">Receptors of interest</h3>
            <div className="mt-4 flex flex-wrap gap-2">{receptors.map((r) => <span key={r} className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">{r}</span>)}</div>
            <h3 className="mt-6 font-semibold">Ion channels</h3>
            <div className="mt-4 flex flex-wrap gap-2">{channels.map((r) => <span key={r} className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">{r}</span>)}</div>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold">Technology Validation</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Produced in 50 kg batches</li>
              <li>• 10-ton annual GMP capacity with commercial partners</li>
              <li>• Health Canada drug licence (API manufacturing)</li>
              <li>• Blueprint for future CMC</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
