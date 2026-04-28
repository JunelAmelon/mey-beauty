import { useEffect, useMemo, useState } from 'react';
import { useBlog } from '../context/BlogContext.jsx';

const TAGS = ['Institut', 'Spa', 'Soin Visage', 'Bien‑être', 'Massage'];

export default function BlogPage() {
  const { posts, loading, error } = useBlog();
  const items = posts || [];
  const [query, setQuery] = useState('');

  useEffect(() => {
    const hash = String(window.location.hash || '');
    if (!hash.startsWith('#blog')) return;
    const idx = hash.indexOf('?');
    if (idx < 0) return;
    const qs = hash.slice(idx + 1);
    const params = new URLSearchParams(qs);
    const q = params.get('search');
    if (q) setQuery(String(q));
  }, []);

  const filtered = useMemo(() => {
    const q = String(query || '').trim().toLowerCase();
    if (!q) return items;
    return items.filter((p) => {
      const hay = [p.title, p.excerpt, p.category, p.author, p.dateLabel, p.date]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [items, query]);

  const onSubmitSearch = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // ignore
    }
  };

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
            {loading ? (
              <div className="admin-empty">Chargement des articles…</div>
            ) : error ? (
              <div className="admin-empty">{String(error || 'Erreur de chargement')}</div>
            ) : filtered.length === 0 ? (
              <div className="admin-empty">Aucun article pour le moment.</div>
            ) : null}
            {filtered.map((p) => (
              <article key={p.id} className="article-card">
                <div className="article-img-wrap">
                  <img src={p.image} alt={p.title} className="article-img" loading="lazy" />
                </div>
                <div className="article-date">{p.dateLabel || p.date}</div>
                <h2 className="article-title">{p.title}</h2>
                <p className="article-excerpt">{p.excerpt}</p>
                <a href={`#blog-detail?id=${encodeURIComponent(p.id)}`} className="btn-read">Lire plus</a>
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
            <input
              type="text"
              placeholder="Rechercher…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSubmitSearch();
              }}
            />
            <button type="button" aria-label="Rechercher" onClick={onSubmitSearch}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>

          <div>
            <div className="sidebar-title">Articles récents</div>
            <div className="recent-posts">
              {items.slice(0, 5).map((p) => (
                <a
                  key={`recent-${p.id}`}
                  className="recent-post"
                  href={`#blog-detail?id=${encodeURIComponent(p.id)}`}
                  aria-label={`Lire l’article ${p.title}`}
                >
                  <img src={p.image} alt={p.title} className="recent-thumb" loading="lazy" />
                  <div className="recent-info">
                    <div className="recent-date">{String(p.dateLabel || p.date || '').split(' ')[0].toUpperCase()}</div>
                    <div className="recent-title">{p.title}</div>
                  </div>
                </a>
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
