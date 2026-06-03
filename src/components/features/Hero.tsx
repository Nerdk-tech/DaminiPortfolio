import { ArrowRight, Zap, Code2, Brain, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import heroBg from '@/assets/hero-bg.gif';

const GIF_DURATION_MS = 1400; // slightly under GIF length so restart fires before freeze

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Simple fast loop: restart GIF every N ms
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setGifKey(k => k + 1);
    }, GIF_DURATION_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const skills = [
    { icon: Code2, label: 'Full Stack Dev' },
    { icon: Brain, label: 'AI Engineer' },
    { icon: Globe, label: 'Web & Mobile' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      {/* ── GIF BACKGROUND — loops via key reset ── */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        <img
          key={gifKey}
          src={heroBg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: 0.88,
          }}
        />
      </div>

      {/* Dark vignette — keeps text legible over the GIF */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: [
            // mobile: heavy top + full overlay for readability
            'linear-gradient(to bottom, rgba(5,5,5,0.75) 0%, rgba(5,5,5,0.45) 50%, rgba(5,5,5,0.85) 100%)',
          ].join(', '),
        }}
      />
      {/* Desktop: side vignette so GIF shows right side clearly */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          zIndex: 2,
          background:
            'linear-gradient(to right, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.60) 38%, rgba(5,5,5,0.10) 65%, rgba(5,5,5,0) 100%)',
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, transparent, rgba(5,5,5,0.95))',
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" style={{ zIndex: 3 }} />

      {/* ── CONTENT ── */}
      <div
        className="relative w-full flex flex-col lg:flex-row items-start lg:items-center justify-between min-h-screen"
        style={{ zIndex: 10 }}
      >
        {/* LEFT: Text — full width on mobile, half on desktop */}
        <div
          className="w-full lg:w-[52%] flex flex-col justify-center px-4 sm:px-8 lg:px-12 xl:px-20 pt-24 sm:pt-28 pb-16 lg:py-0"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 mb-5 sm:mb-8 backdrop-blur-sm w-fit">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-xs text-white/80 font-semibold tracking-widest uppercase">
              Full Stack Software Developer
            </span>
          </div>

          {/* Name */}
          <h1 className="font-black leading-none tracking-tight mb-5">
            <span
              className="block text-white/60 mb-1"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
            >
              Hi, I'm
            </span>
            <span
              className="block gradient-text-silver text-glow"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              Damini
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/60 mb-3 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.88rem, 1.8vw, 1.1rem)', maxWidth: '480px' }}
          >
            Expert in Frontend &amp; Backend development. Building AI-powered systems, apps, and digital experiences that matter.
          </p>
          <p className="text-white/30 mb-10 tracking-widest uppercase text-xs font-semibold">
            Damini Codesphere · Est. 2024 · Nigeria
          </p>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {skills.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/10 text-white/60 text-xs font-medium"
              >
                <Icon className="w-3.5 h-3.5 text-white/40" />
                {label}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-6 sm:mb-10">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-bold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base box-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/30 text-white hover:bg-white/8 hover:border-white/60 bg-transparent px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Years Exp.', value: '3+' },
              { label: 'Projects', value: '15+' },
              { label: 'Technologies', value: '10+' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl px-5 py-3 text-center">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: spacer so GIF peeks through on desktop */}
        <div className="hidden lg:block flex-shrink-0" style={{ width: '48vw', height: '100vh' }} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-10 animate-bounce" style={{ zIndex: 10 }}>
        <div className="w-5 h-8 border border-white/25 rounded-full flex justify-center">
          <div className="w-0.5 h-2.5 bg-white/50 rounded-full mt-1.5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
