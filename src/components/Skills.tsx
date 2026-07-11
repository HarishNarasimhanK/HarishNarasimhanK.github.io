
import React from 'react';
import { Code, Brain, Database, Cloud, Cpu, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tooling",
      icon: Code,
      skills: ["Python", "Java", "Rust", "SQL", "Git", "GitHub"],
      description: "Core languages and everyday engineering tooling"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "Machine Learning",
        "Supervised Learning",
        "Deep Learning",
        "Deep Neural Networks",
        "Natural Language Processing (NLP)",
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Multi-Agent Systems",
        "Semantic Search",
        "Information Retrieval",
        "LangGraph",
        "LangChain",
        "Hugging Face",
        "PyTorch",
        "Scikit-learn",
        "Streamlit"
      ],
      description: "Applied AI, agentic systems, and production ML workflows"
    },
    {
      title: "Backend & Systems",
      icon: Database,
      skills: [
        "FastAPI",
        "REST APIs",
        "OpenSearch",
        "DataFusion",
        "Distributed Systems",
        "Concurrency",
        "Caching",
        "JVM Internals",
        "Memory Management",
        "Performance Engineering",
        "Performance Profiling",
        "Benchmarking",
        "Telemetry"
      ],
      description: "Production-grade backend and high-performance systems"
    },
    {
      title: "Cloud & Data Platforms",
      icon: Cloud,
      skills: [
        "AWS CDK",
        "Amazon EC2",
        "Amazon S3",
        "Amazon CloudWatch",
        "GCP Vertex AI",
        "Vertex AI",
        "BigQuery",
        "Google ADK",
        "Databricks",
        "Cloud Computing"
      ],
      description: "Cloud infrastructure and managed data/AI platforms"
    },
    {
      title: "Cryptography & Research",
      icon: Cpu,
      skills: ["Homomorphic Encryption", "Cryptography", "Image Processing"],
      description: "Research background in secure data hiding and encryption"
    },
    {
      title: "Competitive Programming",
      icon: Zap,
      skills: ["LeetCode", "CodeChef", "Codeforces", "1000+ Problems Solved"],
      description: "Strong algorithmic thinking and problem-solving skills"
    }
  ];

  const codingPlatforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Harish_Narasimhan_K/",
      description: "Knight · Max rating 1999 · 650+ problems solved"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/harishk_0135",
      description: "3★ · Max rating 1606 · 500+ problems solved"
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/Harish_0135",
      description: "Rating 1100 · 50+ problems solved"
    }
  ];

  return (
    <section id="skills" className="py-32 bg-elegant-light">
      <div className="content-width section-padding">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-display-sm text-elegant-charcoal mb-6">
            Technical Competencies
          </h2>
          <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning artificial intelligence, machine learning,
            and modern development technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="card-elegant group animate-fade-in">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-elegant-gray-100 rounded-lg group-hover:bg-elegant-charcoal group-hover:text-elegant-white transition-all duration-300">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-elegant-charcoal">
                    {category.title}
                  </h3>
                </div>

                <p className="text-sm text-elegant-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-elegant-white text-elegant-gray-700 px-3 py-1 rounded-full border border-elegant-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coding Platforms */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display font-semibold text-2xl text-elegant-charcoal mb-8 text-center">
            Coding Platforms
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {codingPlatforms.map((platform, index) => (
              <div key={index} className="text-center p-6 bg-elegant-white rounded-lg border border-elegant-gray-200 hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-lg text-elegant-charcoal mb-2">
                  {platform.name}
                </h4>
                <p className="text-sm text-elegant-gray-600 mb-4">{platform.description}</p>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-elegant-charcoal hover:text-elegant-gray-600 transition-colors duration-300 text-sm font-medium"
                >
                  View Profile →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
