import PipelineDiagram from "./PipelineDiagram";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-grid bg-graphite">
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          
          {/* Colonne texte */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6 font-mono text-xs text-mint">
              <span className="w-2 h-2 rounded-full bg-mint status-dot" />
              <span>status: open_to_opportunities</span>
            </div>

            <h1 className="font-mono text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              Soufiane Mejahed
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-muted max-w-2xl">
              Ingénieur logiciel — je construis des{" "}
              <span className="text-ink">pipelines de données</span>, des{" "}
              <span className="text-ink">APIs backend</span> et des{" "}
              <span className="text-ink">agents IA</span>, et je les expose
              dans des applications <span className="text-ink">full stack</span>.
            </p>

            <div className="mt-10">
              <PipelineDiagram />
            </div>

            <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
              <a
                href="#projets"
                className="px-5 py-2.5 rounded bg-mint text-graphite font-medium hover:opacity-90 transition"
              >
                Voir les projets
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded border border-line hover:border-mint hover:text-mint transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Colonne photo */}
          <div className="order-1 lg:order-2 lg:pt-2">
            <div className="relative w-full max-w-[320px] mx-auto lg:mx-0">
              
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-mint/70" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-mint/70" />

              <div className="relative rounded-lg border border-line bg-surface p-3">
                <img
                  src="/badge_pic.png"
                  alt="Soufiane Mejahed"
                  className="w-full aspect-[4/5] object-cover rounded"
                />
                <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-muted">
                  <span className="text-mint">● soufiane_mejahed.jpg</span>
                  <span>Paris, FR</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}