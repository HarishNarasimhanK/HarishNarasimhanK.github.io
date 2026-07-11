
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Open Source', href: '#open-source' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/HarishNarasimhanK",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/harish-narasimhan-k-17ba45254/",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://x.com/HarishK86889090",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:harishnarasimhan0135@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-elegant-charcoal text-elegant-white py-16">
      <div className="content-width section-padding">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display font-bold text-2xl mb-4">
              Harish Narasimhan K
            </div>
            <p className="text-elegant-gray-300 leading-relaxed mb-6 max-w-md">
              Focusing on backend systems, machine learning pipelines, and building from first principles.
              Dedicated to performance optimization and robust engineering.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-elegant-gray-800 rounded-lg hover:bg-elegant-gray-700 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-elegant-gray-300 hover:text-elegant-white transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-3 text-elegant-gray-300">
              <div>
                <div className="font-medium text-elegant-white">Email</div>
                <a 
                  href="mailto:harishnarasimhan0135@gmail.com"
                  className="hover:text-elegant-white transition-colors duration-300"
                >
                  harishnarasimhan0135@gmail.com
                </a>
              </div>
              <div>
                <div className="font-medium text-elegant-white">Phone</div>
                <a 
                  href="tel:+918838408213"
                  className="hover:text-elegant-white transition-colors duration-300"
                >
                  +91 8838408213
                </a>
              </div>
              <div>
                <div className="font-medium text-elegant-white">Location</div>
                <div>Madurai, Tamil Nadu</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-elegant-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-elegant-gray-300 text-sm">
              © {currentYear} Harish Narasimhan K. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
