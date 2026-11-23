import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/science")({
  head: () => meta("Our Science — Kare Pharma", "Kare's catalytic synthesis platform creates novel small molecules from orange peels, protected by 40+ patents."),
  component: Science,
});

function Science() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Technology platform" title="Bottom-up synthesis of natural and novel compounds" intro="Kare has developed a cost-effective catalytic process to produce synthetic drug structures from orange peels — protected by an IP moat of over 40 patents, 19 already issued." />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground">Pre-clinical toolkit for novel drugs</h2>
          <p>Structural control lets us modify Epidiolex and related compounds into New Chemical Entities from cheap, abundant and readily available agricultural waste.</p>
          <p>Patented methods of modifications can have substantial impact on pharmacology, enabling families of small molecules with tailored effects.</p>
        </div>
      </section>
    </SiteShell>
  );
}
