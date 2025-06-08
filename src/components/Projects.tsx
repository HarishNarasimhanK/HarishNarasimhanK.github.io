
import React from 'react';
import { ExternalLink, Github, MessageSquare, FileText, Brain, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Conversational PDF Query System",
      icon: MessageSquare,
      problem: "Users struggled to efficiently extract information from large PDF documents, requiring manual scanning and reading to find specific content.",
      solution: "Developed an intelligent application that enables users to upload PDFs and query their content conversationally, supporting both text and voice input for seamless natural language interaction.",
      results: "Created an intuitive interface that dramatically reduces document analysis time and improves accessibility for users with different interaction preferences.",
      technologies: ["Python", "NLP", "Voice Recognition", "PDF Processing"],
      category: "AI Application"
    },
    {
      title: "Document Summarization Web App",
      icon: Globe,
      problem: "Information overload from lengthy web articles and YouTube videos made it difficult for users to quickly grasp key insights and main points.",
      solution: "Built a Streamlit application leveraging Groq API and LangChain to automatically generate concise, context-aware summaries from website URLs and YouTube video links.",
      results: "Delivered a clean, user-friendly interface that enables rapid content consumption, saving users significant time while maintaining content comprehension.",
      technologies: ["Streamlit", "Groq API", "LangChain", "Web Scraping"],
      category: "Web Application"
    },
    {
      title: "Sentiment Analysis on Movie Reviews",
      icon: Brain,
      problem: "Movie review platforms lacked automated sentiment classification, making it challenging to quickly understand overall audience opinion on films.",
      solution: "Developed a sophisticated Streamlit-based sentiment analysis tool that classifies review text as positive or negative using advanced machine learning models.",
      results: "Achieved high accuracy in sentiment classification, providing instant feedback on movie reception and enabling data-driven content recommendations.",
      technologies: ["Streamlit", "Machine Learning", "Text Classification", "Python"],
      category: "Data Science"
    },
    {
      title: "Diabetes Prediction System",
      icon: FileText,
      problem: "Early diabetes detection required expensive and time-consuming medical tests, delaying crucial healthcare interventions for at-risk patients.",
      solution: "Developed a predictive model using SVM, AdaBoost, and Random Forest algorithms to identify diabetes risk factors and enable early intervention strategies.",
      results: "SVM achieved the highest accuracy among tested models, providing healthcare professionals with a reliable tool for preliminary diabetes screening.",
      technologies: ["SVM", "AdaBoost", "Random Forest", "Healthcare Analytics"],
      category: "Machine Learning"
    },
    {
      title: "Block-Based Reversible Data Hiding Research",
      icon: Brain,
      problem: "Traditional data hiding techniques in encrypted images lacked robust security measures and efficient data concealment methods for sensitive information.",
      solution: "Developed a novel technique using homomorphic encryption for secure data embedding and extraction in encrypted images, ensuring privacy preservation.",
      results: "Successfully demonstrated enhanced security for data concealment while maintaining image quality, contributing to advances in secure communication protocols.",
      technologies: ["Homomorphic Encryption", "Image Processing", "Cryptography", "Research"],
      category: "Research"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-elegant-white">
      <div className="content-width section-padding">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-display-sm text-elegant-charcoal mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions in AI, machine learning, and data science, 
            demonstrating practical applications and measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="card-elegant group animate-fade-in">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-elegant-gray-100 rounded-lg group-hover:bg-elegant-charcoal group-hover:text-elegant-white transition-all duration-300">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-elegant-charcoal mb-2">
                      {project.title}
                    </h3>
                    <span className="text-sm text-elegant-gray-500 bg-elegant-gray-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-elegant-charcoal mb-2">Problem</h4>
                    <p className="text-elegant-gray-600 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-elegant-charcoal mb-2">Solution</h4>
                    <p className="text-elegant-gray-600 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-elegant-charcoal mb-2">Results</h4>
                    <p className="text-elegant-gray-600 text-sm leading-relaxed">
                      {project.results}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-elegant-charcoal mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-elegant-gray-100 text-elegant-gray-700 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
