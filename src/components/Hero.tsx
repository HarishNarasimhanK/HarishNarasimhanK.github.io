
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="content-width section-padding">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-elegant-charcoal break-words px-4">
              Harish Narasimhan K
            </h1>
            <p className="text-xl lg:text-2xl text-elegant-gray-700 font-medium max-w-4xl mx-auto leading-relaxed px-4">
              AI & Machine Learning Engineer
            </p>
            <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Motivated undergraduate with expertise in machine learning, NLP, and generative AI, 
              seeking to leverage analytical skills and advanced models for data-driven decision-making 
              and innovative solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4">
            <button 
              onClick={scrollToAbout}
              className="btn-primary group flex items-center"
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <a 
              href="#contact" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8 px-4">
            <a 
              href="https://github.com/HarishNarasimhanK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-elegant-gray-600 hover:text-elegant-charcoal hover:bg-elegant-gray-100 rounded-full transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harish-narasimhan-k-17ba45254/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-elegant-gray-600 hover:text-elegant-charcoal hover:bg-elegant-gray-100 rounded-full transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:harishnarasimhan0135@gmail.com"
              className="p-3 text-elegant-gray-600 hover:text-elegant-charcoal hover:bg-elegant-gray-100 rounded-full transition-all duration-300 hover:-translate-y-1"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
