
import React from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-elegant-light">
      <div className="content-width section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Headshot */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                alt="Harish Narasimhan K - Professional Headshot"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h2 className="font-display font-bold text-display-sm text-elegant-charcoal mb-6">
                About Me
              </h2>
              <div className="space-y-6 text-elegant-gray-700 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate Computer Science Engineering student at SASTRA Deemed To Be University 
                  with a stellar CGPA of 9.37, specializing in the cutting-edge fields of artificial intelligence 
                  and machine learning.
                </p>
                <p>
                  My journey in technology is driven by an insatiable curiosity for interdisciplinary AI applications, 
                  blockchain development, and natural language processing. I've successfully developed multiple 
                  innovative projects ranging from conversational PDF query systems to advanced sentiment analysis tools.
                </p>
                <p>
                  Beyond academics, I lead the Competitive Programming Cluster at my university and have solved 
                  over 500 problems across various coding platforms. My research work in block-based separable 
                  reversible data hiding using homomorphic encryption demonstrates my commitment to advancing 
                  the field of secure AI applications.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 card-elegant">
                <GraduationCap className="w-8 h-8 text-elegant-charcoal mx-auto mb-3" />
                <div className="font-bold text-2xl text-elegant-charcoal">9.37</div>
                <div className="text-sm text-elegant-gray-600">CGPA</div>
              </div>
              <div className="text-center p-6 card-elegant">
                <Award className="w-8 h-8 text-elegant-charcoal mx-auto mb-3" />
                <div className="font-bold text-2xl text-elegant-charcoal">500+</div>
                <div className="text-sm text-elegant-gray-600">Problems Solved</div>
              </div>
              <div className="text-center p-6 card-elegant">
                <Target className="w-8 h-8 text-elegant-charcoal mx-auto mb-3" />
                <div className="font-bold text-2xl text-elegant-charcoal">Top 12</div>
                <div className="text-sm text-elegant-gray-600">AI Hackathon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
