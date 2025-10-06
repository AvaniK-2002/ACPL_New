import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ajinkya-creatiion-private-limited/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/', label: 'GitHub' },
   { icon: FaWhatsapp, href: 'https://wa.me/919960041473', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-blue-100 text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          
          <div className="space-y-6">
            <h1 className="text-2xl font-bold tracking-wide">
              <span className="text-purple-700">Ajinkya</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Creatiion
              </span>
            </h1>
            <p className="text-base max-w-md">
              AI-powered solutions, scalable SaaS platforms, and intelligent digital
              tools designed to accelerate your growth and drive innovation.
            </p>

            
            <div className="space-y-4 text-base">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-purple-600 mt-1" />
                <div className="flex flex-col">
                  <span>contact@ajinkyacreation.com</span>
                  <span>ajinkya.d@ajinkyacreation.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-purple-600 mt-1" />
                <span>+91 9960041473</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-purple-600 mt-1" />
                <p>
                  Bremen Chowk, Phase 1, Siddarth Nagar Society, Aundh, <br />
                  Pune, Maharashtra 411067
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-purple-600 mt-1" />
                <span>
                  Monday To Friday: 10:00 AM – 7:00 PM <br />
                  Saturday: 10:00 AM – 4:00 PM <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="mb-4 text-sm">
                Get the latest insights on learning technologies and industry trends.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <div className="flex gap-3 mt-1">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
            <div className="mt-10 flex justify-end">
  <p className="text-2xs text-gray-600 font-semibold">
    © 2025 Ajinkya Creatiion. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;