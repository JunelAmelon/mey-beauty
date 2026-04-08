const CATS = [
  {
    id: 'cat-1',
    className: 'cat-item cat-1',
    kicker: 'Longue Tenue',
    title: 'Cosmétiques\nde Maquillage',
    cta: '— Acheter Maintenant —',
    image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'cat-2',
    className: 'cat-item cat-2',
    kicker: 'Double Embout',
    title: 'Eyeliner Gel\nWaterproof',
    cta: '— Acheter Maintenant —',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'cat-3',
    className: 'cat-item cat-3',
    kicker: 'Vitamine C',
    title: 'Sérum Éclat\nVisible',
    cta: '— Acheter Maintenant —',
    image: 'https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'cat-4',
    className: 'cat-item cat-4',
    kicker: 'Toutes Carnations',
    title: 'Idéal pour\nTous les Teints',
    cta: '— Acheter Maintenant —',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80',
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
            <a href="#" className="btn-cta-outline">{cat.cta}</a>
          </div>
        </div>
      ))}
    </section>
  );
}
