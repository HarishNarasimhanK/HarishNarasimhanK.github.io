
import React from 'react';
import { Trophy, Github, FileText, ExternalLink } from 'lucide-react';
import researchPresentation from '@/assets/Research_Presentation.pptx.asset.json';

const Testimonials = () => {
  const achievements = [
    {
      title: "Top 12 Finalist",
      description: "Tredence AI Hackathon (24 hours)",
      year: "2024"
    },
    {
      title: "9+ SGPA",
      description: "Consistent Academic Excellence",
      year: "All 8 Semesters"
    },
    {
      title: "4 PRs Merged",
      description: "OpenSearch Open Source Contributions",
      year: "2025 – 2026"
    }
  ];

  return (
    <section id="achievements" className="py-32 bg-elegant-white">
      <div className="content-width section-padding">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-display-sm text-elegant-charcoal mb-6">
            Key Achievements & Recognition
          </h2>
          <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto">
            Milestones from academics, competitions, and open source contributions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid sm:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 card-elegant animate-slide-in">
                <Trophy className="w-8 h-8 text-elegant-charcoal mx-auto mb-3" />
                <div className="font-bold text-lg text-elegant-charcoal mb-2">
                  {achievement.title}
                </div>
                <div className="text-sm text-elegant-gray-600 mb-2">
                  {achievement.description}
                </div>
                <div className="text-xs text-elegant-gray-700 font-medium">
                  {achievement.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VidhiVani Hackathon Highlight */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-elegant animate-fade-in">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-elegant-gray-600 mb-2">
                  Featured Hackathon Project
                </div>
                <h3 className="font-display font-semibold text-2xl text-elegant-charcoal">
                  VidhiVani — Legal AI Assistant
                </h3>
                <p className="text-sm text-elegant-gray-700 mt-1">
                  Top 12 Finalist · Tredence 24-hour AI Hackathon
                </p>
              </div>
              <a
                href="https://github.com/HarishNarasimhanK/VidhiVani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-elegant-gray-600 hover:text-elegant-charcoal transition-colors duration-300"
                aria-label="VidhiVani GitHub"
              >
                <Github size={20} />
              </a>
            </div>

            <div className="space-y-5 text-sm leading-relaxed">
              <div>
                <h4 className="font-semibold text-elegant-charcoal mb-2">Problem</h4>
                <p className="text-elegant-gray-600">
                  Everyday users find it intimidating and expensive to consult lawyers for basic
                  doubts around cases, crimes, laws, and formal procedures. Lawyers, in turn, often
                  need quick references to acts from the Indian Constitution and prior judgements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-elegant-charcoal mb-2">Solution</h4>
                <p className="text-elegant-gray-600">
                  Built a production-grade, people-centric legal assistant that helps citizens with
                  plain-language legal guidance and helps lawyers with fast, reliable reference tools.
                  A RAG pipeline retrieves similar prior cases and judgements so professionals can
                  quickly ground their work. A dedicated legal document summarizer uses a hybrid of
                  <em> refine </em>and<em> map-reduce </em> strategies to scale to long documents
                  and produce jargon-free summaries — not a generic summarizer.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-elegant-charcoal mb-2">Impact</h4>
                <p className="text-elegant-gray-600">
                  Delivered as a Flutter mobile app with FastAPI backend, translation capabilities,
                  and a user-friendly interface — making legal knowledge accessible to both citizens
                  and legal professionals.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-elegant-charcoal mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Dart", "FastAPI", "Python", "Streamlit", "Pinecone (Vector DB)", "RAG"].map((tech, i) => (
                    <span key={i} className="text-xs bg-elegant-gray-100 text-elegant-gray-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Contribution */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elegant">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-elegant-gray-600 mb-2">
                  Research Publication
                </div>
                <h3 className="font-display font-semibold text-2xl text-elegant-charcoal">
                  Block-Based Separable Reversible Data Hiding using Homomorphic Encryption
                </h3>
                <p className="text-sm text-elegant-gray-700 mt-1">
                  IEEE Conference Publication · Cryptography &amp; Secure Data Hiding
                </p>
              </div>
              <FileText className="w-6 h-6 text-elegant-charcoal flex-shrink-0" />
            </div>

            <div className="space-y-5 text-sm leading-relaxed">
              <div>
                <h4 className="font-semibold text-elegant-charcoal mb-2">Abstract</h4>
                <p className="text-elegant-gray-600">
                  Information security is the process of guarding information from improper access.
                  Conventional approaches — cryptography and steganography — secure data during
                  storage and transmission but lack combined encryption and data hiding. This work
                  overcomes that limitation by combining block-wise encryption with data embedding:
                  the image is partitioned into non-overlapping blocks, pixel values in each block
                  are encrypted, and during embedding the pixel of maximum intensity in every block
                  is identified while the differences between this maximum and the remaining three
                  pixels are modulated with the data bits to be inserted. The approach delivers
                  simultaneous encryption and data hiding with strong error monitoring, well suited
                  for data-intensive applications demanding high integrity and confidentiality.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-elegant-charcoal mb-2">Our Contribution</h4>
                <p className="text-elegant-gray-600">
                  Designed and implemented a reversible data-hiding framework using additive
                  homomorphic encryption, achieving a <strong>75% embedding capacity improvement</strong>
                  {" "}and lossless image recovery while preserving data confidentiality.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://ieeexplore.ieee.org/document/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-elegant-charcoal hover:text-elegant-gray-600 transition-colors duration-300"
                >
                  Read on IEEE Xplore
                  <ExternalLink size={14} />
                </a>
                <a
                  href={researchPresentation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-elegant-charcoal hover:text-elegant-gray-600 transition-colors duration-300"
                >
                  Download Presentation
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
