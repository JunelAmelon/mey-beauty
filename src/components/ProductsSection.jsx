import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

const PRODUCTS = [
  {
    id: 1,
    badge: { text: 'Solde', className: 'product-badge badge-sale' },
    stars: 1,
    cat: 'Lotion',
    name: 'Fond de Teint Liquide Sans Huile',
    price: '12,00€ – 22,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-01.1.webp',
    primaryAction: 'Ajouter au Panier',
  },
  {
    id: 2,
    badge: { text: 'Solde', className: 'product-badge badge-sale' },
    stars: 0,
    cat: 'Crème',
    name: 'Fond de Teint Liquide Couvrance Totale',
    price: '18,00€ – 30,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-02.1.webp',
    primaryAction: 'Ajouter au Panier',
  },
  {
    id: 3,
    badge: null,
    stars: 3,
    cat: 'Lotion',
    name: 'Hydratant Ultra Peau Sèche',
    price: '18,00€ – 32,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-10.1.webp',
    primaryAction: 'Ajouter au Panier',
  },
  {
    id: 4,
    badge: { text: 'Épuisé', className: 'product-badge badge-sold' },
    stars: 3,
    cat: 'Crème',
    name: 'Fixateur Maquillage Longue Tenue',
    price: '12,00€ – 22,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-04.1.webp',
    primaryAction: 'Me Notifier',
  },
  {
    id: 5,
    badge: null,
    stars: 3,
    cat: 'Sérum',
    name: 'Sérum Cernes & Anti-Rides',
    price: '25,00€ – 35,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-05.1.webp',
    primaryAction: 'Ajouter au Panier',
  },
  {
    id: 6,
    badge: null,
    stars: 3,
    cat: 'Crème',
    name: 'Lotion Hydratante Toute la Journée',
    price: '22,00€ – 35,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-07.1.webp',
    primaryAction: 'Ajouter au Panier',
  },
  {
    id: 7,
    badge: null,
    stars: 0,
    cat: 'Soin Cheveux',
    name: 'Crème Cheveux Résistance Météo',
    price: '22,00€ – 32,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-05.1.webp',
    primaryAction: 'Ajouter au Panier',
  },
  {
    id: 8,
    badge: null,
    stars: 0,
    cat: 'Crème',
    name: 'Lotion Corps Sans Parfum',
    price: '15,00€ – 25,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-06.1.webp',
    primaryAction: 'Ajouter au Panier',
  },
  {
    id: 9,
    badge: { text: 'Nouveau', className: 'product-badge badge-new' },
    stars: 5,
    cat: 'Sérum',
    name: 'Sérum Hydratation Intense',
    price: '28,00€ – 42,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-08.1.webp',
    primaryAction: 'Ajouter au Panier',
  },
  {
    id: 10,
    badge: null,
    stars: 4,
    cat: 'Maquillage',
    name: 'Rouge à Lèvres Velours',
    price: '16,00€ – 24,00€',
    image: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Products-09.1.webp',
    primaryAction: 'Ajouter au Panier',
  },
];

function Stars({ value }) {
  const total = 5;
  return (
    <div className="stars">
      {Array.from({ length: total }).map((_, idx) => {
        const filled = idx < value;
        return (
          <span key={idx} className={`star${filled ? '' : ' empty'}`}>
            ★
          </span>
        );
      })}
    </div>
  );
}

export default function ProductsSection() {
  useRevealOnScroll('.reveal');

  return (
    <section className="products-section reveal">
      <div className="section-header">
        <span className="section-kicker">Les mieux notés</span>
        <h2 className="section-title">Boutique par Notes</h2>
      </div>

      <div className="products-grid">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-img-wrap">
              <img className="product-photo" src={p.image} alt={p.name} />
              {p.badge ? <div className={p.badge.className}>{p.badge.text}</div> : null}
              <div className="product-actions">
                <button aria-label="Favori">♡</button>
                <button className="primary">{p.primaryAction}</button>
              </div>
            </div>

            <Stars value={p.stars} />
            <div className="product-cat">{p.cat}</div>
            <div className="product-name">{p.name}</div>
            <div className="product-price">{p.price}</div>
          </div>
        ))}
      </div>

      <div className="view-all-wrap">
        <a href="#" className="btn-cta">— Voir Tout —</a>
      </div>
    </section>
  );
}
