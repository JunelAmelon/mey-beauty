const POSTS = [
  {
    id: 1,
    date: '27 Octobre 2024',
    title: 'Beauté & Spa : rituels bien‑être à adopter',
    excerpt:
      'Inspirations spa, gestes experts et conseils pour une peau lumineuse et un esprit apaisé.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    date: '27 Octobre 2024',
    title: 'Préparer sa peau avant un événement',
    excerpt:
      'Notre routine sur‑mesure pour un teint éclatant : nettoyage, hydratation, massage et éclat.',
    image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 3,
    date: '27 Octobre 2024',
    title: 'Anti‑stress : détente & massages corps',
    excerpt:
      'Comment relâcher les tensions et retrouver l’énergie grâce aux massages corps et aux soins spa.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 4,
    date: '27 Octobre 2024',
    title: 'Beauté du regard : rehaussement & brow lift',
    excerpt:
      'Les bonnes pratiques pour un regard structuré, naturel et longue tenue.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1400&q=80',
  },
];

const TAGS = ['Institut', 'Spa', 'Soin Visage', 'Bien‑être', 'Massage'];

export default function BlogPage() {
  return (
    <main className="blog-page">
      <section className="page-hero-banner" aria-label="Bannière">
        <h1>Blog</h1>
        <div className="breadcrumb">
          <a href="#home">Accueil</a>
          <span>/</span>
          <span>Blog</span>
        </div>
      </section>

      <section className="blog-layout" aria-label="Articles">
        <div>
          <div className="articles-grid">
            {POSTS.map((p) => (
              <article key={p.id} className="article-card">
                <div className="article-img-wrap">
                  <img src={p.image} alt={p.title} className="article-img" loading="lazy" />
                </div>
                <div className="article-date">{p.date}</div>
                <h2 className="article-title">{p.title}</h2>
                <p className="article-excerpt">{p.excerpt}</p>
                <a href="#blog-detail" className="btn-read">Lire plus</a>
              </article>
            ))}
          </div>

          <div className="pagination" aria-label="Pagination">
            <button className="page-btn active" type="button">1</button>
            <button className="page-btn" type="button">2</button>
            <button className="page-btn" type="button">3</button>
            <button className="page-btn arrow-btn" type="button">→</button>
          </div>
        </div>

        <aside className="sidebar" aria-label="Sidebar">
          <div className="sidebar-search">
            <input type="text" placeholder="Rechercher…" />
            <button type="button" aria-label="Rechercher">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>

          <div>
            <div className="sidebar-title">Articles récents</div>
            <div className="recent-posts">
              {POSTS.slice(0, 5).map((p) => (
                <div key={`recent-${p.id}`} className="recent-post">
                  <img src={p.image} alt={p.title} className="recent-thumb" loading="lazy" />
                  <div className="recent-info">
                    <div className="recent-date">{p.date.split(' ')[0].toUpperCase()}</div>
                    <div className="recent-title">{p.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sidebar-gallery" aria-label="Galerie">
              <img src="/massage-corps (2).jpg" alt="Massage" className="gallery-img" loading="lazy" />
              <img src="/soin spa (2).jpg" alt="Spa" className="gallery-img" loading="lazy" />
              <img src="/soin visage (2).jpg" alt="Soin visage" className="gallery-img" loading="lazy" />
              <img src="/soin minceur (2).jpg" alt="Minceur" className="gallery-img" loading="lazy" />
              <img src="/beauté regard (3).jpg" alt="Regard" className="gallery-img" loading="lazy" />
              <img src="/meybeauty.jpg" alt="Institut" className="gallery-img" loading="lazy" />
            </div>
          </div>

          <div>
            <div className="sidebar-title">Tags</div>
            <div className="tags-wrap">
              {TAGS.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-banner" aria-label="Bannière">
            <img src="/soin spa (1).JPG" alt="Mey Beauty" />
            <div className="banner-overlay">
              <div className="banner-logo">Mey Beauty</div>
              <div className="banner-sub">Soin visage · Spa · Massages · Regard</div>
              <div className="banner-tag">Détente &amp; Éclat</div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
