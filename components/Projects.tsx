function FlowChain({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <span className="tag-pill rounded px-3 py-1.5">{s}</span>
          {i < steps.length - 1 && <span className="text-muted">→</span>}
        </div>
      ))}
    </div>
  );
}

const projects = [
  {
    taskId: "task: juriscan",
    name: "JuriScan",
    kind: "Extension Chrome — Agent IA d'analyse de conformité de factures",
    description:
      "Agent Claude avec tool use : détection des mentions obligatoires manquantes sur une facture, scoring de conformité de 0 à 100, puis relance automatique par email quand des éléments sont manquants.",
    flow: ["scan_facture", "flag_mention", "finalize", "email_relance"],
    stack: ["TypeScript", "Supabase", "LangSmith", "Claude API"],
  },
  {
    taskId: "task: prospect_ai",
    name: "ProspectAI",
    kind: "Système multi-agents de prospection B2B autonome",
    description:
      "Architecture orchestrée en cascade : un agent superviseur distribue le travail à des agents spécialisés, avec streaming des réponses en temps réel et observabilité complète sur chaque étape.",
    flow: ["supervisor", "researcher", "analyst", "writer"],
    stack: ["Multi-agents", "SSE streaming", "LangSmith"],
  },
];

export default function Projects() {
  return (
    <section id="projets" className="border-b border-line bg-surface/40">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs text-muted mb-2"># node: projects</p>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-10">
          Projets personnels
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.taskId} className="node-card rounded-lg p-6 flex flex-col">
              <p className="font-mono text-xs text-mint mb-1">{p.taskId}</p>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="font-mono text-xs text-muted mb-4">{p.kind}</p>
              <p className="text-sm text-ink/90 mb-6">{p.description}</p>

              <div className="mt-auto space-y-4">
                <FlowChain steps={p.flow} />
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono text-muted border border-line rounded px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
