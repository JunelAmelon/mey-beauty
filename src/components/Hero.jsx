import { useEffect, useRef, useState } from 'react';

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

const POPUP_IMAGE = 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=200&q=80';

const BUYERS = [
  { name: 'Inès', product: 'Hydratant Peau Sèche', city: 'Paris', minutesAgo: 13 },
  { name: 'Sofia', product: 'Sérum Vitamine C', city: 'Lyon', minutesAgo: 4 },
  { name: 'Maya', product: 'Fond de Teint Couvrance', city: 'Marseille', minutesAgo: 8 },
  { name: 'Emma', product: 'Fixateur Longue Tenue', city: 'Bordeaux', minutesAgo: 11 },
  { name: 'Lina', product: 'Lotion Hydratante', city: 'Nice', minutesAgo: 6 },
  { name: 'Nora', product: 'Sérum Anti-Rides', city: 'Toulouse', minutesAgo: 2 },
  { name: 'Sarah', product: 'Soin Corps Sans Parfum', city: 'Nantes', minutesAgo: 9 },
  { name: 'Aya', product: 'Crème Hydratante', city: 'Montpellier', minutesAgo: 7 },
  { name: 'Clara', product: 'Routine Soins', city: 'Lille', minutesAgo: 5 },
  { name: 'Yasmine', product: 'Maquillage Premium', city: 'Strasbourg', minutesAgo: 10 },
  { name: 'Leïla', product: 'Sérum Éclat', city: 'Rennes', minutesAgo: 12 },
  { name: 'Mina', product: 'Lotion Toute la Journée', city: 'Grenoble', minutesAgo: 3 },
  { name: 'Jade', product: 'Fond de Teint Sans Huile', city: 'Dijon', minutesAgo: 14 },
  { name: 'Camille', product: 'Crème Peau Sèche', city: 'Reims', minutesAgo: 1 },
  { name: 'Aïcha', product: 'Fixateur Maquillage', city: 'Rouen', minutesAgo: 15 },
  { name: 'Noémie', product: 'Sérum Regard', city: 'Tours', minutesAgo: 6 },
  { name: 'Mélissa', product: 'Hydratant Ultra', city: 'Aix-en-Provence', minutesAgo: 7 },
  { name: 'Hana', product: 'Lotion Corps', city: 'Metz', minutesAgo: 9 },
  { name: 'Lola', product: 'Crème Longue Tenue', city: 'Avignon', minutesAgo: 4 },
  { name: 'Salomé', product: 'Sérum Cernes', city: 'Angers', minutesAgo: 8 },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [buyerIndex, setBuyerIndex] = useState(0);
  const slide = SLIDES[activeSlide];
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBuyerIndex((prev) => (prev + 1) % BUYERS.length);
      setShowPopup(true);
    }, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (!showPopup) return;

    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 6500);

    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [showPopup, buyerIndex]);

  const buyer = BUYERS[buyerIndex];

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

        <a href="#" className="btn-cta">Découvrir</a>
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

      {showPopup ? (
        <div className="purchase-popup">
          <div className="popup-img">
            <img src={POPUP_IMAGE} alt="Produit cosmétique" />
          </div>
          <div className="popup-text">
            <div className="popup-label">Quelqu'un vient d'acheter</div>
            <div className="popup-product">{buyer.product}</div>
            <div className="popup-time">
              Il y a {buyer.minutesAgo} minutes · {buyer.city}, France
            </div>
          </div>
          <button className="popup-close" onClick={() => setShowPopup(false)} aria-label="Fermer">
            ✕
          </button>
        </div>
      ) : null}
    </section>
  );
}
