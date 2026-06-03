import { useState, useEffect, useRef } from 'react';
import glassesOn from '@/assets/char-glasses-on.png';
import glassesOff from '@/assets/char-glasses-off.png';

export default function FloatingCharacter() {
  const [glassesRemoved, setGlassesRemoved] = useState(false);
  const [headRotation, setHeadRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [winkState, setWinkState] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  /* ── Scroll → glasses off/on ── */
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrollY(sy);
      const threshold = window.innerHeight * 0.35;
      setGlassesRemoved(sy > threshold);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Mouse → head tilt ── */
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (mousePosRef.current.x - cx) / window.innerWidth;
        const dy = (mousePosRef.current.y - cy) / window.innerHeight;
        setHeadRotation({
          x: dy * -10,
          y: dx * 14,
        });
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ── Entrance animation ── */
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  /* ── Random wink ── */
  useEffect(() => {
    const interval = setInterval(() => {
      setWinkState(true);
      setTimeout(() => setWinkState(false), 180);
    }, 5000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── DESKTOP: Large fixed side character ── */}
      <div
        ref={containerRef}
        className={`fixed right-0 bottom-0 z-40 pointer-events-none select-none transition-all duration-1000 hidden lg:block`}
        style={{
          width: '380px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        }}
        aria-hidden="true"
      >
        {/* Cinematic ground glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: '340px',
            height: '60px',
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.6) 0%, rgba(59,130,246,0.3) 40%, transparent 75%)',
            filter: 'blur(18px)',
            animation: 'aura-pulse 3s ease-in-out infinite',
          }}
        />

        {/* Outer aura ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'aura-pulse 4s ease-in-out infinite 0.5s',
          }}
        />

        {/* Inner aura */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(99,102,241,0.2) 50%, transparent 80%)',
            filter: 'blur(25px)',
            animation: 'aura-pulse 2.5s ease-in-out infinite 1s',
          }}
        />

        {/* Floating energy particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              background: i % 2 === 0
                ? 'rgba(139,92,246,0.8)'
                : 'rgba(59,130,246,0.7)',
              left: `${15 + (i * 37) % 70}%`,
              bottom: `${20 + (i * 53) % 60}%`,
              boxShadow: `0 0 ${6 + i * 2}px ${i % 2 === 0 ? 'rgba(139,92,246,0.9)' : 'rgba(59,130,246,0.9)'}`,
              animation: `particle-float-${i % 4} ${3 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        {/* Character image with 3D tilt */}
        <div
          className="relative"
          style={{
            transform: `perspective(800px) rotateX(${headRotation.x}deg) rotateY(${headRotation.y}deg)`,
            transition: 'transform 0.12s ease-out',
            animation: 'char-float 5s ease-in-out infinite',
            filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.7)) drop-shadow(0 0 60px rgba(59,130,246,0.4))',
          }}
        >
          {/* Glasses OFF */}
          <img
            src={glassesOff}
            alt=""
            className="w-full h-auto object-contain"
            style={{
              opacity: glassesRemoved ? 1 : 0,
              transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
              position: glassesRemoved ? 'relative' : 'absolute',
              top: 0, left: 0,
            }}
            draggable={false}
          />
          {/* Glasses ON */}
          <img
            src={glassesOn}
            alt=""
            className="w-full h-auto object-contain"
            style={{
              opacity: glassesRemoved ? 0 : 1,
              transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
              position: glassesRemoved ? 'absolute' : 'relative',
              top: 0, left: 0,
            }}
            draggable={false}
          />

          {winkState && (
            <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.03)' }} />
          )}
        </div>

        {/* State badge */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '12px' }}>
          {/* Scroll hint */}
          <div
            style={{
              opacity: glassesRemoved ? 0 : 0.85,
              transition: 'opacity 0.4s ease',
              transform: glassesRemoved ? 'translateY(-6px)' : 'translateY(0)',
            }}
          >
            <span className="text-[11px] text-white/60 bg-black/50 border border-white/15 px-3 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
              scroll ↓ for the reveal
            </span>
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0, left: '50%',
              transform: `translateX(-50%) translateY(${glassesRemoved ? '0' : '6px'})`,
              opacity: glassesRemoved ? 0.9 : 0,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              whiteSpace: 'nowrap',
            }}
          >
            <span className="text-[11px] text-purple-200/80 bg-purple-900/30 border border-purple-500/30 px-3 py-1 rounded-full backdrop-blur-sm">
              ✨ no glasses mode
            </span>
          </div>
        </div>
      </div>

      {/* ── MOBILE: Smaller bottom-right character ── */}
      <div
        className={`fixed right-0 bottom-0 z-40 pointer-events-none select-none transition-all duration-1000 lg:hidden`}
        style={{
          width: '130px',
          opacity: isVisible ? 0.92 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            background: 'radial-gradient(ellipse at 50% 90%, rgba(139,92,246,0.5) 0%, transparent 70%)',
            filter: 'blur(20px)',
            position: 'absolute',
            inset: 0,
            animation: 'aura-pulse 3s ease-in-out infinite',
          }}
        />
        <div
          style={{
            transform: `perspective(600px) rotateX(${headRotation.x * 0.5}deg) rotateY(${headRotation.y * 0.5}deg)`,
            transition: 'transform 0.15s ease-out',
            animation: 'char-float 5s ease-in-out infinite',
            filter: 'drop-shadow(0 0 16px rgba(139,92,246,0.6))',
            position: 'relative',
          }}
        >
          <img
            src={glassesOff}
            alt=""
            className="w-full h-auto object-contain"
            style={{
              opacity: glassesRemoved ? 1 : 0,
              transition: 'opacity 0.6s ease',
              position: glassesRemoved ? 'relative' : 'absolute',
              top: 0, left: 0,
            }}
            draggable={false}
          />
          <img
            src={glassesOn}
            alt=""
            className="w-full h-auto object-contain"
            style={{
              opacity: glassesRemoved ? 0 : 1,
              transition: 'opacity 0.6s ease',
              position: glassesRemoved ? 'absolute' : 'relative',
              top: 0, left: 0,
            }}
            draggable={false}
          />
        </div>
      </div>
    </>
  );
}
