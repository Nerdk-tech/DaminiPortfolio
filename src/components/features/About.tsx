import { Terminal, Rocket, Brain } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems that learn and adapt',
    },
    {
      icon: Terminal,
      title: 'Full Stack Development',
      description: 'End-to-end solutions from frontend to backend',
    },
    {
      icon: Rocket,
      title: 'Innovation Focused',
      description: 'Pushing boundaries with cutting-edge technology',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12 mb-12 hover:border-purple-500/50 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> and{' '}
              <span className="text-cyan-400 font-semibold">AI Engineer</span> with 3 years of experience in creating
              innovative digital solutions. As the founder of{' '}
              <span className="gradient-text font-semibold">Damini Codesphere</span> (est. 2024), I specialize in
              building intelligent applications that merge cutting-edge AI with seamless user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across modern web technologies including{' '}
              <span className="text-purple-400">React</span>, <span className="text-cyan-400">TypeScript</span>,{' '}
              <span className="text-pink-400">Python</span>, and <span className="text-purple-400">JavaScript</span>.
              I'm dedicated to crafting solutions that not only solve problems but also push the boundaries of what's
              possible in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 box-glow">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
