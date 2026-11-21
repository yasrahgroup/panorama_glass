import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import type { RfqFormValues } from '../types';
import {
  formatFileSize,
  generateTenderReference,
  isAcceptedEngineeringFile,
  validateRfqForm,
} from '../utils/portfolio';
import { LogoPattern } from '../components/LogoPattern';

interface RequestQuotePageProps {
  prefillSubject?: string;
}

interface AttachedFile {
  name: string;
  size: number;
}

const PROJECT_TYPOLOGIES = [
  { value: 'skyscraper', label: 'Commercial Skyscraper' },
  { value: 'hospitality', label: 'Mixed-Use / Hospitality' },
  { value: 'villa', label: 'Residential Villa Complex' },
  { value: 'airport', label: 'Airport / Infrastructure' },
  { value: 'retail', label: 'Flagship Retail / Atrium' },
  { value: 'cultural', label: 'Cultural & Civic Emblem' },
];

const GLASS_SYSTEMS = [
  {
    id: 'low-e',
    title: 'Insulated Double & Triple Glazing (18–58 mm)',
    subtitle: 'Double, Triple & Curve IGU up to 2400 × 3600 mm',
  },
  {
    id: 'sentryglas',
    title: 'PVB, SentryGlas & EVA Lamination (8.76–85 mm)',
    subtitle: 'Flat humidity-controlled PVB, Acoustic, Mesh & Smart Glass',
  },
  {
    id: 'acoustic',
    title: 'Flat & Curve Tempered Glass Processing',
    subtitle: 'Flat (4–19 mm) & Curve (6–12 mm, Max Radius 1000 mm)',
  },
  {
    id: 'ballistic',
    title: 'Bullet Proof (BR 01 – BR 07) & Fire Rated Glass',
    subtitle: 'High-security laminated assemblies & Lisec Frame Bonding',
  },
  {
    id: 'curved',
    title: 'Digital Ceramic Printing (Full, 2D & 3D)',
    subtitle: 'Full, Design, 2D & 3D ceramic printing up to 2440 × 3600 mm',
  },
  {
    id: 'pdlc',
    title: 'Sand Blasting, Mirrors & Supply / Installation',
    subtitle: 'European Sand Blasting, UPVC Windows, Partitions & Skylights',
  },
];

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function RequestQuotePage({ prefillSubject }: RequestQuotePageProps) {
  const [values, setValues] = useState<RfqFormValues>({
    contactName: '',
    firmName: '',
    workEmail: '',
    contactPhone: '',
    projectSite: '',
    projectType: 'skyscraper',
    selectedSystems: ['low-e', 'sentryglas'],
    volumeScope: '2500',
    targetUValue: '',
    hstRequired: true,
    engineeringNotes: prefillSubject ? `Inquiry Focus: ${prefillSubject}\n` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const [fileWarning, setFileWarning] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleSystem = (id: string) => {
    setValues((prev) => {
      const exists = prev.selectedSystems.includes(id);
      return {
        ...prev,
        selectedSystems: exists
          ? prev.selectedSystems.filter((s) => s !== id)
          : [...prev.selectedSystems, id],
      };
    });
  };

  const handleFilesAdded = (fileList: FileList | null) => {
    if (!fileList) return;
    setFileWarning(null);
    const accepted: AttachedFile[] = [];
    const rejected: string[] = [];

    Array.from(fileList).forEach((f) => {
      if (isAcceptedEngineeringFile(f.name, f.size)) {
        accepted.push({ name: f.name, size: f.size });
      } else {
        rejected.push(f.name);
      }
    });

    if (accepted.length > 0) {
      setFiles((prev) => [...prev, ...accepted]);
    }
    if (rejected.length > 0) {
      setFileWarning(
        `Skipped unsupported or >50MB file(s): ${rejected.join(', ')}. Accepted: PDF, DWG, DXF, IFC, RVT, XLSX.`,
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRfqForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    const refCode = generateTenderReference((Date.now() % 9000) + 1000);
    setSubmittedRef(refCode);
  };

  const handleResetRfq = () => {
    setSubmittedRef(null);
    setErrors({});
    setFiles([]);
    setValues({
      contactName: '',
      firmName: '',
      workEmail: '',
      contactPhone: '',
      projectSite: '',
      projectType: 'skyscraper',
      selectedSystems: ['low-e', 'sentryglas'],
      volumeScope: '2500',
      targetUValue: '',
      hstRequired: true,
      engineeringNotes: '',
    });
  };

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-[#0f172a]">
      {/* Header Section */}
      <section className="relative overflow-hidden w-full px-5 lg:px-12 pt-10 pb-12 bg-logo-fins border-b border-slate-200 mb-8">
        <LogoPattern variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#0284c7]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
              Request a Quote
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0b192c] leading-tight tracking-tight [text-wrap:balance]">
                Architectural Glazing Quotation
              </h1>
              <p className="text-base text-[#475569] max-w-2xl">
                Submit your glass specifications for structural feasibility and preliminary pricing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Quotation Grid */}
      <section className="w-full px-5 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 2-Stage Engineering RFQ Form */}
          <div className="lg:col-span-12 flex flex-col gap-6">
            {submittedRef ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: EASE_CURVE }}
                className="bg-white shadow-lg rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center gap-4 border border-slate-200"
              >
                <div className="w-16 h-16 rounded-full bg-[#0284c7] flex items-center justify-center text-white shadow-md">
                  <span className="material-symbols-outlined text-[36px]">check</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0b192c]">
                  Quote Request Submitted
                </h2>
                <p className="text-base text-[#475569] max-w-lg leading-relaxed">
                  Your architectural specification for{' '}
                  <strong className="text-[#0b192c]">{values.firmName}</strong> has been routed to Panorama Glass Factory (Sales@panoramaglass.net). Our engineering team will review your requirements and respond within 24-48 hours.
                </p>
                <div className="bg-[#e0f2fe] px-5 py-2.5 rounded-lg font-mono text-xs text-[#075985] font-bold uppercase tracking-widest mt-1 border border-[#0284c7]/30">
                  TENDER REFERENCE #{submittedRef}
                </div>
                <button
                  type="button"
                  onClick={handleResetRfq}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-100 hover:bg-[#0b192c] text-[#0b192c] hover:text-white px-5 py-2.5 text-sm font-bold transition-colors cursor-pointer"
                >
                  <span>Submit Another Specification</span>
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white shadow-md rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-10 border border-slate-200"
              >
                {/* STAGE 01 */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                    <span className="w-7 h-7 rounded bg-[#0b192c] text-[#38bdf8] font-mono text-xs font-bold flex items-center justify-center">
                      01
                    </span>
                    <h2 className="font-display text-xl font-bold text-[#0b192c]">
                      Project &amp; Client Identity
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-[#0b192c]">
                        Project Principal / Lead Specifier *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={values.contactName}
                        onChange={(e) => setValues({ ...values, contactName: e.target.value })}
                        placeholder="e.g. Hassan Musa E Abuhelaiqa"
                        required
                        className="w-full bg-[#f8fafc] text-[#0f172a] text-sm px-3.5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                      />
                      {errors.contactName && (
                        <span className="text-xs font-semibold text-[#dc2626]">
                          {errors.contactName}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="firm-name" className="text-xs font-semibold text-[#0b192c]">
                        Architectural / Contractor Entity *
                      </label>
                      <input
                        id="firm-name"
                        type="text"
                        value={values.firmName}
                        onChange={(e) => setValues({ ...values, firmName: e.target.value })}
                        placeholder="Your company name"
                        required
                        className="w-full bg-[#f8fafc] text-[#0f172a] text-sm px-3.5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                      />
                      {errors.firmName && (
                        <span className="text-xs font-semibold text-[#dc2626]">
                          {errors.firmName}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="work-email" className="text-xs font-semibold text-[#0b192c]">
                        Corporate Email Address *
                      </label>
                      <input
                        id="work-email"
                        type="email"
                        value={values.workEmail}
                        onChange={(e) => setValues({ ...values, workEmail: e.target.value })}
                        placeholder="name@panoramaglass.net"
                        required
                        className="w-full bg-[#f8fafc] text-[#0f172a] text-sm px-3.5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                      />
                      {errors.workEmail && (
                        <span className="text-xs font-semibold text-[#dc2626]">
                          {errors.workEmail}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-semibold text-[#0b192c]">
                        Direct Line / WhatsApp *
                      </label>
                      <div dir="ltr" className="flex items-center gap-2">
                        <span className="bg-slate-200 text-[#0b192c] font-mono text-xs font-bold px-3 py-3 rounded-lg select-none shrink-0">
                          +974 (QAT)
                        </span>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={values.contactPhone}
                          onChange={(e) => setValues({ ...values, contactPhone: e.target.value })}
                          placeholder="5077 7210"
                          required
                          className="w-full bg-[#f8fafc] text-[#0f172a] text-sm px-3.5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                        />
                      </div>
                      {errors.contactPhone && (
                        <span className="text-xs font-semibold text-[#dc2626]">
                          {errors.contactPhone}
                        </span>
                      )}
                    </div>

                    <div className="sm:col-span-2 flex flex-col gap-1.5">
                      <label htmlFor="project-site" className="text-xs font-semibold text-[#0b192c]">
                        Erection &amp; Site Delivery Location *
                      </label>
                      <select
                        id="project-site"
                        value={values.projectSite}
                        onChange={(e) => setValues({ ...values, projectSite: e.target.value })}
                        required
                        className="w-full bg-[#f8fafc] text-[#0f172a] text-sm px-3.5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="">Select regional development zone...</option>
                        <option value="doha">Doha / West Bay</option>
                        <option value="lusail">Lusail City</option>
                        <option value="pearl">The Pearl-Qatar</option>
                        <option value="wakrah">Al Wakrah / Mesaieed</option>
                        <option value="rayyan">Al Rayyan / Education City</option>
                        <option value="khor">Al Khor / Ras Laffan</option>
                      </select>
                      {errors.projectSite && (
                        <span className="text-xs font-semibold text-[#dc2626]">
                          {errors.projectSite}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* STAGE 02 */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                    <span className="w-7 h-7 rounded bg-[#0284c7] text-white font-mono text-xs font-bold flex items-center justify-center">
                      02
                    </span>
                    <h2 className="font-display text-xl font-bold text-[#0b192c]">
                      Architectural Glazing Specifications
                    </h2>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-[#0b192c]">
                      Primary Typology Classification
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {PROJECT_TYPOLOGIES.map((typ) => (
                        <label
                          key={typ.value}
                          className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors border ${
                            values.projectType === typ.value
                              ? 'bg-[#e0f2fe] border-[#0284c7]'
                              : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="project-type"
                            value={typ.value}
                            checked={values.projectType === typ.value}
                            onChange={(e) => setValues({ ...values, projectType: e.target.value })}
                            className="w-4 h-4 accent-[#0284c7]"
                          />
                          <span className="text-xs font-medium text-[#0b192c]">{typ.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-1">
                    <span className="text-xs font-semibold text-[#0b192c]">
                      Engineered Glass Assemblies
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {GLASS_SYSTEMS.map((sys) => {
                        const checked = values.selectedSystems.includes(sys.id);
                        return (
                          <label
                            key={sys.id}
                            className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors border ${
                              checked
                                ? 'bg-[#e0f2fe] border-[#0284c7]'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleSystem(sys.id)}
                              className="mt-1 w-4 h-4 rounded accent-[#0284c7]"
                            />
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-[#0b192c]">
                                {sys.title}
                              </span>
                              <span className="text-xs text-[#475569] mt-0.5">
                                {sys.subtitle}
                              </span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="volume-scope" className="text-xs font-semibold text-[#0b192c]">
                        Estimated Total Glazing Area (m²)
                      </label>
                      <select
                        id="volume-scope"
                        value={values.volumeScope}
                        onChange={(e) => setValues({ ...values, volumeScope: e.target.value })}
                        className="w-full bg-[#f8fafc] text-[#0f172a] text-sm px-3.5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                      >
                        <option value="500">&lt; 500 m² (Bespoke Villa / Boutique Atrium)</option>
                        <option value="2500">500 – 2,500 m² (Mid-Rise Commercial / Podium)</option>
                        <option value="10000">2,500 – 10,000 m² (High-Rise Facade Package)</option>
                        <option value="over10000">&gt; 10,000 m² (Megaproject Multi-Tower Envelope)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="target-uvalue" className="text-xs font-semibold text-[#0b192c]">
                        Target Glass Thickness / Dimensions (mm)
                      </label>
                      <input
                        id="target-uvalue"
                        type="text"
                        value={values.targetUValue}
                        onChange={(e) => setValues({ ...values, targetUValue: e.target.value })}
                        placeholder="e.g. 18–58mm IGU, Max 2400×3600mm"
                        className="w-full bg-[#f8fafc] text-[#0f172a] text-sm px-3.5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="hst-required"
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer"
                  >
                    <input
                      id="hst-required"
                      type="checkbox"
                      checked={values.hstRequired}
                      onChange={(e) => setValues({ ...values, hstRequired: e.target.checked })}
                      className="w-5 h-5 rounded accent-[#0284c7]"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0b192c]">
                        HST / Special Specifications
                      </span>
                      <span className="text-xs text-[#475569]">
                        Additional specifications for HST or special requirements.
                      </span>
                    </div>
                  </label>
                </div>

                {/* STAGE 03 */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                    <span className="w-7 h-7 rounded bg-[#0e7490] text-white font-mono text-xs font-bold flex items-center justify-center">
                      03
                    </span>
                    <h2 className="font-display text-xl font-bold text-[#0b192c]">
                      Architectural Drawings &amp; BOQ Upload
                    </h2>
                  </div>

                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragging(false);
                      handleFilesAdded(e.dataTransfer.files);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        fileInputRef.current?.click();
                      }
                    }}
                    className={`rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors border-2 border-dashed ${
                      isDragging
                        ? 'bg-[#e0f2fe] border-[#0284c7]'
                        : 'bg-slate-50 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0284c7] mb-3 border border-slate-200">
                      <span className="material-symbols-outlined text-[26px]">cloud_upload</span>
                    </div>
                    <div className="font-display text-lg font-bold text-[#0b192c] mb-1">
                      Drag tender files, schedules, or BOQ directly here
                    </div>
                    <p className="text-sm text-[#475569] max-w-md mb-3">
                      Accepted formats:{' '}
                      <span className="font-mono text-xs text-[#0284c7] font-bold">
                        PDF, DWG, DXF, IFC, RVT, XLSX
                      </span>{' '}
                      (up to 50MB per packet)
                    </p>
                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 text-xs font-bold text-[#0b192c]">
                      <span className="material-symbols-outlined text-[18px] text-[#0284c7]">
                        folder_open
                      </span>
                      <span>Browse Local Workstation</span>
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.dwg,.dxf,.ifc,.rvt,.xlsx,.xls"
                      onChange={(e) => handleFilesAdded(e.target.files)}
                      className="sr-only"
                      aria-label="Upload architectural drawings and BOQ files"
                    />
                  </div>

                  {fileWarning && (
                    <div className="rounded-lg bg-red-50 px-4 py-2.5 text-xs font-semibold text-[#dc2626] border border-red-200">
                      {fileWarning}
                    </div>
                  )}

                  {files.length > 0 && (
                    <ul className="space-y-2">
                      {files.map((f, index) => (
                        <li
                          key={`${f.name}-${index}`}
                          className="flex items-center justify-between bg-slate-50 px-4 py-2.5 rounded-lg text-xs border border-slate-200"
                        >
                          <div className="flex items-center gap-2 font-semibold text-[#0b192c] truncate">
                            <span className="material-symbols-outlined text-[#0284c7] text-[18px]">
                              description
                            </span>
                            <span className="truncate">{f.name}</span>
                            <span className="font-mono text-[#64748b] tabular-nums">
                              ({formatFileSize(f.size)})
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setFiles((prev) => prev.filter((_, idx) => idx !== index))
                            }
                            aria-label={`Remove ${f.name}`}
                            className="text-[#dc2626] hover:underline font-bold ms-3 shrink-0 cursor-pointer"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}

                  {files.length > 0 && (
                    <div className="text-xs font-semibold text-[#0284c7]">
                      {files.length} engineering packet(s) staged for tender review.
                    </div>
                  )}
                </div>

                {/* STAGE 04 */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                    <span className="w-7 h-7 rounded bg-[#0369a1] text-white font-mono text-xs font-bold flex items-center justify-center">
                      04
                    </span>
                    <h2 className="font-display text-xl font-bold text-[#0b192c]">
                      Specific Structural &amp; Execution Notes
                    </h2>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="engineering-notes" className="text-xs font-semibold text-[#0b192c]">
                      Facade Windloads, Deflection Limits, Coating Orientation, or Mock-up Requirements
                    </label>
                    <textarea
                      id="engineering-notes"
                      rows={4}
                      value={values.engineeringNotes}
                      onChange={(e) => setValues({ ...values, engineeringNotes: e.target.value })}
                      placeholder="Detail glass processing criteria: CNC cutting (4–19mm), Curve Tempering (Max Radius 1000mm), PVB/EVA lamination (8.76–85mm), Digital Ceramic Printing, or Supply & Installation scope..."
                      className="w-full bg-[#f8fafc] text-[#0f172a] text-sm p-3.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Submit Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0284c7] hover:bg-[#0369a1] text-white px-7 py-4 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group font-display text-base font-bold"
                  >
                    <span>Submit RFQ for Technical Evaluation</span>
                    <span className="material-symbols-outlined text-[20px] text-[#e0f2fe] group-hover:translate-x-1 transition-transform rtl:rotate-180">
                      arrow_forward
                    </span>
                  </button>

                  <span className="text-xs text-[#475569]">
                    24-48 hour initial response guaranteed
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
