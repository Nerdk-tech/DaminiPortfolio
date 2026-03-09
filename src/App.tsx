import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/features/Hero';
import About from '@/components/features/About';
import Skills from '@/components/features/Skills';
import Services from '@/components/features/Services';
import Projects from '@/components/features/Projects';
import Posts from '@/components/features/Posts';
import Contact from '@/components/features/Contact';
import Footer from '@/components/layout/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 pointer-events-none" />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Posts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
