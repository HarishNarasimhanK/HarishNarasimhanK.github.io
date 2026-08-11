
import React, { useState } from 'react';
import { Github, MessageSquare, FileText, Brain, Globe, Video, Terminal, Plane } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "DemystifyAI",
      icon: Video,
      problem: "Large frontier LLMs summarize educational content well but at high cost, and general-purpose summarizers strip away the technical depth freshers actually need to learn a topic from scratch.",
      solution: "Built a multi-agent demystifier (not a plain summarizer) that orchestrates small, specialized models to produce first-principles, jargon-free explanations of educational YouTube videos — preserving technical detail while dramatically cutting inference cost.",
      results: "LangGraph pipeline (transcript extraction, concept mapping, research, drafting, verification) delivers frontier-model-quality explanations at a fraction of the cost, tailored for freshers new to tech.",
      technologies: ["LangGraph", "Multi-Agent Systems", "Streamlit", "Python"],
      category: "Generative AI",
      link: "https://github.com/HarishNarasimhanK/DemystifyAI"
    },
    {
      title: "DevForge",
      icon: Terminal,
      problem: "Provisioning a local development environment is repetitive and fragile — manual installs, configuration drift across machines, and non-idempotent scripts cause hours of setup pain.",
      solution: "Built an automated, friction-free workstation bootstrap CLI targeting Windows WSL2 (Ubuntu) and macOS (Homebrew), distributed natively via APT and a Homebrew tap for one-command install and upgrades.",
      results: "Single `dforge init` command bootstraps a full dev environment; includes doctor diagnostics, ShellCheck + bats tests, and CI/CD release automation for reproducible setups.",
      technologies: ["Bash", "APT", "Homebrew", "WSL2", "CI/CD"],
      category: "Developer Tooling",
      link: "https://github.com/HarishNarasimhanK/dev-forge"
    },
    {
      title: "Conversational PDF Query System",
      icon: MessageSquare,
      problem: "Users struggled to efficiently extract information from large PDF documents, requiring manual scanning and reading to find specific content.",
      solution: "Built a Retrieval-Augmented Generation (RAG) system for conversational PDF querying, integrating semantic search, LLM-based reasoning, and voice interactions.",
      results: "Reduced query-response time by over 70% while supporting both text and voice input for natural, accessible interaction.",
      technologies: ["Python", "RAG", "NLP", "Voice Recognition"],
      category: "AI Application",
      link: "https://github.com/HarishNarasimhanK/PDF-QnA-ChatBot"
    },
    {
      title: "Anywhere Voyager — AI Trip Planner",
      icon: Plane,
      problem: "Trip planning forces users to jump between a dozen tabs — hotel booking sites, restaurant reviews, tourist attractions, weather, budgets, and currency conversion — making the whole process slow and painful.",
      solution: "A one-stop AI-powered travel companion that answers every planning query in natural language. Under the hood it orchestrates a suite of backend tools — weather lookup, restaurant and hotel search, tourist attraction discovery, budget estimation, and currency conversion for overseas travel — through a LangGraph agent workflow served over FastAPI.",
      results: "Delivers personalized end-to-end itineraries on demand, replacing hours of manual research across scattered platforms with a single conversational interface.",
      technologies: ["LangGraph", "FastAPI", "Multi-Agent Systems", "tool calling", "Python"],
      category: "Generative AI",
      link: "https://github.com/HarishNarasimhanK/AI-Trip-Planner"
    },
    {
      title: "Document Summarization Web App",
      icon: Globe,
      problem: "Information overload from lengthy web articles and YouTube videos made it difficult for users to quickly grasp key insights and main points.",
      solution: "Built a Streamlit application leveraging Groq API and LangChain to automatically generate concise, context-aware summaries from website URLs and YouTube video links.",
      results: "Delivered a clean, user-friendly interface that enables rapid content consumption, saving users significant time while maintaining content comprehension.",
      technologies: ["Streamlit", "Groq API", "LangChain", "Web Scraping"],
      category: "Web Application",
      link: "https://github.com/HarishNarasimhanK/Website-YouTube-URL-Summarizer"
    },
    {
      title: "Sentiment Analysis on Movie Reviews",
      icon: Brain,
      problem: "Movie review platforms lacked automated sentiment classification, making it challenging to quickly understand overall audience opinion on films.",
      solution: "Developed a Streamlit-based sentiment analysis tool that classifies review text as positive or negative using a SimpleRNN trained on the IMDB dataset.",
      results: "Achieved strong classification accuracy, providing instant feedback on movie reception.",
      technologies: ["Streamlit", "SimpleRNN", "NLP", "Python"],
      category: "Deep Learning",
      link: "https://github.com/HarishNarasimhanK/IMDB-MovieReview-SentimentAnalysis-using-SimpleRNN"
    },
    {
      title: "Transformer from Scratch",
      icon: Brain,
      problem: "Understanding the inner workings of modern LLMs requires moving beyond pre-built API wrappers to implement the core mathematical components from first principles.",
      solution: "Implemented a GPT-3 style Decoder-Only Transformer architecture from scratch in PyTorch, developing custom multi-head causal attention, positional encodings, and feed-forward blocks.",
      results: "Successfully trained the custom architecture on a language modeling corpus, validating causal masking, training convergence, and sequence generation metrics.",
      technologies: ["Python", "PyTorch", "Transformers", "Deep Learning", "NLP"],
      category: "Deep Learning",
      link: "https://github.com/HarishNarasimhanK/Transformer-from-scratch"
    },
    {
      title: "Block-Based Reversible Data Hiding Research",
      icon: Brain,
      problem: "Traditional data hiding techniques in encrypted images lacked robust security measures and efficient data concealment methods for sensitive information.",
      solution: "Designed a reversible data-hiding framework using additive homomorphic encryption for secure embedding and extraction in encrypted images.",
      results: "Achieved a 75% embedding capacity improvement with lossless image recovery while preserving data confidentiality.",
      technologies: ["Homomorphic Encryption", "Image Processing", "Cryptography", "Research"],
      category: "Research",
      link: "https://github.com/HarishNarasimhanK/Block-Based-Separable-Reversible-Data-Hiding-Using-Homomorphic-Encryption"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

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
          {visibleProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="card-elegant group animate-fade-in">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-elegant-gray-100 rounded-lg group-hover:bg-elegant-charcoal group-hover:text-elegant-white transition-all duration-300">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-xl text-elegant-charcoal mb-2">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-elegant-gray-600 hover:text-elegant-charcoal transition-colors duration-300"
                          aria-label="View Project"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                    <span className="text-sm text-elegant-gray-700 bg-elegant-gray-100 px-3 py-1 rounded-full">
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

        {projects.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
              aria-expanded={showAll}
            >
              {showAll ? 'Show Less' : `Show All (${projects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
