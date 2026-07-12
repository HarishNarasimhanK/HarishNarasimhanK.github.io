import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Download } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
              Harish Narasimhan K — AI/ML & Backend Developer
            </h1>
            <p className="text-xl lg:text-2xl text-elegant-gray-700 font-medium max-w-4xl mx-auto leading-relaxed px-4">
              Building intelligent systems with NLP, generative AI, and data science
            </p>
            <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Motivated undergraduate with expertise in machine learning, NLP, and generative AI, 
              seeking to leverage analytical skills and advanced models for data-driven decision-making 
              and innovative solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-6 pt-8 px-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <button 
                onClick={scrollToAbout}
                className="btn-primary group flex items-center justify-center"
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </button>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="btn-secondary flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] h-[90vh] bg-elegant-white border border-elegant-gray-200 shadow-xl rounded-xl p-6 flex flex-col">
                  <DialogHeader className="flex flex-row items-center justify-between border-b border-elegant-gray-100 pb-4 mb-4 pr-10">
                    <div>
                      <DialogTitle className="font-display font-bold text-2xl text-elegant-charcoal">
                        Resume — Harish Narasimhan K
                      </DialogTitle>
                    </div>
                    <a
                      href="/Harish_Resume.pdf"
                      download="Harish_Resume.pdf"
                      className="inline-flex items-center gap-2 bg-elegant-charcoal text-elegant-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-elegant-gray-800 hover:shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </DialogHeader>
                  <div className="flex-1 w-full overflow-hidden rounded-lg border border-elegant-gray-200 bg-elegant-light">
                    <iframe
                      src="/Harish_Resume.pdf#view=Fit"
                      className="w-full h-full"
                      title="Harish Narasimhan K Resume"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-1.5 text-elegant-gray-600 hover:text-elegant-charcoal font-medium text-sm transition-all duration-300 group hover:translate-y-0.5 pt-2"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>Get In Touch</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
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
