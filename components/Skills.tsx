const groups = [
  {
    stage: "stage: data_cloud",
    items: [
      "SQL BigQuery",
      "Apache Airflow",
      "GCP",
      "PostgreSQL",
      "Oracle / PL/SQL",
      "Looker Studio",
    ],
  },
  {
    stage: "stage: backend",
    items: [
      "Python (FastAPI, pandas)",
      "Java / Spring Boot",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    stage: "stage: frontend",
    items: ["Angular", "React", "Next.js", "Chrome Extensions (MV3)"],
  },
  {
    stage: "stage: devops",
    items: ["Docker", "GitHub Actions", "Git", "Supabase"],
  },
  {
    stage: "stage: ai_engineering",
    items: [
      "LLM (Claude, GPT-4, Mistral)",
      "Tool-calling",
      "Multi-agents",
      "RAG",
      "MCP",
      "LangSmith",
    ],
  },
];

export default function Skills() {
  return (
    <section id="competences" className="border-b border-line">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs text-muted mb-2"># node: skills</p>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-10">
          Compétences
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.stage} className="node-card rounded-lg p-6">
              <p className="font-mono text-xs text-amber mb-3">{g.stage}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="tag-pill rounded px-3 py-1.5 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
