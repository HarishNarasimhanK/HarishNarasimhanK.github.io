import React from 'react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import researchPresentation from '@/assets/Research_Presentation.pptx.asset.json';

const Research = () => {
  return (
    <section id="research" className="py-32 bg-elegant-light">
      <div className="content-width section-padding">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-display-sm text-elegant-charcoal mb-6">
            Research & Publications
          </h2>
          <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto">
            Scientific work and publications in security, cryptography, and image processing.
          </p>
        </div>

        {/* Research Summary Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elegant animate-fade-in flex flex-col md:flex-row gap-6 justify-between items-start">
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-elegant-gray-100 rounded-lg text-elegant-charcoal">
                  <BookOpen size={20} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-elegant-gray-600">
                  IEEE Conference Publication
                </span>
              </div>
              <h3 className="font-display font-semibold text-2xl text-elegant-charcoal">
                Block-Based Separable Reversible Data Hiding using Homomorphic Encryption
              </h3>
              <p className="text-sm text-elegant-gray-700 font-medium">
                IEEE Xplore · Cryptography &amp; Secure Data Hiding
              </p>
              <p className="text-sm text-elegant-gray-600 leading-relaxed">
                Designed a secure data-hiding framework for encrypted images using homomorphic encryption. 
                It enables simultaneous data embedding and lossless image recovery with a 75% capacity 
                improvement, preserving confidentiality in data-intensive applications.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://ieeexplore.ieee.org/document/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-elegant-charcoal hover:text-elegant-gray-600 transition-colors duration-300 underline underline-offset-4"
                >
                  Read on IEEE Xplore
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Modal Trigger Button */}
            <div className="w-full md:w-auto flex-shrink-0 pt-2 md:pt-0">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full md:w-auto btn-primary flex items-center justify-center gap-2">
                    <FileText size={18} />
                    <span>View Research Details</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-elegant-white border border-elegant-gray-200 shadow-xl rounded-xl p-8 max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="text-xs uppercase tracking-wider text-elegant-gray-600 mb-1">
                      Research Publication
                    </div>
                    <DialogTitle className="font-display font-bold text-2xl text-elegant-charcoal mb-2">
                      Block-Based Separable Reversible Data Hiding using Homomorphic Encryption
                    </DialogTitle>
                    <p className="text-sm text-elegant-gray-700 mt-1 font-medium pb-4 border-b border-elegant-gray-100">
                      IEEE Conference Publication · Cryptography &amp; Secure Data Hiding
                    </p>
                  </DialogHeader>

                  <div className="space-y-6 mt-4 text-sm leading-relaxed text-left">
                    <div>
                      <h4 className="font-semibold text-elegant-charcoal text-base mb-1.5">Abstract</h4>
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
                      <h4 className="font-semibold text-elegant-charcoal text-base mb-1.5">Our Contribution</h4>
                      <p className="text-elegant-gray-600">
                        Designed and implemented a reversible data-hiding framework using additive
                        homomorphic encryption, achieving a <strong>75% embedding capacity improvement</strong>
                        {" "}and lossless image recovery while preserving data confidentiality.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-elegant-gray-100">
                      <a
                        href="https://ieeexplore.ieee.org/document/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-elegant-charcoal hover:text-elegant-gray-600 transition-colors duration-300"
                      >
                        Read on IEEE Xplore
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={researchPresentation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-elegant-charcoal hover:text-elegant-gray-600 transition-colors duration-300"
                      >
                        Download Presentation
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
