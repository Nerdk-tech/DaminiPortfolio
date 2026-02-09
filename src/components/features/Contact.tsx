import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+234 912 018 5747',
      href: 'https://wa.me/2349120185747',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Alt',
      value: '+234 805 467 1458',
      href: 'https://wa.me/2348054671458',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'damibotzinc@gmail.com',
      href: 'mailto:damibotzinc@gmail.com',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 912 018 5747',
      href: 'tel:+2349120185747',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Organization',
      value: 'Damini Codesphere',
      href: 'https://daminicodes.vercel.app',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${info.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 box-glow group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
                <p className="text-gray-400 group-hover:text-purple-300 transition-colors">{info.value}</p>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need AI integration, full-stack development, or innovative solutions, I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 box-glow text-lg px-8 py-6"
                onClick={() => window.open('https://wa.me/2349120185747', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Me
                <Send className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 text-lg px-8 py-6"
                onClick={() => window.open('https://daminicodes.vercel.app', '_blank')}
              >
                Visit Organization
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: 'Response Time', value: '< 24h' },
              { label: 'Projects Done', value: '15+' },
              { label: 'Happy Clients', value: '100%' },
              { label: 'Founded', value: '2024' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-white/5 border border-purple-500/20 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
