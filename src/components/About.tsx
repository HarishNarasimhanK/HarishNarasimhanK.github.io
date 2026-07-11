
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
                src="/lovable-uploads/1dc3e4af-f4b5-4876-8078-1b5e87e4e7b8.png"
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
                  I graduated in Computer Science Engineering from SASTRA Deemed To Be University
                  with a CGPA of 9.23, specializing in backend engineering, problem solving,
                  AI/ML, and distributed systems.
                </p>
                <p>
                  I enjoy building end-to-end projects that solve real problems users actually face.
                  I have shipped generative AI systems with multi-agent architectures for
                  practical use cases, and I equally enjoy building production-grade backend systems.
                  Most of my time goes into machine learning and applied AI, and I keep pushing to
                  get better in those areas.
                </p>
                <p>
                  I spent a lot of time on competitive programming and DSA, and I genuinely enjoyed
                  cracking puzzling problems. I also prefer learning any new concept from first
                  principles rather than settling for surface-level understanding.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 card-elegant">
                <GraduationCap className="w-8 h-8 text-elegant-charcoal mx-auto mb-3" />
                <div className="font-bold text-2xl text-elegant-charcoal">9.23</div>
                <div className="text-sm text-elegant-gray-600">CGPA</div>
              </div>
              <div className="text-center p-6 card-elegant">
                <Award className="w-8 h-8 text-elegant-charcoal mx-auto mb-3" />
                <div className="font-bold text-2xl text-elegant-charcoal">1000+</div>
                <div className="text-sm text-elegant-gray-600">Problems Solved</div>
              </div>
              <div className="text-center p-6 card-elegant">
                <Target className="w-8 h-8 text-elegant-charcoal mx-auto mb-3" />
                <div className="font-bold text-2xl text-elegant-charcoal">4 PRs</div>
                <div className="text-sm text-elegant-gray-600">Merged in OpenSearch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
