import React from 'react';
import { FileText, Download, Mail } from 'lucide-react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * Documents & Downloads section.
 * Displays functional download links when actual files exist, or allows
 * requesting technical documents from engineering without fake download links.
 */
export default function ProductDocuments({ documents = [], onRequestDocument, onRequestDoc }) {
  const docList = Array.isArray(documents) ? documents : [];

  const handleRequest = (doc) => {
    if (onRequestDocument) {
      onRequestDocument(doc.title || doc);
    } else if (onRequestDoc) {
      onRequestDoc(doc);
    }
  };

  return (
    <section
      id="documents"
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-32 transition-colors duration-300"
    >
      <div className="section-container relative">
        <SectionHeadingContainer
          subheading="TECHNICAL DOCUMENTATION"
          heading={
            <>
              Documents &{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                Downloads
              </span>
            </>
          }
          description="Hardware datasheets, mechanical envelopes, Yocto BSP manuals, and carrier board design references."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {docList.map((doc, idx) => {
            const hasFile = Boolean(doc.fileUrl);

            return (
              <div
                key={doc.id || doc.title || idx}
                className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.3333%-0.67rem)] group rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3.5 mb-4">
                  {/* PDF Icon Box */}
                  <div className="w-11 h-11 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0]">
                        {doc.category || 'Documentation'}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-[#EDF2F7] dark:bg-[#101936] text-[#52627C] dark:text-[#AAB6D0] border border-[#DBE4F0] dark:border-[#24355A]">
                        PDF
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-[#52627C] dark:text-[#AAB6D0] leading-relaxed mt-1">
                      {doc.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#24355A] flex items-center justify-between gap-2">
                  {hasFile ? (
                    <a
                      href={doc.fileUrl}
                      download
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full text-xs font-bold text-[#089EC2] dark:text-[#2DD4F0] bg-[#F8FAFD] dark:bg-[#101936] border border-[#C5DDF5] dark:border-[#244277] hover:bg-gradient-to-r hover:from-[#0AA6C6] hover:to-[#3285FF] hover:text-white hover:border-transparent transition-all duration-200 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleRequest(doc)}
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full text-xs font-semibold text-[#089EC2] dark:text-[#2DD4F0] bg-[#F8FAFD] dark:bg-[#101936] border border-[#C5DDF5] dark:border-[#244277] hover:border-[#089EC2] dark:hover:border-[#2DD4F0] hover:bg-[#E2EEFB]/60 dark:hover:bg-[#1A2C52] transition-all duration-200 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 opacity-75" />
                      <span>Request PDF Document</span>
                      <Mail className="w-3 h-3 opacity-75" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
