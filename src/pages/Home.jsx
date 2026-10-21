import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '@/components/site/Nav';
import Footer from '@/components/site/Footer';
import Hero, { StatsBand } from '@/components/site/v2/Hero';
import BuildScale, { Why } from '@/components/site/v2/BuildScale';
import Plans from '@/components/site/v2/Plans';
import CtaAvatars from '@/components/site/v2/CtaAvatars';

export default function Home() {
  const { hash } = useLocation();

  // Restore scroll position when arriving from another page (e.g. /#work)
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="page-in">
        <Hero />
        <StatsBand />
        <BuildScale />
        <Why />
        <Plans />
        <CtaAvatars />
      </main>
      <Footer />
    </div>
  );
}