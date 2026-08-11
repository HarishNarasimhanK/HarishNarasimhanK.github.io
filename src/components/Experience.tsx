
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const roles = [
    {
      title: "Software Development Engineer Intern",
      company: "Amazon Web Services (AWS)",
      period: "Jan 2026 – Jun 2026",
      bullets: [
        "Improved OpenSearch cluster stability by resolving a critical memory retention issue, reducing memory overhead by over 99% and preventing cluster manager failures during long-running snapshot operations.",
        "Developed a two-tier metadata and statistics caching system for OpenSearch's DataFusion analytics engine, reducing query latency by over 60%.",
        "Built an end-to-end telemetry pipeline exposing cache efficiency, query execution, and storage I/O metrics through REST APIs and CloudWatch, enabling real-time monitoring and rapid diagnosis of production issues.",
        "Engineered an AWS CDK-based OpenSearch benchmarking framework integrating automated cluster deployment, CloudWatch monitoring, and continuous profiling — reducing environment setup from hours to minutes."
      ]
    },
    {
      title: "AI Engineer Intern",
      company: "QuickInsights.ai",
      period: "May 2025 – Jul 2025",
      bullets: [
        "Engineered a production-grade Text-to-SQL AI agent that unifies fragmented marketing and operational data, enabling D2C e-commerce brands to query cross-channel performance in natural language.",
        "Implemented self-correcting ReAct LLM workflows to handle complex calculations (like full-funnel attribution, blended ROAS, and CAC) with high accuracy, translating raw enterprise data into actionable ROI strategies.",
        "Architected a multi-agent decision-support system using Google ADK, leveraging tool-calling and semantic data retrieval to generate insights directly from enterprise BigQuery workloads.",
        "Optimized agent workflows through parallel execution, improving response reliability and reducing end-to-end query latency by 90%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-elegant-white">
      <div className="content-width section-padding">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-display-sm text-elegant-charcoal mb-6">
            Experience
          </h2>
          <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto">
            Professional roles building performant systems and AI-driven products.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {roles.map((role, index) => (
            <div key={index} className="card-elegant animate-fade-in">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-elegant-gray-100 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-bold text-xl text-elegant-charcoal">
                      {role.title}
                    </h3>
                    <span className="text-sm text-elegant-gray-600">{role.period}</span>
                  </div>
                  <p className="text-elegant-gray-700 font-medium mt-1">{role.company}</p>
                </div>
              </div>

              <ul className="space-y-3 pl-2">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-elegant-charcoal rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-elegant-gray-600 text-sm leading-relaxed">{bullet}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
