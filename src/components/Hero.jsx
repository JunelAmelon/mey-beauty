import { useEffect, useState } from 'react';

const SLIDES = [
  {
    id: 0,
    kicker: 'Meilleur Prix',
    title: (
      <>
        Cosmétiques <em>Mey Beauty</em>
        <br />
        Paris
      </>
    ),
    subtitle:
      "Des formules d'exception pour sublimer votre beauté naturelle, créées avec passion à Paris.",
    leftImage: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Slider-1-Img-1.webp',
    rightImage: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/Slider-1-Img-2.webp',
  },
  {
    id: 1,
    kicker: 'Studio Ongles',
    title: (
      <>
        Onglerie <em>Premium</em>
        <br />
        Paris
      </>
    ),
    subtitle:
      "Manucure, gel et nail art : un résultat élégant, précis et longue tenue.",
    leftImage: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/slider-2-a.webp',
    rightImage: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/slider-2-b-1.webp',
  },
  {
    id: 2,
    kicker: 'Soin & Beauté',
    title: (
      <>
        Routine <em>Soins</em>
        <br />
        &amp; Maquillage
      </>
    ),
    subtitle:
      "Des produits sélectionnés pour une peau éclatante, hydratée et lumineuse au quotidien.",
    leftImage: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/slider-3-a-2.webp',
    rightImage: 'https://amiy.wpenginepowered.com/wp-content/uploads/2023/10/slider-3-b.webp',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = SLIDES[activeSlide];

  useEffect(() => {}, []);

  return (
    <section className="hero">
      <div className="hero-col hero-left">
        <div className="hero-bg">
          <img className="hero-photo" src={slide.leftImage} alt="Manucure et nail art" />
        </div>
      </div>

      <div className="hero-col hero-center">

        <div className="hero-mobile-image">
          <img className="hero-photo" src={slide.leftImage} alt="Photo mise en avant" />
        </div>

        <div className="hero-petal-1">
          <svg className="petal-svg" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 5 Q55 20 52 50 Q48 70 30 75 Q12 70 8 50 Q5 20 30 5Z" fill="#F4B8B8" opacity="0.7" />
          </svg>
        </div>
        <div className="hero-petal-2">
          <svg viewBox="0 0 45 60" width="45" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 3 Q42 14 39 37 Q36 52 22 56 Q8 52 5 37 Q2 14 22 3Z" fill="#ECA8A8" opacity="0.6" transform="rotate(-25 22 30)" />
          </svg>
        </div>

        <div className="hero-slide active" key={slide.id}>
          <span className="hero-kicker">{slide.kicker}</span>
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-subtitle">{slide.subtitle}</p>
        </div>

        <a href="#about" className="btn-cta">Découvrir</a>
        <div className="hero-dots">
          {SLIDES.map((s, idx) => (
            <span
              key={s.id}
              className={idx === activeSlide ? 'active' : ''}
              onClick={() => setActiveSlide(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Aller au slide ${idx + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveSlide(idx);
              }}
            ></span>
          ))}
        </div>
      </div>

      <div className="hero-col hero-right">
        <div className="hero-bg">
          <img className="hero-flatlay" src={slide.rightImage} alt="Produits cosmétiques professionnels" />
        </div>
      </div>

    </section>
  );
}
