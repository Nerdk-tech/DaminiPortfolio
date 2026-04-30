import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Galaxy background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#050505]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Floating orbs — white/silver */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-white/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-sm text-white/80 font-medium tracking-widest uppercase">Full Stack Software Developer</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
            <span className="block text-white/90">Hi, I'm</span>
            <span className="block gradient-text-silver text-glow mt-2">Damini</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-3 max-w-2xl mx-auto font-light tracking-wide">
            Expert in Frontend & Backend · AI Systems · 3 Years Building the Future
          </p>
          <p className="text-base text-white/40 mb-10 tracking-widest uppercase text-sm">
            Damini Codesphere · Est. 2024
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-bold text-base px-8 py-6 transition-all duration-300 box-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/30 text-white hover:bg-white/8 hover:border-white/60 text-base px-8 py-6 bg-transparent"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-3xl mx-auto">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Delivered', value: '15+' },
            { label: 'Technologies', value: '10+' },
            { label: 'Founded', value: '2024' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-5 glass-card-hover">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
          <div className="w-0.5 h-2.5 bg-white/60 rounded-full mt-1.5 animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
