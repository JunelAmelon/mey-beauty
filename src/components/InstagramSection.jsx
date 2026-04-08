const PHOTOS = [
  'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/home-1-instagram-1-300x234.webp',
  'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/home-1-instagram-2-300x234.webp',
  'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/home-1-instagram-4-300x234.webp',
  'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/home-1-instagram-5-300x234.webp',
  'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/home-1-instagram-6-300x234.webp',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
];

export default function InstagramSection() {
  return (
    <div className="instagram-section">
      <div className="instagram-header">
        <span className="section-kicker">Voir &amp; Suivre</span>
        <div className="instagram-handle">Nous @instagram</div>
      </div>
      <div className="instagram-grid">
        {PHOTOS.map((src, idx) => (
          <div key={idx} className={`instagram-photo insta-${idx + 1}`}>
            <img className="insta-bg insta-photo" src={src} alt={`Instagram ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
