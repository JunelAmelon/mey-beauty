import { useEffect, useState } from 'react';

const SLIDES = [
 
  {
    id: 1,
    kicker: 'Soins minceur',
    title: (
      <>
        Soins <em>minceur</em>
        <br />
        et bien‑être
      </>
    ),
    subtitle:
      'soins minceur et bien etre : drainage, cures et accompagnement pour votre silhouette.',
    leftImage: 'soin minceur (1).jpg',
    rightImage: 'soin minceur (2).jpg',
  },
  {
    id: 2,
    kicker: 'Soin spa',
    title: (
      <>
        Soin <em>spa</em>
        <br />
        &amp; détente
      </>
    ),
    subtitle:
      'soin spa : une parenthèse de calme, des gestes experts et une vraie relaxation.',
    leftImage: 'soin spa.JPG',
    rightImage: 'soin spa (2).jpg',
  },
  {
    id: 3,
    kicker: 'Massages corps',
    title: (
      <>
        Massages <em>corps</em>
        <br />
        bien‑être
      </>
    ),
    subtitle:
      'massages corps : relâcher les tensions, apaiser l’esprit et retrouver l’énergie.',
    leftImage: 'massage-corps.JPG',
    rightImage: 'massage-corps (2).jpg',
  },
   {
    id: 0,
    kicker: 'Mey Beauty',
    title: (
      <>
        Soin <em>visage</em>
        <br />
        sur‑mesure
      </>
    ),
    subtitle:
      'soin visage : nettoyage, éclat, hydratation — des résultats visibles et durables.',
    leftImage: 'soin visage (2).jpg',
    rightImage: 'soin visage (1).jpg',
  },
  {
    id: 4,
    kicker: 'Beauté du regard',
    title: (
      <>
        Beauté du <em>regard</em>
        <br />
        &amp; finitions
      </>
    ),
    subtitle:
      'beaute du regard : rehaussement, brow lift, teinture — un résultat élégant et précis.',
    leftImage: 'beauté regard (2).jpg',
    rightImage: 'beauté regard (3).jpg',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slide = SLIDES[activeSlide];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const sync = () => setIsMobile(mq.matches);

    sync();
    if (mq.addEventListener) {
      mq.addEventListener('change', sync);
      return () => mq.removeEventListener('change', sync);
    }

    mq.addListener(sync);
    return () => mq.removeListener(sync);
  }, []);

  useEffect(() => {
    if (document.visibilityState === 'hidden') return;
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, [isMobile, tick]);

  useEffect(() => {
    const onVisibility = () => setTick((v) => v + 1);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const goTo = (idx) => {
    setActiveSlide(idx);
    setTick((v) => v + 1);
  };

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
              onClick={() => goTo(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Aller au slide ${idx + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') goTo(idx);
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
