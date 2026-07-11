import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, ChevronsUpDown } from 'lucide-react';

const OpenSource = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setExpandedIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const contributions = [
    {
      title: "Optimizing memory management in the snapshot deletion workflow in the OpenSearch",
      repo: "opensearch-project/OpenSearch",
      prs: [
        { number: "#20858", url: "https://github.com/opensearch-project/OpenSearch/pull/20858" }
      ],
      problem:
        "A critical memory retention issue in OpenSearch caused the cluster manager to hold on to unnecessary state during long-running snapshot operations, risking failures on production clusters.",
      solution:
        "Diagnosed the retention path and shipped a fix that releases held references at the correct lifecycle boundary, restoring healthy memory usage on the cluster manager node.",
      impact:
        "Reduced memory overhead by over 99% during snapshot workloads and prevented cluster manager failures on long-running operations."
    },
    {
      title: "Caches integration to the search query path for the new opensearch analytics engine optimized for log analytics and observability.",
      repo: "opensearch-project/OpenSearch",
      prs: [
        { number: "#21225", url: "https://github.com/opensearch-project/OpenSearch/pull/21225" },
        { number: "#21577", url: "https://github.com/opensearch-project/OpenSearch/pull/21577" }
      ],
      problem:
        "OpenSearch's new DataFusion-based analytics engine (optimized for log analytics) executed repeated queries without caching parquet metadata and statistics, causing avoidable I/O and latency on the hot query path.",
      solution:
        "Wired a two-tier metadata and statistics cache into the search query path so parquet metadata and statistics are reused across queries, cutting redundant object-store round trips.",
      impact:
        "Materially reduced query latency on the analytics backend and lowered load on the underlying storage layer."
    },
    {
      title: "Cache and search metrics exposure to the Stats API for improved observability and debugging.",
      repo: "opensearch-project/OpenSearch",
      prs: [
        { number: "#21854", url: "https://github.com/opensearch-project/OpenSearch/pull/21854" }
      ],
      problem:
        "The DataFusion analytics backend had no first-class observability for the newly added parquet metadata / statistics caches or for search execution, making it hard to reason about cache efficiency or diagnose regressions in production.",
      solution:
        "Extended the sandbox analytics backend stats endpoint to expose parquet metadata and statistics cache stats alongside search stats, wiring the counters through the existing telemetry surface.",
      impact:
        "Gave operators real-time visibility into cache hit ratios and search execution metrics, enabling faster diagnosis and data-driven tuning of the analytics engine."
    }
  ];

  return (
    <section id="open-source" className="py-32 bg-elegant-white">
      <div className="content-width section-padding">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-display-sm text-elegant-charcoal mb-6">
            Open Source Contributions
          </h2>
          <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto">
            Merged pull requests to the OpenSearch project — performance, caching, and
            observability improvements across the analytics engine and cluster manager.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {contributions.map((c, index) => {
            const isExpanded = expandedIndices.includes(index);
            return (
              <div key={index} className="card-elegant animate-fade-in flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-elegant-gray-100 rounded-lg text-elegant-charcoal">
                      <GitPullRequest size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-elegant-charcoal leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-sm text-elegant-gray-700 mt-1">{c.repo}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleIndex(index)}
                    className="p-2 text-elegant-gray-600 hover:text-elegant-charcoal hover:bg-elegant-gray-100 rounded-full transition-colors duration-300 flex-shrink-0"
                    aria-label={isExpanded ? "Collapse details" : "Expand details"}
                  >
                    <ChevronsUpDown size={20} className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Collapsible Middle Section */}
                <div className={`grid transition-all duration-300 ease-in-out ${
                  isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                  <div className="overflow-hidden">
                    <div className="space-y-4 text-sm leading-relaxed pt-6 pb-2 border-t border-elegant-gray-100 mt-4">
                      <div>
                        <h4 className="font-semibold text-elegant-charcoal mb-1">Problem</h4>
                        <p className="text-elegant-gray-600">{c.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-elegant-charcoal mb-1">Solution</h4>
                        <p className="text-elegant-gray-600">{c.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-elegant-charcoal mb-1">Impact</h4>
                        <p className="text-elegant-gray-600">{c.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section (PR Links) */}
                <div className="flex flex-wrap gap-3 pt-4 mt-2 border-t border-elegant-gray-100/50">
                  {c.prs.map((pr, i) => (
                    <a
                      key={i}
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-elegant-charcoal hover:text-elegant-gray-600 transition-colors duration-300"
                    >
                      PR {pr.number}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
