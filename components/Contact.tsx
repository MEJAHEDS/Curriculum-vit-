export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="font-mono text-xs text-muted mb-2"># node: contact</p>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4">
          Discutons de votre prochain projet
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-10">
          Ouvert aux opportunités backend, data engineering et AI engineering.
          Réponse rapide par email ou LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
          <a
            href="mailto:mejahedsoufiane@gmail.com"
            className="px-5 py-2.5 rounded bg-mint text-graphite font-medium hover:opacity-90 transition"
          >
            mejahedsoufiane@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/soufiane-mejahed"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded border border-line hover:border-mint hover:text-mint transition"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-16 font-mono text-xs text-muted">
          Paris, France — +33 7 81 13 43 68
        </p>
      </div>
    </section>
  );
}
