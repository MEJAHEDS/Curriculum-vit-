import PipelineDiagram from "./PipelineDiagram";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-grid bg-graphite">
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
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
          <span className="text-ink">agents IA</span>, et je les expose dans
          des applications <span className="text-ink">full stack</span>.
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
    </section>
  );
}
