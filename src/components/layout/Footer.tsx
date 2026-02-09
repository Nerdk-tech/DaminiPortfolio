import { Code2, Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-purple-500/20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-6 h-6 text-purple-500" />
              <span className="text-lg font-bold gradient-text">Damini Codesphere</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building the future with AI and cutting-edge web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://daminicodes.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  Organization Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/Nerdk-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                Nerdk-tech
              </a>
              <a
                href="https://github.com/Dev-Damini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                Dev-Damini
              </a>
              <a
                href="mailto:damibotzinc@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                damibotzinc@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Damini Codesphere. Founded in 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
