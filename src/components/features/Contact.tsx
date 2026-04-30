import { Mail, Phone, MapPin, Send, MessageCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+234 912 018 5747',
      href: 'https://wa.me/2349120185747',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Alt',
      value: '+234 805 467 1458',
      href: 'https://wa.me/2348054671458',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'admin@daminicodes.zone.id',
      href: 'mailto:admin@daminicodes.zone.id',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 912 018 5747',
      href: 'tel:+2349120185747',
    },
    {
      icon: Globe,
      label: 'Organization',
      value: 'daminicodes.zone.id',
      href: 'https://daminicodes.zone.id',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nigeria 🌍',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="section-divider" />
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-16">
          <p className="text-white/40 uppercase tracking-widest text-xs mb-3">Let's Talk</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Get In <span className="gradient-text-silver">Touch</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto">
            Open to new projects, collaborations, and opportunities. Let's build something great.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group glass-card rounded-xl p-4 text-center glass-card-hover animate-slide-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/12 transition-all">
                  <info.icon className="w-5 h-5 text-white/70" />
                </div>
                <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">{info.label}</p>
                <p className="text-xs text-white/70 font-medium break-all leading-tight">{info.value}</p>
              </a>
            ))}
          </div>

          {/* CTA Block */}
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center border border-white/10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Ready to Start a Project?</h3>
            <p className="text-white/50 text-base mb-8 max-w-xl mx-auto">
              Whether you need AI integration, full-stack development, or something brand new — I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-bold text-base px-8 py-6 box-glow"
                onClick={() => window.open('https://wa.me/2349120185747', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Me
                <Send className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-white/25 text-white/70 hover:bg-white/5 hover:border-white/50 hover:text-white bg-transparent text-base px-8 py-6"
                onClick={() => window.open('https://daminicodes.zone.id', '_blank')}
              >
                Visit Organization
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {[
              { label: 'Response Time', value: '< 24h' },
              { label: 'Projects Done', value: '15+' },
              { label: 'Satisfaction', value: '100%' },
              { label: 'Founded', value: '2024' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
