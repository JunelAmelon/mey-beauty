export default function LegalPage() {
  return (
    <main className="legal-page">
      <section className="about-hero" aria-label="Mentions légales">
        <h1>Mentions légales</h1>
        <div className="about-breadcrumb">
          <a href="#home">Accueil</a>
          <span>/</span>
          <span>Mentions légales</span>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-block">
          <h2>Éditeur du site</h2>
          <p>
            Mey Beauty
            <br />6 Place des Martyrs de Châteaubriand
            <br />91170 Viry‑Châtillon, France
          </p>
        </div>

        <div className="legal-block">
          <h2>Contact</h2>
          <p>
            Téléphone : +00 123 456 789
            <br />E‑mail : contact@meybeauty.fr
          </p>
        </div>

        <div className="legal-block">
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par un prestataire tiers.
          </p>
        </div>

        <div className="legal-block">
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus (textes, visuels, logos, graphismes) est protégé.
            Toute reproduction, totale ou partielle, est interdite sans autorisation.
          </p>
        </div>

        <div className="legal-actions">
          <a className="btn-cta" href="#home">Retour à l’accueil</a>
        </div>
      </section>
    </main>
  );
}
