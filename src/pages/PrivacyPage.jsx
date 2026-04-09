export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="about-hero" aria-label="Politique de confidentialité">
        <h1>Politique de confidentialité</h1>
        <div className="about-breadcrumb">
          <a href="#home">Accueil</a>
          <span>/</span>
          <span>Confidentialité</span>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-block">
          <h2>Données collectées</h2>
          <p>
            Nous collectons uniquement les données nécessaires au traitement des demandes et réservations
            (ex: nom, e‑mail, téléphone), ainsi que des données techniques (ex: journaux, informations de navigation)
            dans la limite du nécessaire.
          </p>
        </div>

        <div className="legal-block">
          <h2>Finalités</h2>
          <p>
            Les données sont utilisées pour : répondre aux demandes, gérer les rendez‑vous, améliorer l’expérience
            du site et assurer la sécurité.
          </p>
        </div>

        <div className="legal-block">
          <h2>Cookies</h2>
          <p>
            Des cookies peuvent être utilisés pour le bon fonctionnement du site et la mesure d’audience.
            Vous pouvez limiter leur usage via les paramètres de votre navigateur.
          </p>
        </div>

        <div className="legal-block">
          <h2>Vos droits</h2>
          <p>
            Conformément à la réglementation, vous disposez de droits d’accès, de rectification et de suppression.
            Pour exercer ces droits : contact@meybeauty.fr
          </p>
        </div>

        <div className="legal-actions">
          <a className="btn-cta" href="#home">Retour à l’accueil</a>
        </div>
      </section>
    </main>
  );
}
