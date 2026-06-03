import { Terminal, Rocket, Brain, Code2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems that learn, adapt, and solve real-world problems',
    },
    {
      icon: Code2,
      title: 'Frontend Expert',
      description: 'Pixel-perfect UIs with React, TypeScript, and modern CSS — fast and accessible',
    },
    {
      icon: Terminal,
      title: 'Backend Expert',
      description: 'Robust APIs, databases, and server-side architecture that scales',
    },
    {
      icon: Rocket,
      title: 'Innovation Focused',
      description: 'Shipping products that push the boundaries of what technology can do',
    },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="section-divider mb-0" />
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-16">
          <p className="text-white/40 uppercase tracking-widest text-xs mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            About <span className="gradient-text-silver">Me</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 mb-10 glass-card-hover">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-gradient-to-b from-white to-white/20 rounded-full flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  I'm a <span className="text-white font-semibold">Full Stack Software Developer</span> — expert in both
                  frontend and backend — with 3 years of experience shipping production-ready applications.
                  As founder of <span className="text-white font-semibold">Damini Codesphere</span> (est. 2024), I build
                  everything from AI-powered tools to social platforms and search engines.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  My stack spans <span className="text-white/90">React, TypeScript, JavaScript, Python,</span> and
                  <span className="text-white/90"> Node.js</span> on the frontend and backend alike.
                  I'm passionate about clean architecture, fast UX, and integrating AI in ways that actually matter to users.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {['React', 'TypeScript', 'Python', 'JavaScript', 'Node.js', 'HTML/CSS', 'AI Integration', 'REST APIs', 'Databases', 'UI/UX'].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs text-white/70 border border-white/15 rounded-full glass-card">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card rounded-xl p-6 glass-card-hover animate-slide-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
