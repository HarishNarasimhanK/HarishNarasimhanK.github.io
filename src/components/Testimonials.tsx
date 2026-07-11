import React from 'react';
import { Trophy, Github } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Testimonials = () => {
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
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Top 12 Finalist with Modal Trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="text-center p-6 card-elegant cursor-pointer hover:border-elegant-charcoal hover:scale-[1.02] transition-all duration-300 animate-slide-in group relative flex flex-col justify-between min-h-[220px]">
                  <div>
                    <Trophy className="w-8 h-8 text-elegant-charcoal mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="font-bold text-lg text-elegant-charcoal mb-2">
                      Top 12 Finalist
                    </div>
                    <div className="text-sm text-elegant-gray-600 mb-2">
                      Tredence AI Hackathon (24 hours)
                    </div>
                    <div className="text-xs text-elegant-gray-700 font-medium">
                      2024
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-semibold text-elegant-charcoal underline underline-offset-4 opacity-75 group-hover:opacity-100 transition-opacity">
                      View Project Details
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-elegant-white border border-elegant-gray-200 shadow-xl rounded-xl p-8 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="text-xs uppercase tracking-wider text-elegant-gray-600 mb-1">
                    Featured Hackathon Project
                  </div>
                  <DialogTitle className="font-display font-bold text-3xl text-elegant-charcoal mb-2 flex items-center justify-between">
                    <span>VidhiVani — Legal AI Assistant</span>
                    <a
                      href="https://github.com/HarishNarasimhanK/VidhiVani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-elegant-gray-600 hover:text-elegant-charcoal transition-colors duration-300 mr-8"
                      aria-label="VidhiVani GitHub"
                    >
                      <Github size={22} />
                    </a>
                  </DialogTitle>
                  <p className="text-sm text-elegant-gray-700 mt-1 font-medium pb-4 border-b border-elegant-gray-100">
                    Top 12 Finalist · Tredence 24-hour AI Hackathon
                  </p>
                </DialogHeader>

                <div className="space-y-6 mt-4 text-sm leading-relaxed text-left">
                  <div>
                    <h4 className="font-semibold text-elegant-charcoal text-base mb-1.5">Problem</h4>
                    <p className="text-elegant-gray-600">
                      Everyday users find it intimidating and expensive to consult lawyers for basic
                      doubts around cases, crimes, laws, and formal procedures. Lawyers, in turn, often
                      need quick references to acts from the Indian Constitution and prior judgements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elegant-charcoal text-base mb-1.5">Solution</h4>
                    <p className="text-elegant-gray-600">
                      Built a production-grade, people-centric legal assistant that helps citizens with
                      plain-language guidance and helps lawyers with fast, reliable reference tools.
                      A RAG pipeline retrieves similar prior cases and judgements so professionals can
                      quickly ground their work. A dedicated legal document summarizer uses a hybrid of
                      <em> refine </em>and<em> map-reduce </em> strategies to scale to long documents
                      and produce jargon-free summaries — not a generic summarizer.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elegant-charcoal text-base mb-1.5">Impact</h4>
                    <p className="text-elegant-gray-600">
                      Delivered as a Flutter mobile app with FastAPI backend, translation capabilities,
                      and a user-friendly interface — making legal knowledge accessible to both citizens
                      and legal professionals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elegant-charcoal text-base mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Dart", "FastAPI", "Python", "Streamlit", "Pinecone (Vector DB)", "RAG"].map((tech, i) => (
                        <span key={i} className="text-xs bg-elegant-gray-100 text-elegant-gray-700 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* 9+ SGPA Box */}
            <div className="text-center p-6 card-elegant animate-slide-in flex flex-col justify-center min-h-[220px]">
              <Trophy className="w-8 h-8 text-elegant-charcoal mx-auto mb-3" />
              <div className="font-bold text-lg text-elegant-charcoal mb-2">
                9+ SGPA
              </div>
              <div className="text-sm text-elegant-gray-600 mb-2">
                Consistent Academic Excellence
              </div>
              <div className="text-xs text-elegant-gray-700 font-medium">
                All 8 Semesters
              </div>
            </div>

            {/* 4 PRs Merged Box */}
            <div className="text-center p-6 card-elegant animate-slide-in flex flex-col justify-center min-h-[220px]">
              <Trophy className="w-8 h-8 text-elegant-charcoal mx-auto mb-3" />
              <div className="font-bold text-lg text-elegant-charcoal mb-2">
                4 PRs Merged
              </div>
              <div className="text-sm text-elegant-gray-600 mb-2">
                OpenSearch Open Source Contributions
              </div>
              <div className="text-xs text-elegant-gray-700 font-medium">
                2025 – 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
