import { useEffect, useMemo, useState } from 'react';
import { Heart, Search, User } from 'lucide-react';
import { formatPriceEUR, popularProductIds } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import { useCatalog } from '../context/CatalogContext.jsx';

function parseProductIdFromHash(hash) {
  const idx = hash.indexOf('?');
  const query = idx >= 0 ? hash.slice(idx + 1) : '';
  const params = new URLSearchParams(query);
  return params.get('id');
}

function getDealEndDate() {
  const d = new Date();
  d.setDate(d.getDate() + 2);
  return d;
}

function format2(n) {
  return String(Math.max(0, n)).padStart(2, '0');
}

function DealTimer() {
  const [end] = useState(() => getDealEndDate());
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  const diff = Math.max(0, end.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <div className="pd-deal-timer" aria-label="Offre limitée">
      <div className="pd-deal-timer-label">Dépêche‑toi ! Offre limitée :</div>
      <div className="pd-timer-boxes">
        <div className="pd-timer-box">
          <div className="pd-timer-number">{format2(days)}</div>
          <div className="pd-timer-label">Jours</div>
        </div>
        <div className="pd-timer-box">
          <div className="pd-timer-number">{format2(hours)}</div>
          <div className="pd-timer-label">Hrs</div>
        </div>
        <div className="pd-timer-box">
          <div className="pd-timer-number">{format2(mins)}</div>
          <div className="pd-timer-label">Mins</div>
        </div>
        <div className="pd-timer-box">
          <div className="pd-timer-number">{format2(secs)}</div>
          <div className="pd-timer-label">Secs</div>
        </div>
      </div>
    </div>
  );
}

function OptionGroup({ label, options, value, onChange }) {
  return (
    <div className="pd-option-group">
      <div className="pd-option-label">{label}</div>
      <div className="pd-option-btns">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`pd-option-btn${opt === value ? ' active' : ''}`}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ title, children, defaultOpen }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));

  return (
    <div className={`pd-accordion-item${open ? ' active' : ''}`}>
      <div
        className="pd-accordion-header"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setOpen((v) => !v);
        }}
        role="button"
        tabIndex={0}
      >
        <div className="pd-accordion-title">{title}</div>
        <div className="pd-accordion-icon">∧</div>
      </div>
      <div className="pd-accordion-body" style={{ maxHeight: open ? 600 : 0 }}>
        <div className="pd-accordion-content">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { addItem } = useCart();
  const { products: allProducts, getProductById } = useCatalog();
  const [productId, setProductId] = useState(() => parseProductIdFromHash(window.location.hash || ''));
  const product = useMemo(() => (productId ? getProductById(productId) : null), [productId, getProductById, allProducts]);
  const related = useMemo(() => {
    const byId = new Map((allProducts || []).map((p) => [p.id, p]));
    const picked = popularProductIds
      .map((id) => byId.get(id))
      .filter(Boolean)
      .filter((p) => p.id !== productId)
      .slice(0, 3);
    if (picked.length) return picked;
    return (allProducts || []).filter((p) => p.id !== productId).slice(0, 3);
  }, [allProducts, productId]);

  const mini = useMemo(() => {
    const byId = new Map((allProducts || []).map((p) => [p.id, p]));
    const picked = popularProductIds.map((id) => byId.get(id)).filter(Boolean).slice(0, 5);
    if (picked.length) return picked;
    return (allProducts || []).slice(0, 5);
  }, [allProducts]);

  const images = product?.images?.length ? product.images : ['/produits/produit (1).webp'];
  const [mainImg, setMainImg] = useState(images[0]);
  const [qty, setQty] = useState(1);
  const [netQty, setNetQty] = useState('100g');
  const [skinType, setSkinType] = useState('Normal');
  const [sidebarSearch, setSidebarSearch] = useState('');

  useEffect(() => {
    const onHash = () => setProductId(parseProductIdFromHash(window.location.hash || ''));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    setMainImg(images[0]);
    setQty(1);
  }, [productId]);

  if (!product) {
    return (
      <main className="product-detail-page">
        <section className="page-hero-banner" aria-label="Bannière">
          <h1>Produit</h1>
          <div className="breadcrumb">
            <a href="#home">Accueil</a>
            <span>/</span>
            <a href="#shop">Boutique</a>
            <span>/</span>
            <span>Produit</span>
          </div>
        </section>

        <section className="pd-notfound" aria-label="Produit introuvable">
          <div className="legal-block">
            <h2>Produit introuvable</h2>
            <p>
              Le produit demandé n’existe pas ou n’est plus disponible.
              <br />
              <a href="#shop">Retour à la boutique</a>
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="product-detail-page">
      <section className="page-hero-banner" aria-label="Bannière">
        <h1>Produit</h1>
        <div className="breadcrumb">
          <a href="#home">Accueil</a>
          <span>/</span>
          <a href="#shop">Boutique</a>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </section>

      <section className="pd-product-layout" aria-label="Détail du produit">
        <div className="pd-product-gallery">
          <div className="pd-main-img-wrap">
            <img src={mainImg} alt={product.name} className="pd-main-img" loading="lazy" />
          </div>

          <div className="pd-thumbnails" aria-label="Miniatures">
            {images.slice(0, 4).map((img) => (
              <div
                key={img}
                className={`pd-thumb${mainImg === img ? ' active' : ''}`}
                onClick={() => setMainImg(img)}
                role="button"
                tabIndex={0}
              >
                <img src={img} alt="Aperçu" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="pd-product-info">
          <h1 className="pd-product-title">{product.name}</h1>
          <div className="pd-product-price">{formatPriceEUR(product.priceCents)}</div>

          <DealTimer />

          <OptionGroup
            label="Net Quantity"
            options={['50g', '100g', '150g', '250g']}
            value={netQty}
            onChange={setNetQty}
          />

          <OptionGroup
            label="Skin Type"
            options={['Oil', 'Dry', 'Normal', 'All']}
            value={skinType}
            onChange={setSkinType}
          />

          <p className="pd-product-desc">{product.description}</p>

          <div className="pd-add-row" aria-label="Ajout au panier">
            <div className="pd-qty-wrap">
              <button
                type="button"
                className="pd-qty-btn"
                onClick={() => setQty((v) => Math.max(1, v - 1))}
                aria-label="Diminuer la quantité"
              >
                −
              </button>
              <input
                className="pd-qty-input"
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                aria-label="Quantité"
              />
              <button
                type="button"
                className="pd-qty-btn"
                onClick={() => setQty((v) => v + 1)}
                aria-label="Augmenter la quantité"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="pd-btn-add-cart"
              onClick={() => addItem(product, qty)}
            >
              Ajouter au panier
            </button>

            <button type="button" className="pd-btn-wishlist" aria-label="Ajouter aux favoris">
              <Heart size={18} />
            </button>
          </div>

          <div className="pd-accordion" aria-label="Informations">
            <AccordionItem title="Spécifications" defaultOpen>
              <ul>
                <li>Marque : {product.brand}</li>
                <li>Catégorie : {product.category}</li>
                <li>Prix TTC : {formatPriceEUR(product.priceCents)}</li>
                <li>Net Quantity : {netQty}</li>
                <li>Skin Type : {skinType}</li>
              </ul>
            </AccordionItem>
            <AccordionItem title="Livraison & retours">
              <p>
                Livraison et modalités de retour : contactez‑nous pour les informations détaillées.
              </p>
            </AccordionItem>
            <AccordionItem title="Description">
              <p>{product.description}</p>
            </AccordionItem>
            <AccordionItem title="Détails complémentaires">
              <p>
                Les résultats peuvent varier selon le type de peau et l’utilisation. En cas de sensibilité,
                effectuez un test préalable.
              </p>
            </AccordionItem>
          </div>
        </div>

        <aside className="pd-product-sidebar" aria-label="Sidebar">
          <div>
            <div className="pd-sidebar-title">Recherche produit</div>
            <div className="pd-shop-search">
              <input
                type="text"
                placeholder="Rechercher…"
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const q = (sidebarSearch || '').trim();
                    window.location.hash = q ? `#shop?search=${encodeURIComponent(q)}` : '#shop';
                  }
                }}
              />
              <button
                type="button"
                aria-label="Rechercher"
                onClick={() => {
                  const q = (sidebarSearch || '').trim();
                  window.location.hash = q ? `#shop?search=${encodeURIComponent(q)}` : '#shop';
                }}
              >
                <Search size={16} />
              </button>
            </div>
          </div>

          <div>
            <div className="pd-sidebar-title">Produits populaires</div>
            <div className="pd-mini-products">
              {mini.map((p) => (
                <div
                  key={p.id}
                  className="pd-mini-product"
                  onClick={() => {
                    window.location.hash = `#product?id=${encodeURIComponent(p.id)}`;
                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  }}
                >
                  <img
                    src={p.images?.[0]}
                    alt={p.name}
                    className="pd-mini-product-img"
                    loading="lazy"
                  />
                  <div className="pd-mini-product-info">
                    <div className="pd-mini-product-name">{p.name}</div>
                    <div className="pd-mini-product-price">{formatPriceEUR(p.priceCents)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="pd-sidebar-title">Commentaire</div>
            <div className="pd-mini-comment">
              <div className="pd-mini-comment-avatar" aria-hidden="true">
                <User size={18} />
              </div>
              <div>
                <div className="pd-mini-comment-name">Mey Beauty</div>
                <div className="pd-mini-comment-text">
                  Besoin d’un conseil avant achat ? Écris‑nous sur la page contact.
                </div>
              </div>
            </div>
            <a className="pd-mini-comment-cta" href="#contact">Nous contacter</a>
          </div>
        </aside>
      </section>

      <section className="pd-related-section" aria-label="Produits associés">
        <h2 className="pd-related-title">Produits associés</h2>
        <div className="pd-related-grid">
          {related.map((p) => (
            <div
              key={p.id}
              className="pd-related-card"
              onClick={() => {
                window.location.hash = `#product?id=${encodeURIComponent(p.id)}`;
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
              }}
            >
              <div className="pd-related-img-wrap">
                <img src={p.images?.[0]} alt={p.name} className="pd-related-img" loading="lazy" />
              </div>
              <div className="pd-related-info">
                <div className="pd-related-category">{p.category}</div>
                <div className="pd-related-name">{p.name}</div>
                <div className="pd-related-price">{formatPriceEUR(p.priceCents)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
