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
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 sm:p-6 backdrop-blur-md"
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-surface p-6 sm:p-8 shadow-overlay border border-line"
            tabIndex={-1}
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-burgundy" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 end-4 h-10 w-10 rounded-full bg-canvas hover:bg-surface text-ink flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {modal.type === 'product' && (() => {
              const item = PRODUCTS.find((p) => p.id === modal.id);
              if (!item) return null;
              return (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-2 pe-10 font-mono text-xs text-burgundy font-semibold">
                    <span>{item.badge}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-muted">{item.modalCategory}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-burgundy-deep">{item.sku}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-burgundy pe-8">
                    {item.title}
                  </h2>

                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {item.description}
                  </p>

                  {SCHEMATIC_PRODUCT_IDS.has(item.id) && (
                    <ProductSchematic product={item} compact={false} />
                  )}

                  <div className="rounded-xl bg-canvas p-4 border border-line">
                    <h3 className="font-mono text-[11px] uppercase tracking-wider text-burgundy font-bold mb-1">
                      Typical Cross-Section Buildup
                    </h3>
                    <p className="text-sm text-ink font-semibold">{item.crossSection}</p>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-burgundy mb-2">
                      Engineering Specifications
                    </h3>
                    <table className="w-full text-start border-collapse">
                      <tbody>
                        {item.specs.map((s) => (
                          <tr key={s.label} className="border-b border-line">
                            <td className="py-2.5 font-mono text-xs text-muted uppercase pe-4">
                              {s.label}
                            </td>
                            <td className="py-2.5 text-sm font-bold text-ink text-end tabular-nums">
                              {s.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {currentNotice && (
                    <div className="rounded-lg bg-canvas px-4 py-2.5 text-xs font-semibold text-burgundy-deep flex items-center gap-2 border border-burgundy/30">
                      <span className="material-symbols-outlined text-[18px] text-burgundy">check_circle</span>
                      <span>{currentNotice}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-line">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-burgundy text-[20px]">
                        verified
                      </span>
                      <span className="font-mono text-xs text-ink font-semibold">
                        ISO 9001:2015 · 14001:2015 · OHSAS 45001:2018
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleSimulatedDownload(item.downloads.join(', '))}
                        className="inline-flex items-center gap-2 rounded-lg bg-canvas hover:bg-surface text-ink px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>Download CAD/Specs</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onRequestQuoteWithSubject(item.title)}
                        className="glass-sheen inline-flex items-center gap-2 rounded-lg bg-burgundy hover:bg-burgundy-deep text-white px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span>Request Project Quote</span>
                        <span className="rtl:rotate-180 text-sand">→</span>
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
                  <div className="flex flex-wrap items-center gap-2 pe-10 font-mono text-xs text-burgundy font-semibold">
                    <span>{service.badge}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-muted">Panorama Manufacturing Line</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-burgundy pe-8">
                    {service.title}
                  </h2>

                  <p className="text-base text-muted leading-relaxed">{service.details}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-xl bg-canvas p-4 border border-line">
                    <div>
                      <div className="font-mono text-[10px] uppercase text-muted">Capacity</div>
                      <div className="text-sm font-bold text-ink mt-0.5 tabular-nums">
                        {service.capacity}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase text-muted">Turnaround</div>
                      <div className="text-sm font-bold text-burgundy mt-0.5 tabular-nums">
                        {service.turnaround}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase text-muted">Code</div>
                      <div className="text-sm font-bold text-burgundy-light mt-0.5">
                        {service.compliance}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-line">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-lg bg-canvas hover:bg-surface text-ink px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => onRequestQuoteWithSubject(service.title)}
                      className="glass-sheen rounded-lg bg-burgundy hover:bg-burgundy-deep text-white px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Inquire About Capability →
                    </button>
                  </div>
                </div>
              );
            })()}

            {modal.type === 'certificates' && (
              <div className="flex flex-col gap-5">
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-burgundy">
                  Quality Policy &amp; Standards
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-burgundy pe-8">
                  ISO 9001, ISO 14001 &amp; OHSAS 45001 Certifications
                </h2>
                <p className="text-sm text-muted">
                  Our Manufacturing systems use modern technology to meet the requirements of customers. As an ISO Certified Company, we maintain a Quality Management System with procedures and policies in compliance with the highest standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c.id} className="rounded-xl bg-canvas border border-line p-4 flex flex-col justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold text-burgundy">
                          {c.category}
                        </span>
                        <h3 className="font-display text-base font-bold text-burgundy mt-0.5">
                          {c.title}
                        </h3>
                        <p className="text-xs text-muted mt-1">{c.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-line text-xs font-semibold">
                        <span className="text-muted">{c.tier}</span>
                        <span className="text-burgundy">{c.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-2 pt-3 border-t border-line">
                  <button
                    type="button"
                    onClick={() => onRequestQuoteWithSubject('Compliance & Mill Certificate Package Request')}
                    className="glass-sheen rounded-lg bg-burgundy hover:bg-burgundy-deep text-white px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer"
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
                  <span className="font-mono text-xs uppercase font-bold text-burgundy">
                    {policy.subtitle}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-burgundy pe-8">
                    {policy.title}
                  </h2>
                  <div className="space-y-3 text-sm text-muted leading-relaxed">
                    {policy.body.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-line">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-lg bg-burgundy hover:bg-burgundy-deep text-white px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer"
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
