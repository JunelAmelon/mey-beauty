import AnnounceBar from './components/AnnounceBar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import RecentPurchaseToast from './components/RecentPurchaseToast.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import { useEffect, useState } from 'react';

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash || '#home';
      setHash(next);

      if (next === '#home' || next === '#about' || next === '#legal' || next === '#privacy' || next === '#contact' || next === '#blog') {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  let page = 'home';
  if (hash.startsWith('#about')) page = 'about';
  if (hash === '#legal') page = 'legal';
  if (hash === '#privacy') page = 'privacy';
  if (hash === '#contact') page = 'contact';
  if (hash === '#blog') page = 'blog';

  return (
    <>
      <AnnounceBar />
      <Navbar />
      <RecentPurchaseToast />
      {page === 'about' ? (
        <AboutPage />
      ) : page === 'legal' ? (
        <LegalPage />
      ) : page === 'privacy' ? (
        <PrivacyPage />
      ) : page === 'contact' ? (
        <ContactPage />
      ) : page === 'blog' ? (
        <BlogPage />
      ) : (
        <HomePage />
      )}
      <Footer />
    </>
  );
}
