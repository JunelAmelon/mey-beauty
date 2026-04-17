import { User } from 'lucide-react';

export default function BlogDetailPage() {
  return (
    <main className="blog-detail-page">
      <section className="page-hero-banner" aria-label="Bannière">
        <h1>Article</h1>
        <div className="breadcrumb">
          <a href="#home">Accueil</a>
          <span>/</span>
          <a href="#blog">Blog</a>
          <span>/</span>
          <span>Article</span>
        </div>
      </section>

      <section className="blog-detail-layout" aria-label="Détail de l’article">
        <article className="blog-detail-article">
          <img
            src="/soin visage (2).jpg"
            alt="Soin visage en institut"
            className="blog-article-hero"
            loading="lazy"
          />

          <div className="blog-article-meta">
            <div className="blog-article-meta-left">
              27 OCTOBRE, 2024
              <span className="sep">/</span>
              1 COMMENTAIRE
            </div>
            <div className="blog-article-author">
              <div className="author-avatar" aria-hidden="true">
                <User />
              </div>
              <div>
                <span className="author-written-by">Rédigé par</span>
                <span className="author-name">Mey Beauty</span>
              </div>
            </div>
          </div>

          <h1 className="blog-article-h1">
            Les rituels de soin visage en institut : éclat, détente et résultats visibles
          </h1>

          <p className="blog-article-p">
            Un soin visage en institut, ce n’est pas seulement un moment de douceur : c’est une approche
            professionnelle qui combine diagnostic, gestes experts, actifs adaptés et massages ciblés.
            Chez Mey Beauty, nous construisons chaque séance autour de votre peau et de vos objectifs (éclat,
            hydratation, imperfections, confort, anti‑âge).
          </p>

          <h2 className="blog-article-h2">Ce que vous apporte un soin en institut</h2>

          <p className="blog-article-p">
            Le protocole associe nettoyage profond, exfoliation, extraction douce si nécessaire, masques
            adaptés et sérums spécifiques. Le massage stimule la micro‑circulation, améliore la pénétration
            des actifs et apporte une détente immédiate.
          </p>

          <div className="blog-article-img-row" aria-label="Galerie">
            <img src="/soin spa (2).jpg" alt="Rituel spa" loading="lazy" />
            <img src="/massage-corps (2).jpg" alt="Massage bien‑être" loading="lazy" />
          </div>

          <p className="blog-article-p">
            Pour prolonger les bénéfices, nous vous conseillons une routine simple et cohérente : un nettoyage
            adapté, une hydratation quotidienne et une protection solaire. Sur le long terme, la régularité est
            la clé pour stabiliser la peau et maintenir l’éclat.
          </p>

          <h2 className="blog-article-h2">Nos recommandations (simples et efficaces)</h2>

          <ul className="blog-article-list">
            <li>Faire un diagnostic de peau avant toute routine.</li>
            <li>Choisir des actifs adaptés à votre objectif (hydratation, imperfections, éclat, anti‑âge).</li>
            <li>Garder une exfoliation douce et régulière, sans agresser.</li>
            <li>Ne pas négliger le cou et le décolleté.</li>
            <li>Associer soin visage et massages pour relâcher les tensions.</li>
            <li>Stabiliser avec une protection solaire quotidienne.</li>
            <li>Prévoir une cure (3 à 6 séances) pour un résultat visible.</li>
            <li>Adapter la routine à la saison (froid, chaleur, humidité).</li>
            <li>Hydrater et apaiser après une journée chargée.</li>
            <li>Demander un plan d’entretien personnalisé.</li>
          </ul>

          <div className="blog-article-quote">
            <p>
              « La vraie beauté, c’est l’équilibre : une peau respectée, des gestes réguliers et un moment de
              détente qui vous ressemble. »
            </p>
            <cite>— Mey Beauty</cite>
          </div>

          <div className="comments-section">
            <div className="comments-title">Commentaires ( 1 )</div>
            <div className="comment">
              <div className="comment-avatar" aria-hidden="true">
                <User />
              </div>
              <div className="comment-body">
                <div className="comment-name">Cliente</div>
                <div className="comment-date">28 Octobre, 2024 à 07:41</div>
                <p className="comment-text">
                  Super expérience : peau plus lumineuse dès la première séance, et un massage très relaxant.
                  Merci à l’équipe Mey Beauty.
                </p>
              </div>
            </div>
          </div>
        </article>

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
              <div className="recent-post">
                <img src="/soin spa (2).jpg" alt="Spa" className="recent-thumb" loading="lazy" />
                <div className="recent-info">
                  <div className="recent-date">OCT 27</div>
                  <div className="recent-title">Beauté &amp; spa : rituels bien‑être</div>
                </div>
              </div>
              <div className="recent-post">
                <img src="/beauté regard (3).jpg" alt="Regard" className="recent-thumb" loading="lazy" />
                <div className="recent-info">
                  <div className="recent-date">OCT 27</div>
                  <div className="recent-title">Beauté du regard : astuces pro</div>
                </div>
              </div>
              <div className="recent-post">
                <img src="/soin minceur (2).jpg" alt="Minceur" className="recent-thumb" loading="lazy" />
                <div className="recent-info">
                  <div className="recent-date">OCT 27</div>
                  <div className="recent-title">Minceur : se sentir bien dans son corps</div>
                </div>
              </div>
              <div className="recent-post">
                <img src="/massage-corps (2).jpg" alt="Massage" className="recent-thumb" loading="lazy" />
                <div className="recent-info">
                  <div className="recent-date">OCT 27</div>
                  <div className="recent-title">Massages corps : anti‑stress et énergie</div>
                </div>
              </div>
              <div className="recent-post">
                <img src="/soin visage (2).jpg" alt="Soin visage" className="recent-thumb" loading="lazy" />
                <div className="recent-info">
                  <div className="recent-date">OCT 27</div>
                  <div className="recent-title">Soin visage : éclat et hydratation</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="sidebar-gallery" aria-label="Galerie">
              <img src="/soin visage (2).jpg" alt="Soin visage" className="gallery-img" loading="lazy" />
              <img src="/soin spa (2).jpg" alt="Spa" className="gallery-img" loading="lazy" />
              <img src="/massage-corps (2).jpg" alt="Massage" className="gallery-img" loading="lazy" />
              <img src="/soin minceur (2).jpg" alt="Minceur" className="gallery-img" loading="lazy" />
              <img src="/beauté regard (3).jpg" alt="Regard" className="gallery-img" loading="lazy" />
              <img src="/meybeauty.jpg" alt="Institut" className="gallery-img" loading="lazy" />
            </div>
          </div>

          <div>
            <div className="sidebar-title">Tags</div>
            <div className="tags-wrap">
              <span className="tag-pill">SOIN VISAGE (9)</span>
              <span className="tag-pill">SPA (4)</span>
              <span className="tag-pill">BIEN‑ÊTRE (6)</span>
              <span className="tag-pill">MASSAGE (3)</span>
            </div>
          </div>

          <div className="sidebar-banner" aria-label="Bannière">
            <img src="/soin spa (1).JPG" alt="Mey Beauty" loading="lazy" />
            <div className="banner-overlay">
              <div className="banner-logo">Mey Beauty</div>
              <div className="banner-sub">Spa · Massages · Visage</div>
              <div className="banner-tag">Détente &amp; Éclat</div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
