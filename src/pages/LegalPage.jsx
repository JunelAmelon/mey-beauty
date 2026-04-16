export default function LegalPage() {
  return (
    <main className="legal-page">
      <section className="page-hero-banner" aria-label="Mentions légales">
        <h1>Mentions légales</h1>
        <div className="breadcrumb">
          <a href="#home">Accueil</a>
          <span>/</span>
          <span>Mentions légales</span>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-block">
          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site internet est édité par <strong>Mey Beauty</strong> (ci‑après « l’Éditeur »),
            exploitant un institut de beauté.
            <br />Adresse : 6 Place des Martyrs de Châteaubriand, 91170 Viry‑Châtillon, France.
            <br />Téléphone : +33 7 49 22 68 01.
            <br />E‑mail : contact@meybeauty.fr.
            <br />Toute correspondance relative au site (réclamation, demande d’information, exercice de droits)
            doit être adressée en priorité par e‑mail afin d’assurer un traitement rapide et traçable.
          </p>
        </div>

        <div className="legal-block">
          <h2>2. Directeur de la publication</h2>
          <p>
            Le directeur de la publication est l’Éditeur.
            <br />Le responsable de la rédaction et de la mise à jour des contenus est également l’Éditeur,
            sauf mention contraire.
          </p>
        </div>

        <div className="legal-block">
          <h2>3. Hébergement</h2>
          <p>
            Le site est hébergé par un prestataire tiers.
            <br />Conformément à l’article 6, I, 2° de la loi n° 2004‑575 du 21 juin 2004 pour la confiance
            dans l’économie numérique (LCEN), l’identité de l’hébergeur peut être communiquée sur demande
            légitime et dans la mesure permise par la réglementation.
          </p>
        </div>

        <div className="legal-block">
          <h2>4. Propriété intellectuelle</h2>
          <p>
            L’ensemble du site, sa structure générale, ainsi que les contenus (textes, images, photographies,
            vidéos, graphismes, logos, icônes, éléments sonores, bases de données, chartes et tout autre élément)
            sont protégés par le droit de la propriété intellectuelle et relèvent, selon les cas, de la propriété
            de l’Éditeur ou de tiers ayant autorisé l’Éditeur à les utiliser.
            <br />Toute reproduction, représentation, adaptation, modification, publication, transmission ou
            dénaturation, totale ou partielle, par quelque procédé que ce soit, sans l’autorisation écrite
            préalable de l’Éditeur est interdite, sauf exceptions légales.
            <br />Toute utilisation non autorisée est susceptible de constituer un acte de contrefaçon engageant
            la responsabilité civile et/ou pénale de son auteur.
          </p>
        </div>

        <div className="legal-block">
          <h2>5. Conditions d’accès et d’utilisation</h2>
          <p>
            L’accès au site est libre et gratuit, hors coûts d’accès à internet et de télécommunications.
            L’utilisateur s’engage à utiliser le site de manière loyale, à ne pas porter atteinte à son intégrité,
            à ne pas tenter d’accéder frauduleusement aux systèmes d’information et à ne pas perturber
            son fonctionnement.
            <br />L’Éditeur se réserve le droit de suspendre, limiter ou interrompre l’accès au site, notamment
            pour des opérations de maintenance, des mises à jour ou en cas d’événement hors contrôle.
          </p>
        </div>

        <div className="legal-block">
          <h2>6. Responsabilité</h2>
          <p>
            Les informations diffusées sur le site le sont à titre informatif et général. Malgré le soin apporté
            à leur mise à jour, l’Éditeur ne garantit pas l’exactitude, l’exhaustivité ou l’actualité permanente
            des contenus.
            <br />L’Éditeur ne saurait être tenu responsable des dommages directs ou indirects pouvant résulter
            de l’accès ou de l’utilisation du site, y compris en cas d’interruption, d’erreurs, d’indisponibilité,
            d’intrusion, de virus ou de tout autre problème technique.
            <br />Les conseils et contenus relatifs aux prestations (soins, bien‑être, beauté) ne remplacent pas un avis
            médical. En cas de doute, de pathologie, de grossesse, d’allergies ou de traitement, il convient de
            solliciter un professionnel de santé avant toute prestation.
          </p>
        </div>

        <div className="legal-block">
          <h2>7. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. Ces liens sont fournis pour faciliter la navigation.
            L’Éditeur n’exerce aucun contrôle sur ces sites et ne peut être tenu responsable de leur contenu,
            de leurs pratiques ou de leur disponibilité.
            <br />La création de liens hypertextes vers le site est autorisée sous réserve qu’elle ne porte pas atteinte
            à l’image de l’Éditeur, qu’elle ne crée pas de confusion sur la source des contenus et qu’elle respecte
            la réglementation applicable.
          </p>
        </div>

        <div className="legal-block">
          <h2>8. Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français.
            <br />En cas de litige, et à défaut de résolution amiable, les tribunaux français territorialement compétents
            seront seuls compétents, sous réserve des règles impératives applicables au consommateur.
          </p>
        </div>

        <div className="legal-actions">
          <a className="btn-cta" href="#home">Retour à l’accueil</a>
        </div>
      </section>
    </main>
  );
}
