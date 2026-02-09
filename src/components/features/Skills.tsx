import { Code2, Database, Palette, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'from-purple-500 to-pink-500',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'from-cyan-500 to-blue-500',
      skills: ['Python', 'Node.js', 'REST APIs', 'Database Design'],
    },
    {
      icon: Cpu,
      title: 'AI & ML',
      color: 'from-purple-500 to-cyan-500',
      skills: ['Machine Learning', 'Natural Language Processing', 'Neural Networks', 'AI Integration'],
    },
    {
      icon: Palette,
      title: 'Tools & Others',
      color: 'from-pink-500 to-purple-500',
      skills: ['Git/GitHub', 'Vercel', 'UI/UX Design', 'Responsive Design'],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 box-glow`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Skills Progress */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Core Expertise</h3>
          <div className="space-y-6">
            {[
              { name: 'React & TypeScript', level: 90, color: 'purple' },
              { name: 'Python Development', level: 85, color: 'cyan' },
              { name: 'AI & Machine Learning', level: 80, color: 'pink' },
              { name: 'Full Stack Development', level: 88, color: 'purple' },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${skill.color}-600 to-${skill.color}-400 rounded-full transition-all duration-1000 ease-out box-glow`}
                    style={{ width: `${skill.level}%` }}
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
