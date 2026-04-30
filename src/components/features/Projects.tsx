import { ExternalLink, Github, Sparkles, Search, Bot, Heart, Video, Clock, Gamepad2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import primisx from '@/assets/project-primisx.jpg';
import primis from '@/assets/project-primis.jpg';
import danisearch from '@/assets/project-danisearch.jpg';
import daniai from '@/assets/project-daniai.jpg';
import snappix from '@/assets/project-snappix.jpg';
import daniwa from '@/assets/project-daniwhatsapp.jpg';
import lifeloop from '@/assets/project-lifeloop.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'DANI.ai',
      description: 'Your AI best friend that generates stunning images and talks with natural voice. An intelligent companion combining image generation with conversational AI for a truly interactive experience.',
      image: daniai,
      icon: Heart,
      tags: ['AI Companion', 'Image Generation', 'Voice AI', 'React'],
      link: 'https://daniai.vercel.app',
      status: 'live',
      featured: true,
    },
    {
      title: 'DANI WhatsApp AI',
      description: 'DANI — Digital Artificial Neural Intelligence — is a powerful WhatsApp AI assistant. Chat naturally, generate images, review files & code, play music, get weather, run terminal commands, transcribe voice notes, and much more. The ultimate AI companion in your pocket.',
      image: daniwa,
      icon: MessageCircle,
      tags: ['WhatsApp AI', 'Multi-Modal', 'Voice', 'Terminal', 'Image Gen'],
      link: 'https://wa.me/27774008317',
      status: 'live',
      featured: true,
      badge: 'WhatsApp',
    },
    {
      title: 'PRIMIS AI',
      description: 'Intelligent AI chatbot with advanced conversational capabilities. Features context awareness, multi-turn dialogue, and personalized responses for enhanced user engagement.',
      image: primis,
      icon: Sparkles,
      tags: ['AI', 'ChatBot', 'Machine Learning', 'React'],
      link: 'https://primisai.vercel.app',
      status: 'live',
    },
    {
      title: 'DaniSearch',
      description: 'Next-generation search engine with advanced indexing and ranking algorithms. Delivers fast, accurate results comparable to Google and Bing with enhanced privacy features.',
      image: danisearch,
      icon: Search,
      tags: ['Search Engine', 'Python', 'Web Crawling', 'Algorithms'],
      link: 'https://dani-search.vercel.app',
      status: 'live',
    },
    {
      title: 'LifeLoop',
      description: 'An immersive life-simulation RPG — think The Sims, reimagined. Build your character, make life decisions, manage relationships, careers and emotions in a living, breathing world. Every choice shapes your story.',
      image: lifeloop,
      icon: Gamepad2,
      tags: ['RPG', 'Life Sim', 'Game Dev', 'React'],
      status: 'coming-soon',
    },
    {
      title: 'snappix',
      description: 'Next-generation social media platform inspired by TikTok. Short-form video sharing with AI-powered content discovery, trending feeds, and interactive community features.',
      image: snappix,
      icon: Video,
      tags: ['Social Media', 'Video', 'React', 'Real-time'],
      status: 'coming-soon',
    },
    {
      title: 'PRIMISX',
      description: 'Advanced virtual assistant powered by AI, similar to J.A.R.V.I.S. Capable of understanding natural language commands and executing complex tasks with intelligent automation.',
      image: primisx,
      icon: Bot,
      tags: ['AI', 'Python', 'NLP', 'Voice Recognition'],
      status: 'coming-soon',
    },
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="section-divider" />
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-16">
          <p className="text-white/40 uppercase tracking-widest text-xs mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Featured <span className="gradient-text-silver">Projects</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto">
            AI systems, full-stack applications, and innovative platforms built from scratch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-14">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative glass-card rounded-2xl overflow-hidden glass-card-hover animate-slide-up ${project.featured ? 'ring-1 ring-white/20' : ''}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-white" />
                </div>

                {/* Status badge */}
                {project.status === 'coming-soon' && (
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-white/70" />
                    <span className="text-white/70 text-xs font-semibold">Coming Soon</span>
                  </div>
                )}
                {project.status === 'live' && (
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/25 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs font-semibold">{project.badge ?? 'Live'}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <Button
                    className="w-full bg-white text-black hover:bg-white/90 font-semibold text-sm py-2.5 transition-all duration-200"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    {project.badge === 'WhatsApp' ? 'Chat on WhatsApp' : 'Visit Project'}
                    <ExternalLink className="ml-2 w-3.5 h-3.5" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Links */}
        <div className="text-center">
          <p className="text-white/40 text-sm mb-6 uppercase tracking-widest">Explore More on GitHub</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border border-white/20 text-white/70 hover:bg-white/5 hover:border-white/40 hover:text-white bg-transparent"
              onClick={() => window.open('https://github.com/Nerdk-tech', '_blank')}
            >
              <Github className="mr-2 w-4 h-4" />
              Nerdk-tech
              <ExternalLink className="ml-2 w-3.5 h-3.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/20 text-white/70 hover:bg-white/5 hover:border-white/40 hover:text-white bg-transparent"
              onClick={() => window.open('https://github.com/Dev-Damini', '_blank')}
            >
              <Github className="mr-2 w-4 h-4" />
              Dev-Damini
              <ExternalLink className="ml-2 w-3.5 h-3.5" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-bold box-glow"
              onClick={() => window.open('https://daminicodes.zone.id', '_blank')}
            >
              Organization Website
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
