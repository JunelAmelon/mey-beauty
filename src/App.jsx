import AnnounceBar from './components/AnnounceBar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import RecentPurchaseToast from './components/RecentPurchaseToast.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { useEffect, useState } from 'react';

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const page = hash.startsWith('#about') ? 'about' : 'home';

  return (
    <>
      <AnnounceBar />
      <Navbar />
      <RecentPurchaseToast />
      {page === 'about' ? <AboutPage /> : <HomePage />}
      <Footer />
    </>
  );
}
