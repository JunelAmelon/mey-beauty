const PHOTOS = [
  'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/home-1-instagram-1-300x234.webp',
  'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/home-1-instagram-2-300x234.webp',
  'https://images.pexels.com/photos/29745246/pexels-photo-29745246.jpeg',
  'https://images.pexels.com/photos/5468639/pexels-photo-5468639.jpeg',
  'https://images.pexels.com/photos/6663574/pexels-photo-6663574.jpeg',
  'https://images.pexels.com/photos/9246306/pexels-photo-9246306.jpeg',
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
