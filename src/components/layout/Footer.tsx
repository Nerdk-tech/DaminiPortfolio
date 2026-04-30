import { Code2, Github, Mail, ExternalLink, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-black text-white">Damini Codesphere</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Full Stack Developer & AI Engineer. Building intelligent solutions from Nigeria to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white/80 mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Me', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Projects', href: '#projects' },
                { label: 'Stories', href: '#posts' },
                { label: 'Organization Website', href: 'https://daminicodes.zone.id', external: true },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold text-white/80 mb-4 uppercase tracking-wider">Connect</h3>
            <div className="flex flex-col gap-2.5">
              <a href="https://github.com/Nerdk-tech" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2">
                <Github className="w-4 h-4" /> Nerdk-tech
              </a>
              <a href="https://github.com/Dev-Damini" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2">
                <Github className="w-4 h-4" /> Dev-Damini
              </a>
              <a href="mailto:admin@daminicodes.zone.id" className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2">
                <Mail className="w-4 h-4" /> admin@daminicodes.zone.id
              </a>
              <a href="https://daminicodes.zone.id" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2">
                <Globe className="w-4 h-4" /> daminicodes.zone.id
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <div className="text-center">
          <p className="text-xs text-white/25">
            © {currentYear} Damini Codesphere · Founded 2024 · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
