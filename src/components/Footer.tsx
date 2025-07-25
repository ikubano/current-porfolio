import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    Github,
    Linkedin,
    Twitter,
    Mail
  };

  return (
    <footer className="bg-hero-bg text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ian Mwanzi</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full Stack Developer passionate about creating beautiful, functional web applications
              that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return IconComponent ? (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <IconComponent size={20} />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/projects" className="block text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Nairobi, Kenya</p>
              <p>ianmwanzi0@gmail.com</p>
              <p>+254 757 767 215</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ian Mwanzi. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;