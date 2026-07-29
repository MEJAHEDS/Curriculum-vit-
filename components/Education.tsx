const formations = [
  {
    school: "Epitech — École de l'excellence informatique",
    degree: "Master — Software Architecture AI/DATA",
    period: "2020 — 2023",
    location: "Paris, France",
  },
  {
    school: "Aix-Marseille Université",
    degree: "Licence professionnelle — Agile : de l'analyse au déploiement multi-supports",
    period: "2019 — 2020",
    location: "Aix-en-Provence, France",
  },
  {
    school: "École Supérieure de Technologie de Fès",
    degree: "DUT — Statistique et informatique décisionnelle",
    period: "2016 — 2018",
    location: "Fès, Maroc",
  },
];

export default function Education() {
  return (
    <section id="formation" className="border-b border-line bg-surface/40">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs text-muted mb-2"># node: education</p>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-10">
          Formation
        </h2>

        <ul className="space-y-6">
          {formations.map((f) => (
            <li key={f.school} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-l-2 border-line pl-5">
              <div>
                <p className="font-semibold">{f.degree}</p>
                <p className="text-sm text-muted">{f.school} — {f.location}</p>
              </div>
              <p className="font-mono text-xs text-muted whitespace-nowrap">{f.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
