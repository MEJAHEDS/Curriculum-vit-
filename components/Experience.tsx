const jobs = [
  {
    taskId: "task: xpln_ai",
    company: "xpln.ai",
    role: "Software Engineer",
    period: "Jan 2023 — Présent",
    location: "Paris, France",
    status: "running",
    bullets: [
      "Pipelines de données Apache Airflow sur GCP : orchestration quotidienne de DAGs consolidant les campagnes publicitaires (DV360, Meta, Pinterest) dans BigQuery",
      "Requêtes SQL BigQuery avancées : MERGE, table functions, window functions (ROW_NUMBER, LAG, PARTITION BY), requêtes paramétrées — alimentation de dashboards Looker Studio",
      "APIs REST et microservices Python pour l'intégration de données multi-sources (Gmail, Pinterest, DV360)",
      "Infrastructure cloud GCP (Cloud Functions, Cloud Storage, BigQuery), CI/CD GitHub Actions",
      "Extension Chrome de debug pour l'inspection des campagnes en temps réel",
      "Application mobile Android d'eye tracking (Java, SDK Android)",
    ],
  },
  {
    taskId: "task: anapix_medical",
    company: "ANAPIX Medical",
    role: "Ingénieur Logiciel Full Stack",
    period: "Déc 2020 — Déc 2022",
    location: "Paris, France",
    status: "success",
    bullets: [
      "Développement full stack d'applications web médicales : backend Java / Spring Boot, frontend Angular, REST APIs, bases de données relationnelles",
      "Intégration de systèmes tiers pour l'interopérabilité des données de santé",
      "Conformité réglementaire secteur médical",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs text-muted mb-2">
          # node: experience
        </p>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-10">
          Expérience professionnelle
        </h2>

        <div className="space-y-8">
          {jobs.map((job) => (
            <article key={job.taskId} className="node-card rounded-lg p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <p className="font-mono text-xs text-mint">{job.taskId}</p>
                <p className="font-mono text-xs text-muted">
                  status:{" "}
                  <span
                    className={
                      job.status === "running" ? "text-amber" : "text-mint"
                    }
                  >
                    {job.status}
                  </span>
                </p>
              </div>
              <h3 className="text-xl font-semibold">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-muted mb-4">
                {job.period} — {job.location}
              </p>
              <ul className="space-y-2 text-sm text-ink/90">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-mint font-mono select-none">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
