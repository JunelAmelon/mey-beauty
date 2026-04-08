const HASHTAGS = [
  '#CrèmeVisage',
  '#Rouge à Lèvres',
  '#Gel Douche',
  '#Shampooing',
  '#Contour des Yeux',
  '#Toucher de Peau',
  '#Sérum Éclat',
  '#Fond de Teint',
  '#Soin Corps',
  '#Mascara',
];

export default function HashtagBanner() {
  const doubled = [...HASHTAGS, ...HASHTAGS];

  return (
    <div className="hashtag-banner">
      <div className="hashtag-track">
        {doubled.map((tag, idx) => (
          <span key={`${tag}-${idx}`} className="hashtag-item">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
