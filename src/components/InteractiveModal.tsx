import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { ModalState } from '../types';
import { CERTIFICATIONS, PRODUCTS, SERVICES } from '../data/panoramaData';
import { ProductSchematic } from './ProductSchematic';
import { SCHEMATIC_PRODUCT_IDS } from './productSchematicIds';

interface InteractiveModalProps {
  modal: ModalState;
  onClose: () => void;
  onRequestQuoteWithSubject: (subject: string) => void;
}

const POLICY_COPY: Record<'cookies' | 'privacy' | 'terms', { title: string; subtitle: string; body: string[] }> = {
  cookies: {
    title: 'Cookies & Preference Policy',
    subtitle: 'Panorama Glass Factory · Doha, Qatar (panoramaglass.net)',
    body: [
      'This website uses essential cookies to ensure proper functionality and improve user experience. No personal data is collected or shared with third parties.',
      'By continuing to use this site, you agree to our use of cookies for operational purposes only.',
    ],
  },
  privacy: {
    title: 'Privacy & Confidentiality Policy',
    subtitle: 'Panorama Glass Factory · Doha, Qatar',
    body: [
      'All information submitted through our forms is treated as confidential and used solely for business purposes related to your inquiry or quotation request.',
      'We do not sell, rent, or share your personal information with third parties without your explicit consent, except as required by law.',
    ],
  },
  terms: {
    title: 'Quality Policy & Terms',
    subtitle: 'ISO 9001:2015 · ISO 14001:2015 · OHSAS 45001:2018',
    body: [
      'Our Manufacturing systems use modern technology to meet the requirements of customers. As an ISO Certified Company, we maintain a Quality Management System with procedures and policies in compliance with the highest standards, undertaking continuous improvement and training.',
      'All quotations are valid for 30 days from the date of issue. Technical specifications are subject to final factory confirmation.',
    ],
  },
};

export function InteractiveModal({
  modal,
  onClose,
  onRequestQuoteWithSubject,
}: InteractiveModalProps) {
  const [downloadNotice, setDownloadNotice] = useState<{
    scope: ModalState;
    label: string;
  } | null>(null);
  const currentNotice = downloadNotice?.scope === modal ? downloadNotice.label : null;
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!modal) return;
    
    // Store previously focused element
    previousActiveElement.current = document.activeElement as HTMLElement;
    
    // Focus modal when opened
    modalRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        // Focus trap logic
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      // Restore focus when modal closes
      previousActiveElement.current?.focus();
    };
  }, [modal, onClose]);

  const handleSimulatedDownload = (label: string) => {
    setDownloadNotice({ scope: modal, label: `Technical dossier prepared: ${label}` });
  };

  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#071426]/80 p-4 sm:p-6 backdrop-blur-md"
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200"
            tabIndex={-1}
          >
            <div className="absolute top-0 inset-x-0 h-1 logo-gold-seam" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 end-4 h-10 w-10 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0f172a] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {modal.type === 'product' && (() => {
              const item = PRODUCTS.find((p) => p.id === modal.id);
              if (!item) return null;
              return (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-2 pe-10 font-mono text-xs text-[#0284c7] font-semibold">
                    <span>{item.badge}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-600">{item.modalCategory}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#0b192c]">{item.sku}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0f172a] pe-8">
                    {item.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {SCHEMATIC_PRODUCT_IDS.has(item.id) && (
                    <ProductSchematic product={item} compact={false} />
                  )}

                  <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                    <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#0284c7] font-bold mb-1">
                      Typical Cross-Section Buildup
                    </h3>
                    <p className="text-sm text-[#0f172a] font-semibold">{item.crossSection}</p>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0f172a] mb-2">
                      Engineering Specifications
                    </h3>
                    <table className="w-full text-start border-collapse">
                      <tbody>
                        {item.specs.map((s) => (
                          <tr key={s.label} className="border-b border-slate-200">
                            <td className="py-2.5 font-mono text-xs text-slate-500 uppercase pe-4">
                              {s.label}
                            </td>
                            <td className="py-2.5 text-sm font-bold text-[#0f172a] text-end tabular-nums">
                              {s.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {currentNotice && (
                    <div className="rounded-lg bg-[#e0f2fe] px-4 py-2.5 text-xs font-semibold text-[#0c4a6e] flex items-center gap-2 border border-[#0284c7]/30">
                      <span className="material-symbols-outlined text-[18px] text-[#0284c7]">check_circle</span>
                      <span>{currentNotice}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0284c7] text-[20px]">
                        verified
                      </span>
                      <span className="font-mono text-xs text-[#0f172a] font-semibold">
                        ISO 9001:2015 · 14001:2015 · OHSAS 45001:2018
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleSimulatedDownload(item.downloads.join(', '))}
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0f172a] px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>Download CAD/Specs</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onRequestQuoteWithSubject(item.title)}
                        className="glass-sheen inline-flex items-center gap-2 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span>Request Project Quote</span>
                        <span className="rtl:rotate-180 text-[#e0f2fe]">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}

            {modal.type === 'service' && (() => {
              const service = SERVICES.find((s) => s.id === modal.id);
              if (!service) return null;
              return (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-2 pe-10 font-mono text-xs text-[#0284c7] font-semibold">
                    <span>{service.badge}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-500">Panorama Manufacturing Line</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0f172a] pe-8">
                    {service.title}
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed">{service.details}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200">
                    <div>
                      <div className="font-mono text-[10px] uppercase text-slate-500">Capacity</div>
                      <div className="text-sm font-bold text-[#0f172a] mt-0.5 tabular-nums">
                        {service.capacity}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase text-slate-500">Turnaround</div>
                      <div className="text-sm font-bold text-[#0369a1] mt-0.5 tabular-nums">
                        {service.turnaround}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase text-slate-500">Code</div>
                      <div className="text-sm font-bold text-[#0e7490] mt-0.5">
                        {service.compliance}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0f172a] px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => onRequestQuoteWithSubject(service.title)}
                      className="glass-sheen rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Inquire About Capability →
                    </button>
                  </div>
                </div>
              );
            })()}

            {modal.type === 'certificates' && (
              <div className="flex flex-col gap-5">
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0284c7]">
                  Quality Policy &amp; Standards
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0f172a] pe-8">
                  ISO 9001, ISO 14001 &amp; OHSAS 45001 Certifications
                </h2>
                <p className="text-sm text-slate-600">
                  Our Manufacturing systems use modern technology to meet the requirements of customers. As an ISO Certified Company, we maintain a Quality Management System with procedures and policies in compliance with the highest standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c.id} className="rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold text-[#0369a1]">
                          {c.category}
                        </span>
                        <h3 className="font-display text-base font-bold text-[#0f172a] mt-0.5">
                          {c.title}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1">{c.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs font-semibold">
                        <span className="text-slate-600">{c.tier}</span>
                        <span className="text-[#0284c7]">{c.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => onRequestQuoteWithSubject('Compliance & Mill Certificate Package Request')}
                    className="glass-sheen rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Request Certified Mill Dossier →
                  </button>
                </div>
              </div>
            )}

            {modal.type === 'policy' && (() => {
              const policy = POLICY_COPY[modal.policyKey];
              return (
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-xs uppercase font-bold text-[#0284c7]">
                    {policy.subtitle}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-[#0f172a] pe-8">
                    {policy.title}
                  </h2>
                  <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    {policy.body.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-lg bg-[#0b192c] hover:bg-[#0284c7] text-white px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
