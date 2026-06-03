import { Code2, Database, Palette, Cpu, Server, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS', 'Next.js'],
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Python', 'Node.js', 'REST APIs', 'Database Design', 'PostgreSQL', 'Authentication'],
    },
    {
      icon: Cpu,
      title: 'AI & ML',
      skills: ['Machine Learning', 'NLP', 'Neural Networks', 'AI Integration', 'ChatBot Systems', 'Voice AI'],
    },
    {
      icon: Globe,
      title: 'Web & Infra',
      skills: ['Git / GitHub', 'Vercel', 'API Design', 'Responsive Design', 'SEO', 'Performance'],
    },
  ];

  const coreSkills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 90 },
    { name: 'Python & AI', level: 85 },
    { name: 'React & TypeScript', level: 95 },
    { name: 'Full Stack Architecture', level: 88 },
    { name: 'AI Integration', level: 82 },
  ];

  return (
    <section id="skills" className="relative py-24">
      <div className="section-divider" />
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-16">
          <p className="text-white/40 uppercase tracking-widest text-xs mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Technical <span className="gradient-text-silver">Skills</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto">
            Expert in both frontend and backend — from pixel-perfect UI to scalable server architecture
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6 glass-card-hover animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm text-white/60">
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2.5 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white text-center mb-8">Core Proficiency</h3>
          <div className="space-y-5">
            {coreSkills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white/70 font-medium">{skill.name}</span>
                  <span className="text-sm text-white/40">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/6 rounded-full h-1.5 overflow-hidden border border-white/8">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 100%)`,
                      animationDelay: `${i * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
