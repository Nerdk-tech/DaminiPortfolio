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

/* ── Generates a CSS star field injected into #star-field ── */
function StarField() {
  return (
    <div id="star-field" aria-hidden="true">
      {/* Nebula blobs */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      {/* Inline SVG star layers for zero DOM overhead */}
      <svg
        className="star-layer star-layer-1 absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.9 }}
      >
        {Array.from({ length: 200 }).map((_, i) => {
          const x = (((i * 137.5) % 100)).toFixed(2);
          const y = (((i * 97.3) % 100)).toFixed(2);
          const r = (0.3 + (i % 5) * 0.18).toFixed(2);
          const op = (0.3 + (i % 7) * 0.1).toFixed(2);
          return (
            <circle
              key={i}
              cx={`${x}%`}
              cy={`${y}%`}
              r={r}
              fill="white"
              opacity={op}
            />
          );
        })}
      </svg>

      <svg
        className="star-layer star-layer-2 absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.6 }}
      >
        {Array.from({ length: 150 }).map((_, i) => {
          const x = (((i * 211.3) % 100)).toFixed(2);
          const y = (((i * 73.1) % 100)).toFixed(2);
          const r = (0.2 + (i % 3) * 0.15).toFixed(2);
          const op = (0.2 + (i % 9) * 0.08).toFixed(2);
          return (
            <circle
              key={i}
              cx={`${x}%`}
              cy={`${y}%`}
              r={r}
              fill="white"
              opacity={op}
            />
          );
        })}
      </svg>

      <svg
        className="star-layer star-layer-3 absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.4 }}
      >
        {Array.from({ length: 100 }).map((_, i) => {
          const x = (((i * 53.7) % 100)).toFixed(2);
          const y = (((i * 163.9) % 100)).toFixed(2);
          const r = (0.4 + (i % 4) * 0.2).toFixed(2);
          const op = (0.15 + (i % 5) * 0.12).toFixed(2);
          return (
            <circle
              key={i}
              cx={`${x}%`}
              cy={`${y}%`}
              r={r}
              fill="white"
              opacity={op}
            />
          );
        })}
      </svg>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Galaxy star field — fixed behind everything */}
      <StarField />

      <Header />
      <main className="relative z-10">
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
