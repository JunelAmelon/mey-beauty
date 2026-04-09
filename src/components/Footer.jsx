export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div style={{ marginBottom: 16 }}>
            <img src="/mey-beauty.png" alt="Mey Beauty" style={{ width: 150, height: 'auto' }} />
          </div>
          <p className="footer-tagline">
            Des cosmétiques d'exception conçus à Paris pour sublimer chaque carnation avec élégance et raffinement.
          </p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Votre adresse e-mail" />
            <button aria-label="S'abonner">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-col">
          <h4>Informations</h4>
          <ul>
            <li><a href="#">À Propos</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Avis</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Aide</h4>
          <ul>
            <li><a href="#">Politique de Retour</a></li>
            <li><a href="#">Confidentialité</a></li>
            <li><a href="#">Livraison</a></li>
            <li><a href="#">Conditions d'Utilisation</a></li>
            <li><a href="#">Accessibilité</a></li>
            <li><a href="#">Mon Compte</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Horaires</h4>
          <ul>
            <li><a href="#">Lundi · 10h – 18h</a></li>
            <li><a href="#">Mardi · 10h – 18h</a></li>
            <li><a href="#">Mercredi · 10h – 18h</a></li>
            <li><a href="#">Jeudi · 10h – 18h</a></li>
            <li><a href="#">Vendredi · 10h – 21h</a></li>
            <li><a href="#">Samedi · 09h – 17h</a></li>
            <li><a href="#">Dimanche · Fermé</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Paiement Sécurisé</h4>
          <div className="payment-logos">
            <div className="payment-row">
              <div className="payment-icon paypal-icon">PayPal</div>
            </div>
            <div className="payment-row">
              <div className="payment-icon visa-icon">VISA</div>
            </div>
            <div className="payment-row">
              <div className="payment-icon mc-icon" style={{ fontSize: 8, color: '#EB001B' }}>●●</div>
            </div>
            <div className="payment-row">
              <div className="payment-icon amex-icon" style={{ fontSize: 7 }}>AMEX</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2024 Mey Beauty Paris. Tous droits réservés.</div>
        <div className="footer-legal">
          <a href="#">Mentions Légales</a>
          <a href="#">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
