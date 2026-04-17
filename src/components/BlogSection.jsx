import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

const POSTS = [
  {
    id: 1,
    date: '27 Octobre 2024',
    title: 'Beauté Spa et le Programme Bien-Être',
    excerpt:
      "Découvrez les rituels beauté inspirés des meilleures spas parisiennes pour une peau lumineuse et un esprit apaisé au quotidien.",
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    date: '27 Octobre 2024',
    title: 'Meilleurs Packages Services pour la Future Mariée',
    excerpt:
      "Les soins beauté incontournables pour rayonner le jour J : de la préparation de la peau aux soins des mains et du décolleté.",
    image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 3,
    date: '27 Octobre 2024',
    title: 'Les Excellentes Thérapies Anti-Stress & Relaxation',
    excerpt:
      "Comment incorporer les techniques de relaxation spa dans votre routine beauté quotidienne pour un effet bonne mine garanti.",
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function BlogSection() {
  useRevealOnScroll('.reveal');

  return (
    <section className="blog-section reveal">
      <div className="section-header">
        <span className="section-kicker">Tendances</span>
        <h2 className="section-title">Derniers Articles Beauté</h2>
      </div>

      <div className="blog-grid">
        {POSTS.map((p) => (
          <div key={p.id} className="blog-card">
            <div className="blog-img">
              <img className="blog-photo blog-img-inner" src={p.image} alt={p.title} />
            </div>
            <div className="blog-date">{p.date}</div>
            <h3 className="blog-title">{p.title}</h3>
            <p className="blog-excerpt">{p.excerpt}</p>
            <a href="#blog-detail" className="btn-read-more">— Lire Plus —</a>
          </div>
        ))}
      </div>
    </section>
  );
}
