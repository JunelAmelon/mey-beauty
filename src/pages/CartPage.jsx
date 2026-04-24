import { useMemo } from 'react';
import { getProductById, formatPriceEUR } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';

function getStripeLink() {
  return import.meta.env.VITE_STRIPE_PAYMENT_LINK || '';
}

function getPayPalLink() {
  return import.meta.env.VITE_PAYPAL_ME_LINK || '';
}

export default function CartPage() {
  const { items, removeItem, setQuantity, clearCart } = useCart();

  const lines = useMemo(() => {
    return items
      .map((it) => {
        const product = getProductById(it.productId);
        if (!product) return null;
        const quantity = Math.max(1, Number(it.quantity) || 1);
        const lineTotalCents = product.priceCents * quantity;
        return { product, quantity, lineTotalCents };
      })
      .filter(Boolean);
  }, [items]);

  const subtotalCents = useMemo(
    () => lines.reduce((sum, l) => sum + l.lineTotalCents, 0),
    [lines]
  );

  const stripeLink = getStripeLink();
  const paypalLink = getPayPalLink();

  return (
    <main className="cart-page">
      <section className="page-hero-banner" aria-label="Bannière">
        <h1>Panier</h1>
        <div className="breadcrumb">
          <a href="#home">Accueil</a>
          <span>/</span>
          <span>Panier</span>
        </div>
      </section>

      <section className="cart-layout" aria-label="Contenu du panier">
        <div className="cart-main">
          {lines.length === 0 ? (
            <div className="cart-empty">
              <div className="legal-block">
                <h2>Ton panier est vide</h2>
                <p>
                  Ajoute des produits depuis la boutique.
                  <br />
                  <a href="#shop">Aller à la boutique</a>
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="cart-table" role="table" aria-label="Liste des produits">
                <div className="cart-row cart-head" role="row">
                  <div role="columnheader">Produit</div>
                  <div role="columnheader">Prix</div>
                  <div role="columnheader">Quantité</div>
                  <div role="columnheader">Total</div>
                  <div role="columnheader"></div>
                </div>

                {lines.map((l) => (
                  <div key={l.product.id} className="cart-row" role="row">
                    <div className="cart-product" role="cell">
                      <img
                        src={l.product.images?.[0]}
                        alt={l.product.name}
                        className="cart-product-img"
                        loading="lazy"
                      />
                      <div className="cart-product-meta">
                        <div className="cart-product-name">{l.product.name}</div>
                        <div className="cart-product-cat">{l.product.category}</div>
                      </div>
                    </div>

                    <div role="cell" className="cart-price">
                      {formatPriceEUR(l.product.priceCents)}
                    </div>

                    <div role="cell" className="cart-qty">
                      <div className="cart-qty-wrap">
                        <button
                          type="button"
                          className="cart-qty-btn"
                          onClick={() => setQuantity(l.product.id, Math.max(1, l.quantity - 1))}
                          aria-label="Diminuer"
                        >
                          −
                        </button>
                        <input
                          className="cart-qty-input"
                          type="number"
                          min={1}
                          value={l.quantity}
                          onChange={(e) => setQuantity(l.product.id, Math.max(1, Number(e.target.value) || 1))}
                          aria-label="Quantité"
                        />
                        <button
                          type="button"
                          className="cart-qty-btn"
                          onClick={() => setQuantity(l.product.id, l.quantity + 1)}
                          aria-label="Augmenter"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div role="cell" className="cart-line-total">
                      {formatPriceEUR(l.lineTotalCents)}
                    </div>

                    <div role="cell" className="cart-remove">
                      <button type="button" className="cart-remove-btn" onClick={() => removeItem(l.product.id)}>
                        Retirer
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-actions">
                <button type="button" className="cart-clear" onClick={clearCart}>
                  Vider le panier
                </button>
                <a className="cart-back" href="#shop">
                  Continuer mes achats
                </a>
              </div>
            </>
          )}
        </div>

        <aside className="cart-summary" aria-label="Récapitulatif">
          <div className="cart-summary-box">
            <div className="cart-summary-title">Récapitulatif</div>
            <div className="cart-summary-line">
              <span>Sous‑total</span>
              <span>{formatPriceEUR(subtotalCents)}</span>
            </div>
            <div className="cart-summary-line">
              <span>Livraison</span>
              <span>Selon options</span>
            </div>
            <div className="cart-summary-total">
              <span>Total</span>
              <span>{formatPriceEUR(subtotalCents)}</span>
            </div>

            <div className="cart-pay" aria-label="Paiement">
              <button
                type="button"
                className="cart-pay-btn"
                disabled={!stripeLink || lines.length === 0}
                onClick={() => {
                  if (!stripeLink) return;
                  window.open(stripeLink, '_blank', 'noopener,noreferrer');
                }}
              >
                Payer par Stripe
              </button>
              <button
                type="button"
                className="cart-pay-btn"
                disabled={!paypalLink || lines.length === 0}
                onClick={() => {
                  if (!paypalLink) return;
                  window.open(paypalLink, '_blank', 'noopener,noreferrer');
                }}
              >
                Payer par PayPal
              </button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
