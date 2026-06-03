import { useState, useRef, useEffect } from 'react';
import { Plus, X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import storyLive from '@/assets/story-live.jpg';
import daniai from '@/assets/project-daniai.jpg';
import primisx from '@/assets/project-primisx.jpg';
import primis from '@/assets/project-primis.jpg';
import danisearch from '@/assets/project-danisearch.jpg';
import snappix from '@/assets/project-snappix.jpg';
import daniwa from '@/assets/project-daniwhatsapp.jpg';
import lifeloop from '@/assets/project-lifeloop.jpg';
import storyDaniwa from '@/assets/story-daniwa.jpg';
import storyLifeloop from '@/assets/story-lifeloop.jpg';

/* ──────────────────────────────────────────────────────────── */
/*  Verified badge — always visible blue Twitter-style check   */
/* ──────────────────────────────────────────────────────────── */
const VerifiedBadge = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 inline-block"
    aria-label="Verified"
  >
    <circle cx="12" cy="12" r="12" fill="#1d9bf0" />
    <path
      d="M7 12.5l3.5 3.5 6.5-7"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Story {
  id: string;
  author: string;
  image: string;
  avatarImg?: string;
  title: string;
  content: string;
  link?: string;
  linkLabel?: string;
  timestamp: string;
  label?: string;
  labelColor?: string;
}

const STORIES: Story[] = [
  {
    id: '1',
    author: 'Damini',
    image: storyLive,
    avatarImg: storyLive,
    title: '🔴 DANI is Live!',
    content: 'DANI.ai is now live! Your AI best friend — generates images, talks with voice, and more.',
    link: 'https://daniai.vercel.app',
    linkLabel: 'Visit DANI.ai',
    timestamp: '2h ago',
    label: 'LIVE',
  },
  {
    id: '2',
    author: 'Damini',
    image: daniwa,
    avatarImg: storyDaniwa,
    title: '📲 DANI on WhatsApp',
    content: 'DANI WhatsApp AI is live! Chat, generate images, play music, run terminal commands, transcribe voice notes — all from WhatsApp.',
    link: 'https://wa.me/27774008317',
    linkLabel: 'Chat on WhatsApp',
    timestamp: '4h ago',
  },
  {
    id: '3',
    author: 'Damini',
    image: daniai,
    avatarImg: daniai,
    title: '✨ DANI.ai Launch',
    content: 'Introducing DANI.ai — your AI companion for image generation and voice conversations!',
    link: 'https://daniai.vercel.app',
    linkLabel: 'Try DANI.ai',
    timestamp: '6h ago',
  },
  {
    id: '4',
    author: 'Damini',
    image: lifeloop,
    avatarImg: storyLifeloop,
    title: '🎮 LifeLoop — Coming Soon',
    content: 'Working on LifeLoop — an immersive life-simulation RPG. Build your character, make choices, live your story.',
    timestamp: '12h ago',
    label: 'SOON',
  },
  {
    id: '5',
    author: 'Damini',
    image: snappix,
    avatarImg: snappix,
    title: '📱 snappix — In Dev',
    content: 'Building snappix — the next-gen social media platform. Short-form videos, AI-powered feed. Stay tuned!',
    timestamp: '1d ago',
    label: 'SOON',
  },
  {
    id: '6',
    author: 'Damini',
    image: primisx,
    avatarImg: primisx,
    title: '🤖 PRIMISX Dev Update',
    content: 'Building PRIMISX — your J.A.R.V.I.S-style virtual assistant. Major progress on voice commands and task automation!',
    timestamp: '2d ago',
  },
  {
    id: '7',
    author: 'Damini',
    image: primis,
    avatarImg: primis,
    title: '🌟 PRIMIS AI Update',
    content: 'PRIMIS AI is getting smarter! Advanced context-awareness and multi-turn dialogue improvements deployed.',
    link: 'https://primisai.vercel.app',
    linkLabel: 'Visit PRIMIS AI',
    timestamp: '3d ago',
  },
  {
    id: '8',
    author: 'Damini',
    image: danisearch,
    avatarImg: danisearch,
    title: '🔍 DaniSearch',
    content: 'DaniSearch — advanced search engine delivering fast, accurate results. Privacy-first and lightning fast.',
    link: 'https://dani-search.vercel.app',
    linkLabel: 'Try DaniSearch',
    timestamp: '4d ago',
  },
];

const STORY_DURATION = 5000;

export default function Posts() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const storiesScrollRef = useRef<HTMLDivElement>(null);

  const clearTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const openStory = (index: number) => {
    clearTimer();
    setActiveIndex(index);
    setProgress(0);

    const step = (50 / STORY_DURATION) * 100;
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearTimer();
          setActiveIndex(i => {
            if (i !== null && i < STORIES.length - 1) {
              const next = i + 1;
              setTimeout(() => openStory(next), 0);
              return i;
            }
            return null;
          });
          return 100;
        }
        return prev + step;
      });
    }, 50);
  };

  const closeStory = () => {
    clearTimer();
    setActiveIndex(null);
    setProgress(0);
  };

  const goNext = () => {
    if (activeIndex !== null && activeIndex < STORIES.length - 1) openStory(activeIndex + 1);
    else closeStory();
  };

  const goPrev = () => {
    if (activeIndex !== null && activeIndex > 0) openStory(activeIndex - 1);
  };

  useEffect(() => () => clearTimer(), []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') closeStory();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const activeStory = activeIndex !== null ? STORIES[activeIndex] : null;

  return (
    <section id="posts" className="relative py-24">
      <div className="section-divider" />
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-16">
          <p className="text-white/40 uppercase tracking-widest text-xs mb-3">Updates</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Latest <span className="gradient-text-silver">Stories</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto">Tap any story circle to view — swipe or use arrows to navigate</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* ── Story Circles Row ── */}
          <div className="mb-14">
            <div
              ref={storiesScrollRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-1"
            >
              {/* Hidden admin add-story button */}
              <button
                onClick={() => console.log('Admin: add story')}
                className="flex-shrink-0 group transition-opacity duration-300"
                style={{ opacity: 0.15 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.15')}
                aria-label="Add story (admin)"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all">
                  <Plus className="w-6 h-6 text-white/60" />
                </div>
                <p className="text-[10px] text-white/30 text-center mt-2">Add</p>
              </button>

              {STORIES.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => openStory(index)}
                  className="flex-shrink-0 flex flex-col items-center group focus:outline-none"
                  aria-label={`View story: ${story.title}`}
                >
                  {/* Ring + avatar */}
                  <div className="relative">
                    {/* Gradient ring */}
                    <div className="absolute inset-0 rounded-full p-[2.5px] bg-gradient-to-tr from-white via-white/60 to-white/30 animate-pulse">
                      <div className="w-full h-full rounded-full bg-[#050505]" />
                    </div>
                    {/* Avatar */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-200">
                      <img
                        src={story.avatarImg ?? story.image}
                        alt={story.title}
                        className="w-full h-full object-cover grayscale-[20%]"
                      />
                    </div>
                    {/* Live / Soon dot */}
                    {story.label && (
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-black px-1.5 py-0.5 rounded-full border border-white/20 whitespace-nowrap ${story.label === 'LIVE' ? 'bg-white text-black' : 'bg-black text-white/80'}`}>
                        {story.label}
                      </div>
                    )}
                  </div>
                  {/* Author + tick */}
                  <div className="flex items-center gap-1 mt-2.5">
                    <span className="text-[11px] text-white/80 font-medium max-w-[70px] truncate">
                      {story.author}
                    </span>
                    <VerifiedBadge size={12} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Posts Grid ── */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-0.5 h-5 bg-white/60 rounded-full" />
              Featured Posts
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Post 1 */}
              <div className="glass-card rounded-2xl p-6 glass-card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-bold text-sm">D</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white font-semibold text-sm">Damini</span>
                      <VerifiedBadge size={14} />
                    </div>
                    <p className="text-xs text-white/40">2 hours ago</p>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">🎉 DANI.ai is Live!</h4>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">Your AI best friend that generates images and talks with natural voice. Experience the future of AI companionship — now live at daniai.vercel.app</p>
                <div className="bg-white/4 border border-white/8 rounded-lg p-3 mb-4">
                  <p className="text-xs text-white/50">✨ Image Generation · Voice AI · Conversational Intelligence</p>
                </div>
                <button onClick={() => window.open('https://daniai.vercel.app', '_blank')} className="w-full bg-white text-black font-semibold py-2.5 rounded-lg text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                  Try DANI.ai <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Post 2 */}
              <div className="glass-card rounded-2xl p-6 glass-card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-bold text-sm">D</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white font-semibold text-sm">Damini</span>
                      <VerifiedBadge size={14} />
                    </div>
                    <p className="text-xs text-white/40">4 hours ago</p>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">📲 DANI WhatsApp AI</h4>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">DANI — Digital Artificial Neural Intelligence — is now on WhatsApp. Chat, generate images, play music, run commands, and more. All from your WhatsApp chat.</p>
                <div className="bg-white/4 border border-white/8 rounded-lg p-3 mb-4">
                  <p className="text-xs text-white/50">💬 Chat · 🎨 Images · 🎵 Music · ⚡ Terminal · 🌤 Weather</p>
                </div>
                <button onClick={() => window.open('https://wa.me/27774008317', '_blank')} className="w-full bg-white text-black font-semibold py-2.5 rounded-lg text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                  Chat on WhatsApp <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Post 3 */}
              <div className="glass-card rounded-2xl p-6 glass-card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-bold text-sm">D</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white font-semibold text-sm">Damini</span>
                      <VerifiedBadge size={14} />
                    </div>
                    <p className="text-xs text-white/40">1 day ago</p>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">🎮 LifeLoop — Coming Soon</h4>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">An immersive life-simulation RPG is in the works. Build your character, make choices that matter, manage relationships and careers. Every decision shapes your story.</p>
                <div className="bg-white/4 border border-white/8 rounded-lg p-3">
                  <p className="text-xs text-white/50">🚀 Status: In Development · Genre: Life Sim RPG</p>
                </div>
              </div>

              {/* Post 4 */}
              <div className="glass-card rounded-2xl p-6 glass-card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-bold text-sm">D</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white font-semibold text-sm">Damini</span>
                      <VerifiedBadge size={14} />
                    </div>
                    <p className="text-xs text-white/40">5 days ago</p>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">🎯 15+ Projects Delivered</h4>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">Grateful to have successfully delivered 15+ projects — from AI chatbots to full-stack applications. Damini Codesphere continues to grow. Thank you for the trust! 🙏</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/8 border border-white/12 text-white/60 px-3 py-1 rounded-full text-xs">15+ Projects</span>
                  <span className="bg-white/8 border border-white/12 text-white/60 px-3 py-1 rounded-full text-xs">3 Years</span>
                  <span className="bg-white/8 border border-white/12 text-white/60 px-3 py-1 rounded-full text-xs">100% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Story Viewer Modal ── */}
      {activeStory && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeStory}
        >
          <div
            className="relative w-full max-w-sm mx-4 sm:mx-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Progress bars */}
            <div className="flex gap-1 mb-3 px-1">
              {STORIES.map((_, i) => (
                <div key={i} className="flex-1 h-0.5 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-none"
                    style={{ width: i < activeIndex ? '100%' : i === activeIndex ? `${progress}%` : '0%' }}
                  />
                </div>
              ))}
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20">
                  <img src={activeStory.avatarImg ?? activeStory.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-semibold text-sm">{activeStory.author}</span>
                    <VerifiedBadge size={13} />
                  </div>
                  <p className="text-white/50 text-xs">{activeStory.timestamp}</p>
                </div>
              </div>
              <button onClick={closeStory} className="text-white/70 hover:text-white transition-colors p-1" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Story card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full aspect-[9/16] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Tap zones */}
              <button onClick={goPrev} className="absolute left-0 top-0 bottom-0 w-1/3 z-10" aria-label="Previous story" />
              <button onClick={goNext} className="absolute right-0 top-0 bottom-0 w-1/3 z-10" aria-label="Next story" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <h3 className="text-xl font-black text-white mb-2">{activeStory.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{activeStory.content}</p>
                {activeStory.link && (
                  <button
                    onClick={e => { e.stopPropagation(); window.open(activeStory.link, '_blank'); }}
                    className="bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white/90 transition-all"
                  >
                    {activeStory.linkLabel ?? 'Visit'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Arrow nav for desktop */}
            <div className="hidden sm:flex items-center justify-between mt-4 px-1">
              <button
                onClick={goPrev}
                disabled={activeIndex === 0}
                className="flex items-center gap-1.5 text-white/50 hover:text-white disabled:opacity-20 transition-all text-sm"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <span className="text-white/30 text-xs">{activeIndex + 1} / {STORIES.length}</span>
              <button
                onClick={goNext}
                disabled={activeIndex === STORIES.length - 1}
                className="flex items-center gap-1.5 text-white/50 hover:text-white disabled:opacity-20 transition-all text-sm"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
