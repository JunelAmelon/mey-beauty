export default function ShopPage() {
  const products = [
    { id: 1, name: 'Huile de massage relaxante', price: '18,00 €', image: '/massage-corps (2).jpg' },
    { id: 2, name: 'Crème hydratante éclat', price: '24,00 €', image: '/soin visage (2).jpg' },
    { id: 3, name: 'Sérum glow vitaminé', price: '32,00 €', image: '/meybeauty.jpg' },
    { id: 4, name: 'Baume douceur spa', price: '28,50 €', image: '/soin spa (2).jpg' },
    { id: 5, name: 'Brume apaisante', price: '16,00 €', image: '/soin spa (1).JPG' },
    { id: 6, name: 'Carte cadeau Mey Beauty', price: '50,00 €', image: '/beauté regard (3).jpg' },
  ];

  return (
    <main className="shop-page">
      <section className="page-hero-banner" aria-label="Bannière">
        <h1>Boutique</h1>
        <div className="breadcrumb">
          <a href="#home">Accueil</a>
          <span>/</span>
          <span>Boutique</span>
        </div>
      </section>

      <section className="shop-layout" aria-label="Boutique">
        <aside className="shop-sidebar" aria-label="Filtres">
          <div>
            <div className="shop-sidebar-title">Recherche</div>
            <div className="shop-search">
              <input type="text" placeholder="Rechercher un produit…" />
              <button type="button" aria-label="Rechercher">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <div className="shop-sidebar-title">Filtrer par prix</div>
            <div className="price-slider-wrap">
              <div className="price-track">
                <div className="price-fill" />
              </div>
            </div>
            <div className="price-label">Prix : 0 € — 50 €</div>
            <button className="btn-filter" type="button">Filtrer</button>
          </div>

          <div>
            <div className="shop-sidebar-title">Catégories</div>
            <ul className="category-list">
              <li>Soin visage</li>
              <li>Soins minceur et bien‑être</li>
              <li className="sub">Drainage</li>
              <li className="sub">Rituels</li>
              <li>Soin spa</li>
              <li>Massages corps</li>
              <li>Beauté du regard</li>
              <li>Onglerie</li>
            </ul>
          </div>

          <div>
            <div className="shop-sidebar-title">Tags</div>
            <div className="product-tags-wrap">
              <span className="product-tag">Éclat</span>
              <span className="product-tag">Hydratation</span>
              <span className="product-tag">Relaxation</span>
              <span className="product-tag">Bien‑être</span>
            </div>
          </div>
        </aside>

        <div className="shop-main">
          <div className="shop-products-grid">
            {products.map((p) => (
              <div key={p.id} className="shop-product-card">
                <div className="shop-product-img-wrap">
                  <img src={p.image} alt={p.name} className="shop-product-img" loading="lazy" />
                </div>
                <div className="shop-product-info">
                  <div className="shop-product-name">{p.name}</div>
                  <div className="shop-product-price">{p.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="shop-pagination" aria-label="Pagination boutique">
            <button className="shop-page-btn inactive" type="button">1</button>
            <button className="shop-page-btn active" type="button">2</button>
            <button className="shop-page-btn" type="button">3</button>
            <button className="shop-page-btn" type="button">4</button>
            <button className="shop-page-btn arrow" type="button">→</button>
          </div>
        </div>
      </section>
    </main>
  );
}
