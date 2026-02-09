import { ShoppingCart, Bot, Globe, Smartphone, Search, Cpu, Code2, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce Websites',
      description: 'Full-featured online stores with payment integration, inventory management, and seamless checkout experiences.',
      features: ['Shopping Cart', 'Payment Gateway', 'Admin Dashboard', 'Product Management'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Bot,
      title: 'AI Chatbot Integration',
      description: 'Intelligent conversational AI that understands context, learns from interactions, and provides 24/7 customer support.',
      features: ['Natural Language', 'Context Awareness', 'Multi-platform', 'Custom Training'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Cpu,
      title: 'Virtual Assistant Solutions',
      description: 'JARVIS-style AI assistants that automate tasks, manage workflows, and provide intelligent automation for your business.',
      features: ['Voice Commands', 'Task Automation', 'Smart Integration', 'Custom Workflows'],
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Globe,
      title: 'Custom Web Applications',
      description: 'Tailored web solutions built with React, TypeScript, and modern frameworks to meet your unique business needs.',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Scalable Architecture'],
      color: 'from-purple-500 to-cyan-500',
    },
    {
      icon: Search,
      title: 'Search Engine Development',
      description: 'Advanced search systems with powerful indexing, ranking algorithms, and lightning-fast results for your platform.',
      features: ['Smart Indexing', 'Fast Queries', 'Relevant Results', 'Analytics Dashboard'],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using React Native for iOS and Android with native performance.',
      features: ['Cross-Platform', 'Native Feel', 'Offline Support', 'Push Notifications'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Code2,
      title: 'API Development & Integration',
      description: 'RESTful APIs, third-party integrations, and backend services that power your applications seamlessly.',
      features: ['REST APIs', 'Database Design', 'Authentication', 'Documentation'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design Services',
      description: 'Beautiful, intuitive interfaces that engage users and provide exceptional digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive full-stack development and AI solutions tailored to transform your business and bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`bg-gradient-to-br ${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 box-glow group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Me?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '3+ Years Experience',
                description: 'Proven track record in delivering high-quality projects',
              },
              {
                title: 'Cutting-Edge Tech',
                description: 'Always using the latest technologies and best practices',
              },
              {
                title: 'AI Expertise',
                description: 'Specialized in integrating AI and machine learning solutions',
              },
            ].map((point) => (
              <div key={point.title} className="text-center">
                <h4 className="text-xl font-semibold gradient-text mb-2">{point.title}</h4>
                <p className="text-gray-300 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 box-glow text-lg px-8 py-6"
              onClick={() => window.open('https://wa.me/2349120185747', '_blank')}
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
