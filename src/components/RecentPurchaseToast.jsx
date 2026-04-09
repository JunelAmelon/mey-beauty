import { useEffect, useRef, useState } from 'react';

const POPUP_IMAGE =
  'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=200&q=80';

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

export default function RecentPurchaseToast() {
  const [showPopup, setShowPopup] = useState(true);
  const [buyerIndex, setBuyerIndex] = useState(0);
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

  if (!showPopup) return null;

  return (
    <div className="purchase-popup" aria-live="polite">
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
  );
}
