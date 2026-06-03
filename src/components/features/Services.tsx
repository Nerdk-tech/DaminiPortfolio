import { ShoppingCart, Bot, Globe, Smartphone, Search, Cpu, Code2, Palette, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce Websites',
      description: 'Full-featured online stores with payment integration, inventory management, and seamless checkout.',
      features: ['Shopping Cart', 'Payment Gateway', 'Admin Dashboard', 'Product Management'],
    },
    {
      icon: Bot,
      title: 'AI Chatbot Integration',
      description: 'Intelligent conversational AI that understands context, learns, and provides 24/7 support.',
      features: ['Natural Language', 'Context Awareness', 'Multi-platform', 'Custom Training'],
    },
    {
      icon: Cpu,
      title: 'Virtual Assistant Solutions',
      description: 'JARVIS-style AI assistants that automate tasks, manage workflows, and provide intelligent automation.',
      features: ['Voice Commands', 'Task Automation', 'Smart Integration', 'Custom Workflows'],
    },
    {
      icon: Globe,
      title: 'Custom Web Applications',
      description: 'Tailored web solutions built with React, TypeScript, and modern frameworks to fit your needs.',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Scalable Architecture'],
    },
    {
      icon: Search,
      title: 'Search Engine Development',
      description: 'Advanced search systems with powerful indexing, ranking algorithms, and lightning-fast results.',
      features: ['Smart Indexing', 'Fast Queries', 'Relevant Results', 'Analytics Dashboard'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using React Native for iOS and Android.',
      features: ['Cross-Platform', 'Native Feel', 'Offline Support', 'Push Notifications'],
    },
    {
      icon: Code2,
      title: 'API Development & Integration',
      description: 'RESTful APIs, third-party integrations, and backend services that power your applications.',
      features: ['REST APIs', 'Database Design', 'Authentication', 'Documentation'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design Services',
      description: 'Beautiful, intuitive interfaces that engage users and provide exceptional digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp AI Bots',
      description: 'Custom WhatsApp AI assistants — like DANI — that handle customer support, content generation, and automation.',
      features: ['AI Chat', 'Image Generation', 'Voice Messages', 'Custom Commands'],
    },
  ];

  return (
    <section id="services" className="relative py-24">
      <div className="section-divider" />
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-16">
          <p className="text-white/40 uppercase tracking-widest text-xs mb-3">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            My <span className="gradient-text-silver">Services</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-4" />
          <p className="text-white/50 max-w-2xl mx-auto">
            Full-stack development and AI solutions — from concept to deployed product
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-xl p-6 glass-card-hover animate-slide-up"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-1.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-xs text-white/40">
                    <span className="w-1 h-1 bg-white/40 rounded-full mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-white/10">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Ready to Build Something?</h3>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            3+ years delivering full-stack solutions. Let's turn your idea into a product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {[
                { label: '3+ Years Experience', },
                { label: 'Cutting-Edge Tech' },
                { label: 'AI Specialist' },
              ].map(p => (
                <span key={p.label} className="text-xs text-white/40 border border-white/10 px-3 py-1.5 rounded-full">{p.label}</span>
              ))}
            </div>
          </div>
          <Button
            size="lg"
            className="mt-8 bg-white text-black hover:bg-white/90 font-bold box-glow text-base px-8 py-6"
            onClick={() => window.open('https://wa.me/2349120185747', '_blank')}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
