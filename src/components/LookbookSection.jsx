import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

const IMAGES = {
  arch:
    'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/product-with-img-1.webp',
  product:
    'https://amiy.wpenginepowered.com/wp-content/uploads/2023/01/Products-18.webp',
};

export default function LookbookSection() {
  useRevealOnScroll('.reveal');

  return (
    <section className="lookbook-section reveal">
      <div className="lookbook-photo">
        <div className="arch-frame">
          <div className="arch-bg">
            <img src={IMAGES.arch} alt="Salon d'onglerie moderne" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div className="lookbook-nav">
          <button aria-label="Précédent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15,18 9,12 15,6" /></svg>
          </button>
          <button aria-label="Suivant">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9,18 15,12 9,6" /></svg>
          </button>
        </div>
      </div>

      <div className="lookbook-product">
        <div className="lookbook-product-img">
          <img src={IMAGES.product} alt="Produit professionnel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="lookbook-product-name">Eyeliner Finition Mate</div>
        <div className="lookbook-product-price">22,00€ — 35,00€</div>
        <div className="lookbook-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div style={{ marginTop: 24 }}>
          <a href="#" className="btn-cta">— Ajouter au Panier —</a>
        </div>
      </div>
    </section>
  );
}
