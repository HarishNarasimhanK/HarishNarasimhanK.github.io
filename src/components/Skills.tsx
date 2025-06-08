
import React from 'react';
import { Code, Brain, Database, Cpu, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C++", "Java"],
      description: "Strong foundation in multiple programming paradigms"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Machine Learning", "Natural Language Processing", "Generative AI", "LangChain", "Hugging Face"],
      description: "Advanced expertise in AI model development and deployment"
    },
    {
      title: "Data Science",
      icon: Database,
      skills: ["Data Analytics", "Data Structures", "Algorithms"],
      description: "Comprehensive data analysis and algorithmic problem-solving"
    },
    {
      title: "Emerging Technologies",
      icon: Cpu,
      skills: ["Blockchain Development", "Interdisciplinary AI Applications"],
      description: "Cutting-edge technology exploration and implementation"
    },
    {
      title: "Development",
      icon: Globe,
      skills: ["Application Development", "Web Technologies", "API Integration"],
      description: "Full-stack development capabilities"
    },
    {
      title: "Competitive Programming",
      icon: Zap,
      skills: ["LeetCode", "CodeChef", "Codeforces", "500+ Problems Solved"],
      description: "Strong algorithmic thinking and problem-solving skills"
    }
  ];

  const certifications = [
    "Data Analytics and Data Science - Technook (IIT Bhubaneswar)",
    "Reinforcement Learning - NPTEL",
    "Generative AI with LangChain and Hugging Face - Udemy",
    "IBM Machine Learning Workshop - DAKSH"
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

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display font-semibold text-2xl text-elegant-charcoal mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-elegant-white rounded-lg border border-elegant-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-2 h-2 bg-elegant-charcoal rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-elegant-gray-700 leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h3 className="font-display font-semibold text-2xl text-elegant-charcoal mb-6">
            Languages
          </h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="font-semibold text-lg text-elegant-charcoal">English</div>
              <div className="text-sm text-elegant-gray-600">Professional Proficiency</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-lg text-elegant-charcoal">Tamil</div>
              <div className="text-sm text-elegant-gray-600">Native Speaker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
