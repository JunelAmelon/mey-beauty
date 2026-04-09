const CATS = [
  {
    id: 'cat-1',
    className: 'cat-item cat-1',
    kicker: 'Éclat',
    title: 'Soin du visage\nSur‑mesure',
    cta: '— Réserver maintenant —',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'cat-2',
    className: 'cat-item cat-2',
    kicker: 'Silhouette',
    title: 'Minceur &\nRemodelage',
    cta: '— Réserver maintenant —',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'cat-3',
    className: 'cat-item cat-3',
    kicker: 'Regard',
    title: 'Beauté du\nRegard',
    cta: '— Réserver maintenant —',
    image: 'mey-beauty (6).jpeg',
  },
  {
    id: 'cat-4',
    className: 'cat-item cat-4',
    kicker: 'Mains',
    title: 'Onglerie\nPremium',
    cta: '— Réserver maintenant —',
    image: 'meybeauty.jpg',
  },
];

function TitleWithBreaks({ text }) {
  return (
    <>
      {text.split('\n').map((part, idx) => (
        <span key={idx}>
          {part}
          {idx < text.split('\n').length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

export default function CategoryGrid() {
  return (
    <section className="cat-grid">
      {CATS.map((cat) => (
        <div key={cat.id} className={cat.className}>
          <div className="cat-bg">
            <img className="cat-bg-photo" src={cat.image} alt={cat.kicker} />
          </div>
          <div className="cat-overlay"></div>
          <div className="cat-content">
            <div className="cat-kicker">{cat.kicker}</div>
            <h3 className="cat-title">
              <TitleWithBreaks text={cat.title} />
            </h3>
            <a href="#contact" className="btn-cta-outline">{cat.cta}</a>
          </div>
        </div>
      ))}
    </section>
  );
}
