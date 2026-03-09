import { useState } from 'react';
import { Plus, CheckCircle2, X, ExternalLink } from 'lucide-react';
import storyLive from '@/assets/story-live.jpg';
import daniai from '@/assets/project-daniai.jpg';
import primisx from '@/assets/project-primisx.jpg';
import primis from '@/assets/project-primis.jpg';
import danisearch from '@/assets/project-danisearch.jpg';
import snappix from '@/assets/project-snappix.jpg';

interface Story {
  id: string;
  author: string;
  verified: boolean;
  image: string;
  title: string;
  content: string;
  link?: string;
  timestamp: string;
}

const Posts = () => {
  const [stories] = useState<Story[]>([
    {
      id: '1',
      author: 'Damini',
      verified: true,
      image: storyLive,
      title: 'DANI is Live',
      content: 'DANI.ai is now live! Check out my AI best friend that generates images and talks with voice.',
      link: 'https://daniai.vercel.app',
      timestamp: '2h ago',
    },
    {
      id: '2',
      author: 'Damini',
      verified: true,
      image: daniai,
      title: 'DANI.ai Launch',
      content: '🎉 Introducing DANI.ai - Your AI companion for image generation and voice conversations!',
      link: 'https://daniai.vercel.app',
      timestamp: '3h ago',
    },
    {
      id: '3',
      author: 'Damini',
      verified: true,
      image: snappix,
      title: 'snappix Coming Soon',
      content: '📱 Working on snappix - the next-gen social media platform. Stay tuned!',
      timestamp: '1d ago',
    },
    {
      id: '4',
      author: 'Damini',
      verified: true,
      image: primisx,
      title: 'PRIMISX Development',
      content: '🤖 Building PRIMISX - Your virtual assistant like J.A.R.V.I.S. Amazing progress!',
      timestamp: '2d ago',
    },
    {
      id: '5',
      author: 'Damini',
      verified: true,
      image: primis,
      title: 'PRIMIS AI',
      content: '✨ PRIMIS AI chatbot is getting smarter every day with advanced conversational capabilities!',
      timestamp: '3d ago',
    },
    {
      id: '6',
      author: 'Damini',
      verified: true,
      image: danisearch,
      title: 'DaniSearch',
      content: '🔍 DaniSearch - Advanced search engine delivering fast, accurate results!',
      timestamp: '4d ago',
    },
  ]);

  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [viewProgress, setViewProgress] = useState(0);

  const openStory = (index: number) => {
    setActiveStoryIndex(index);
    setViewProgress(0);
    
    // Auto progress animation
    const duration = 5000; // 5 seconds per story
    const interval = 50;
    const step = (interval / duration) * 100;
    
    const progressInterval = setInterval(() => {
      setViewProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Auto move to next story
          if (index < stories.length - 1) {
            openStory(index + 1);
          } else {
            closeStory();
          }
          return 100;
        }
        return prev + step;
      });
    }, interval);
  };

  const closeStory = () => {
    setActiveStoryIndex(null);
    setViewProgress(0);
  };

  const nextStory = () => {
    if (activeStoryIndex !== null && activeStoryIndex < stories.length - 1) {
      openStory(activeStoryIndex + 1);
    }
  };

  const prevStory = () => {
    if (activeStoryIndex !== null && activeStoryIndex > 0) {
      openStory(activeStoryIndex - 1);
    }
  };

  const handleAddStory = () => {
    console.log('Admin panel for adding stories');
    // Hidden admin functionality - will be triggered through a hidden route or command
  };

  return (
    <section id="posts" className="relative py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Updates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with my latest projects, achievements, and tech journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Stories Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
              Stories
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {/* Add Story Button (Hidden Admin) */}
              <button
                onClick={handleAddStory}
                className="flex-shrink-0 group cursor-pointer"
                style={{ opacity: 0.3 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.3')}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-2 border-dashed border-purple-500/40 flex items-center justify-center group-hover:border-purple-500 transition-all">
                    <Plus className="w-8 h-8 text-purple-400" />
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2 group-hover:text-purple-400 transition-colors">Add Story</p>
                </div>
              </button>

              {/* Story Circles */}
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  onClick={() => openStory(index)}
                  className="flex-shrink-0 group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="relative">
                    {/* Gradient Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-500 p-[3px] box-glow animate-pulse">
                      <div className="w-full h-full rounded-full bg-black" />
                    </div>
                    
                    {/* Story Image */}
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-black group-hover:scale-105 transition-transform">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Live Indicator - Only for first story */}
                    {index === 0 && (
                      <div className="absolute bottom-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full border-2 border-black animate-pulse">
                        LIVE
                      </div>
                    )}
                  </div>
                  
                  {/* Author Name */}
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <p className="text-xs text-white font-medium truncate max-w-[70px]">
                      {story.author}
                    </p>
                    {story.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-current flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
              Featured Posts
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Post 1 - DANI.ai Launch */}
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-white font-semibold">Damini</p>
                        <CheckCircle2 className="w-4 h-4 text-blue-500 fill-current" />
                      </div>
                      <p className="text-xs text-gray-400">2 hours ago</p>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">🎉 DANI.ai is Now Live!</h4>
                  <p className="text-gray-300 mb-4">
                    Excited to announce the launch of DANI.ai - your AI best friend that generates images and talks with natural voice! Experience the future of AI companionship.
                  </p>
                  
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg p-4 mb-4">
                    <p className="text-sm text-pink-300">✨ Features: Image Generation • Voice AI • Conversational Intelligence</p>
                  </div>
                  
                  <button
                    onClick={() => window.open('https://daniai.vercel.app', '_blank')}
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all"
                  >
                    Try DANI.ai Now
                  </button>
                </div>
              </div>

              {/* Post 2 - snappix Coming Soon */}
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-white font-semibold">Damini</p>
                        <CheckCircle2 className="w-4 h-4 text-blue-500 fill-current" />
                      </div>
                      <p className="text-xs text-gray-400">1 day ago</p>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">📱 snappix - Coming Soon</h4>
                  <p className="text-gray-300 mb-4">
                    Working on something exciting! snappix - a next-gen social media platform inspired by TikTok. Short-form videos, AI-powered discovery, and seamless sharing. Stay tuned!
                  </p>
                  
                  <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg p-4 mb-4">
                    <p className="text-sm text-purple-300">🚀 Status: In Development • Launching Soon</p>
                  </div>
                  
                  <div className="w-full bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-500/50 text-purple-300 font-semibold py-3 rounded-lg text-center">
                    Coming Soon
                  </div>
                </div>
              </div>

              {/* Post 3 - PRIMISX Update */}
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-white font-semibold">Damini</p>
                        <CheckCircle2 className="w-4 h-4 text-blue-500 fill-current" />
                      </div>
                      <p className="text-xs text-gray-400">3 days ago</p>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">🤖 PRIMISX Development Update</h4>
                  <p className="text-gray-300 mb-4">
                    Making great progress on PRIMISX - the J.A.R.V.I.S-style virtual assistant! Advanced NLP, voice commands, and intelligent automation coming together beautifully.
                  </p>
                  
                  <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-lg p-4">
                    <p className="text-sm text-purple-300">⚡ Progress: 65% • Expected Launch: Q2 2026</p>
                  </div>
                </div>
              </div>

              {/* Post 4 - Milestone */}
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-white font-semibold">Damini</p>
                        <CheckCircle2 className="w-4 h-4 text-blue-500 fill-current" />
                      </div>
                      <p className="text-xs text-gray-400">5 days ago</p>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">🎯 Milestone Achieved!</h4>
                  <p className="text-gray-300 mb-4">
                    Grateful to announce that Damini Codesphere has successfully delivered 15+ projects in 2026! From AI chatbots to full-stack applications, the journey continues. Thank you for your support! 🙏
                  </p>
                  
                  <div className="flex gap-2 text-sm text-gray-300">
                    <span className="bg-purple-500/20 border border-purple-500/30 px-3 py-1 rounded-full">15+ Projects</span>
                    <span className="bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 rounded-full">100% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Viewer Modal */}
      {activeStoryIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          {/* Progress Bars */}
          <div className="absolute top-4 left-0 right-0 px-4 flex gap-1 z-10">
            {stories.map((_, index) => (
              <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-100"
                  style={{
                    width: index < activeStoryIndex ? '100%' : index === activeStoryIndex ? `${viewProgress}%` : '0%'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Story Header */}
          <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-10 mt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                D
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-white font-semibold">{stories[activeStoryIndex].author}</p>
                  <CheckCircle2 className="w-4 h-4 text-blue-500 fill-current" />
                </div>
                <p className="text-xs text-gray-300">{stories[activeStoryIndex].timestamp}</p>
              </div>
            </div>
            <button
              onClick={closeStory}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Story Content */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            {/* Previous Story Area (left 1/3) */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer z-20"
              onClick={prevStory}
            />
            
            {/* Next Story Area (right 2/3) */}
            <div
              className="absolute right-0 top-0 bottom-0 w-2/3 cursor-pointer z-20"
              onClick={nextStory}
            />

            {/* Story Image and Content */}
            <div className="relative w-full max-w-md mx-auto px-4">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/50 to-black/50 backdrop-blur-sm border border-purple-500/30">
                <img
                  src={stories[activeStoryIndex].image}
                  alt={stories[activeStoryIndex].title}
                  className="w-full h-[70vh] object-cover"
                />
                
                {/* Story Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {stories[activeStoryIndex].title}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {stories[activeStoryIndex].content}
                  </p>
                  
                  {stories[activeStoryIndex].link && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(stories[activeStoryIndex].link, '_blank');
                      }}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 box-glow"
                    >
                      Visit Project
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Posts;
