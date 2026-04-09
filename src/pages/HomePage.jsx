import Hero from '../components/Hero.jsx';
import HashtagBanner from '../components/HashtagBanner.jsx';
import CategoryGrid from '../components/CategoryGrid.jsx';
import ProductsSection from '../components/ProductsSection.jsx';
import LookbookSection from '../components/LookbookSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import BlogSection from '../components/BlogSection.jsx';
import InstagramSection from '../components/InstagramSection.jsx';
import BrandsSection from '../components/BrandsSection.jsx';

export default function HomePage() {
  return (
    <main id="home">
      <Hero />
      <HashtagBanner />
      <CategoryGrid />
      <ProductsSection />
      <LookbookSection />
      <TestimonialsSection />
      <BlogSection />
      <InstagramSection />
      <BrandsSection />
    </main>
  );
}
