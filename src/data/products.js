const botanCategories = {
  faceBody: 'Soins visage & corps',
  tanning: 'Autobronzants & solaires',
  hygiene: 'Hygiène',
  hydration: 'Hydratation',
};

const lpgCategories = {
  body: 'Produits corps',
  face: 'Produits visage',
  supplements: 'Compléments alimentaires',
  textile: 'Textile',
};

export const products = [
  {
    id: 'botan-gommage-magic-perfection',
    brand: 'Botan',
    category: botanCategories.faceBody,
    name: 'Gommage Magic Perfection',
    description:
      "Double action mécanique (cristaux marins) et enzymatique (AHA + extraits de fruits). Se transforme en soin hydratant après exfoliation. Enrichi en paillettes naturelles, peau douce et lumineuse sans film gras.",
    priceCents: 3499,
    currency: 'EUR',
    images: ['/produits/gommage-magic-perfection-botan-2.jpg'],
    tags: ['Exfoliation', 'Éclat'],
  },
  {
    id: 'botan-creme-de-nuit-lumineuse-perfection',
    brand: 'Botan',
    category: botanCategories.faceBody,
    name: 'Crème de nuit Lumineuse Perfection',
    description:
      "Soin anti-âge à l'acide hyaluronique et au rétinol actif. Peau lissée, raffermie et éclatante dès le réveil. Régénération nocturne, teint visiblement plus jeune et lumineux nuit après nuit.",
    priceCents: 5299,
    currency: 'EUR',
    images: ['/produits/creme-de-nuit-perfection-botan.jpg'],
    tags: ['Anti-âge', 'Nuit'],
  },
  {
    id: 'botan-mousse-bronzante-intense-caramel',
    brand: 'Botan',
    category: botanCategories.tanning,
    name: 'Mousse bronzante intense caramel',
    description:
      "Formule légère au fini velouté pour un teint caramel naturel. Effet flouteur instantané, texture aérienne ultra-facile à appliquer. Résultat uniforme sans effet masque, confortable du matin au soir.",
    priceCents: 3590,
    currency: 'EUR',
    images: ['/produits/mousse-bronzante-au-caramel.jpg'],
    tags: ['Bronzage', 'Teint'],
  },
  {
    id: 'botan-spray-bronzant-intense-plus-chanvre',
    brand: 'Botan',
    category: botanCategories.tanning,
    name: 'Spray bronzant Intense+ au chanvre',
    description:
      "50 % d'actifs bronzants supplémentaires pour un hâle plus intense dès la 1re application. Brume ultra-fine, résultat uniforme. Enrichi en Matrixyl et extrait de Cannabis Sativa — peau lissée et nourrie.",
    priceCents: 3899,
    currency: 'EUR',
    images: ['/produits/spray-bronzant-intense-au-chanvre.jpg'],
    tags: ['Bronzage', 'Anti-âge'],
  },
  {
    id: 'botan-spray-bronzant-intense',
    brand: 'Botan',
    category: botanCategories.tanning,
    name: 'Spray bronzant intense',
    description:
      "Teint hâlé, uniforme et naturel en une application. Brume fine sans traces, peau douce, soyeuse et hydratée. Résultat instantané, éclat lumineux toute l'année.",
    priceCents: 3599,
    currency: 'EUR',
    images: ['/produits/spray-bronzant-intense.jpg'],
    tags: ['Bronzage', 'Éclat'],
  },
  {
    id: 'botan-spray-bronzant-progressif-anti-age',
    brand: 'Botan',
    category: botanCategories.tanning,
    name: 'Spray bronzant progressif anti-âge',
    description:
      "Spray non teinté pour un hâle naturel et lumineux progressif. Brume ultra-fine, bronzage satiné sans traces. Enrichi en Matrixyl — peau hydratée, douce et visiblement rajeunie.",
    priceCents: 3599,
    currency: 'EUR',
    images: ['/produits/spray-bronzant-progressif-anti-age.jpg'],
    tags: ['Bronzage', 'Hydratation'],
  },
  {
    id: 'botan-dentifrice-blanchissant-charbon-actif',
    brand: 'Botan',
    category: botanCategories.hygiene,
    name: 'Dentifrice blanchissant au charbon actif végétal bio',
    description:
      "Charbon actif végétal bio issu de forêts françaises éco-gérées. Blanchiment progressif, haleine fraîche, émail renforcé. 99,39 % d'origine naturelle, sans peroxyde, testé sous contrôle odontologique. Fabriqué en France.",
    priceCents: 1190,
    currency: 'EUR',
    images: ['/produits/dentifrice-blanchissant-1.jpg'],
    tags: ['Hygiène', 'Naturel'],
  },
  {
    id: 'botan-brume-hydratante-aloe-vera',
    brand: 'Botan',
    category: botanCategories.hydration,
    name: "Brume hydratante à l'Aloe Vera",
    description:
      "Hydratation intense et non grasse dès la 1re vaporisation. Enrichie en acide hyaluronique et Aloe Vera Bio, apaise et revitalise. Accord camomille et hamamélis, parfum ensoleillé. Plus pratique et économique qu'une crème.",
    priceCents: 3599,
    currency: 'EUR',
    images: ['/produits/produit (1).png'],
    tags: ['Hydratation', 'Aloe Vera'],
  },

  {
    id: 'lpg-creme-micro-peeling',
    brand: 'LPG',
    category: lpgCategories.body,
    name: 'Crème micro-peeling',
    description:
      "Crème fluide légère enrichie en AHAs pour une exfoliation douce, hydratation et renouvellement cellulaire. Grain de peau ultra-lisse, pénétration rapide.",
    priceCents: 5700,
    currency: 'EUR',
    images: ['/produits/produit (2).png'],
    tags: ['Corps', 'Exfoliation'],
  },
  {
    id: 'lpg-creme-anti-cellulite',
    brand: 'LPG',
    category: lpgCategories.body,
    name: 'Crème anti-cellulite',
    description:
      "Gel-crème traitant tous les types de cellulite (adipeuse, aqueuse). Réduit les adipocytes, lutte contre la rétention d'eau. Silhouette plus lisse et tonique.",
    priceCents: 5700,
    currency: 'EUR',
    images: ['/produits/produit (3).webp'],
    tags: ['Minceur', 'Corps'],
  },
  {
    id: 'lpg-creme-fermete-galbante',
    brand: 'LPG',
    category: lpgCategories.body,
    name: 'Crème fermeté galbante',
    description:
      "Formule restructurante, liftante et hydratante pour une mise sous tension cutanée profonde. Lutte contre le relâchement et maintient la jeunesse du corps.",
    priceCents: 5700,
    currency: 'EUR',
    images: ['/produits/produit (4).webp'],
    tags: ['Fermeté', 'Corps'],
  },
  {
    id: 'lpg-creme-lipo-reductrice',
    brand: 'LPG',
    category: lpgCategories.body,
    name: 'Crème lipo-réductrice',
    description:
      "Recommandée pour les rondeurs rebelles (hanches, ventre, bras). Texture soyeuse facilitant le massage. Silhouette galbée et redessinée.",
    priceCents: 5700,
    currency: 'EUR',
    images: ['/produits/produit (5).webp'],
    tags: ['Minceur', 'Massage'],
  },
  {
    id: 'lpg-serum-intensif-anti-cellulite',
    brand: 'LPG',
    category: lpgCategories.body,
    name: 'Sérum intensif anti-cellulite',
    description:
      "Sérum concentré haute efficacité, agit en synergie avec le gel-crème. Améliore l'élasticité, combat les cellules graisseuses et la rétention d'eau.",
    priceCents: 6900,
    currency: 'EUR',
    images: ['/produits/produit (6).webp'],
    tags: ['Minceur', 'Cure'],
  },
  {
    id: 'lpg-huile-experte-vergetures',
    brand: 'LPG',
    category: lpgCategories.body,
    name: 'Huile experte vergetures',
    description:
      "100 % d'origine naturelle, riche en oméga 3-6-9. Triple action : prévention, correction et assouplissement. Idéale pendant la grossesse dès le 1er mois.",
    priceCents: 5900,
    currency: 'EUR',
    images: ['/produits/produit (7).webp'],
    tags: ['Naturel', 'Corps'],
  },
];

export const popularProductIds = [
  'botan-gommage-magic-perfection',
  'botan-creme-de-nuit-lumineuse-perfection',
  'botan-mousse-bronzante-intense-caramel',
  'botan-spray-bronzant-intense-plus-chanvre',
  'lpg-creme-anti-cellulite',
  'lpg-serum-intensif-anti-cellulite',
  'botan-dentifrice-blanchissant-charbon-actif',
  'botan-brume-hydratante-aloe-vera',
];

export function formatPriceEUR(priceCents) {
  const value = priceCents / 100;
  return value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getPopularProducts() {
  return popularProductIds.map((id) => getProductById(id)).filter(Boolean);
}
