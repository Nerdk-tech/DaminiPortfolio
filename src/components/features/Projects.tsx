import { ExternalLink, Github, Sparkles, Search, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import primisx from '@/assets/project-primisx.jpg';
import primis from '@/assets/project-primis.jpg';
import danisearch from '@/assets/project-danisearch.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'PRIMISX',
      description: 'Advanced virtual assistant powered by AI, similar to J.A.R.V.I.S. Capable of understanding natural language commands and executing complex tasks with intelligent automation.',
      image: primisx,
      icon: Bot,
      tags: ['AI', 'Python', 'NLP', 'Voice Recognition'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'PRIMIS AI',
      description: 'Intelligent AI chatbot with advanced conversational capabilities. Features context awareness, multi-turn dialogue, and personalized responses for enhanced user engagement.',
      image: primis,
      icon: Sparkles,
      tags: ['AI', 'ChatBot', 'Machine Learning', 'React'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'DaniSearch',
      description: 'Next-generation search engine with advanced indexing and ranking algorithms. Delivers fast, accurate results comparable to Google and Bing with enhanced privacy features.',
      image: danisearch,
      icon: Search,
      tags: ['Search Engine', 'Python', 'Web Crawling', 'Algorithms'],
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my most impactful work in AI and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${project.color} w-12 h-12 rounded-lg flex items-center justify-center box-glow`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Explore More on GitHub</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
              onClick={() => window.open('https://github.com/Nerdk-tech', '_blank')}
            >
              <Github className="mr-2 w-5 h-5" />
              Nerdk-tech Repository
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
              onClick={() => window.open('https://github.com/Dev-Damini', '_blank')}
            >
              <Github className="mr-2 w-5 h-5" />
              Dev-Damini Repository
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="mt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 box-glow"
              onClick={() => window.open('https://daminicodes.vercel.app', '_blank')}
            >
              Visit Organization Website
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
