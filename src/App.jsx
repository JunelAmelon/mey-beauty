import AnnounceBar from './components/AnnounceBar.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HashtagBanner from './components/HashtagBanner.jsx';
import CategoryGrid from './components/CategoryGrid.jsx';
import ProductsSection from './components/ProductsSection.jsx';
import LookbookSection from './components/LookbookSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import InstagramSection from './components/InstagramSection.jsx';
import BrandsSection from './components/BrandsSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <AnnounceBar />
      <Navbar />
      <Hero />
      <HashtagBanner />
      <CategoryGrid />
      <ProductsSection />
      <LookbookSection />
      <TestimonialsSection />
      <BlogSection />
      <InstagramSection />
      <BrandsSection />
      <Footer />
    </>
  );
}
