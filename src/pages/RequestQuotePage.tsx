// import { useRef, useState } from 'react';
// import { motion } from 'motion/react';
// import type { RfqFormValues } from '../types';
// import {
//   formatFileSize,
//   generateTenderReference,
//   isAcceptedEngineeringFile,
//   validateRfqForm,
// } from '../utils/portfolio';
// import { LogoPattern } from '../components/LogoPattern';

// interface RequestQuotePageProps {
//   prefillSubject?: string;
// }

// interface AttachedFile {
//   name: string;
//   size: number;
// }

// const PROJECT_TYPOLOGIES = [
//   { value: 'skyscraper', label: 'Commercial Skyscraper' },
//   { value: 'hospitality', label: 'Mixed-Use / Hospitality' },
//   { value: 'villa', label: 'Residential Villa Complex' },
//   { value: 'airport', label: 'Airport / Infrastructure' },
//   { value: 'retail', label: 'Flagship Retail / Atrium' },
//   { value: 'cultural', label: 'Cultural & Civic Emblem' },
// ];

// const GLASS_SYSTEMS = [
//   {
//     id: 'low-e',
//     title: 'Insulated Double & Triple Glazing (18–58 mm)',
//     subtitle: 'Double, Triple & Curve IGU up to 2400 × 3600 mm',
//   },
//   {
//     id: 'sentryglas',
//     title: 'PVB, SentryGlas & EVA Lamination (8.76–85 mm)',
//     subtitle: 'Flat humidity-controlled PVB, Acoustic, Mesh & Smart Glass',
//   },
//   {
//     id: 'acoustic',
//     title: 'Flat & Curve Tempered Glass Processing',
//     subtitle: 'Flat (4–19 mm) & Curve (6–12 mm, Max Radius 1000 mm)',
//   },
//   {
//     id: 'ballistic',
//     title: 'Bullet Proof (BR 01 – BR 07) & Fire Rated Glass',
//     subtitle: 'High-security laminated assemblies & Lisec Frame Bonding',
//   },
//   {
//     id: 'curved',
//     title: 'Digital Ceramic Printing (Full, 2D & 3D)',
//     subtitle: 'Full, Design, 2D & 3D ceramic printing up to 2440 × 3600 mm',
//   },
//   {
//     id: 'pdlc',
//     title: 'Sand Blasting, Mirrors & Supply / Installation',
//     subtitle: 'European Sand Blasting, UPVC Windows, Partitions & Skylights',
//   },
// ];

// const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function RequestQuotePage({ prefillSubject }: RequestQuotePageProps) {
//   const [values, setValues] = useState<RfqFormValues>({
//     contactName: '',
//     firmName: '',
//     workEmail: '',
//     contactPhone: '',
//     projectSite: '',
//     projectType: 'skyscraper',
//     selectedSystems: ['low-e', 'sentryglas'],
//     volumeScope: '2500',
//     targetUValue: '',
//     hstRequired: true,
//     engineeringNotes: prefillSubject ? `Inquiry Focus: ${prefillSubject}\n` : '',
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [files, setFiles] = useState<AttachedFile[]>([]);
//   const [fileWarning, setFileWarning] = useState<string | null>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [submittedRef, setSubmittedRef] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const toggleSystem = (id: string) => {
//     setValues((prev) => {
//       const exists = prev.selectedSystems.includes(id);
//       return {
//         ...prev,
//         selectedSystems: exists
//           ? prev.selectedSystems.filter((s) => s !== id)
//           : [...prev.selectedSystems, id],
//       };
//     });
//   };

//   const handleFilesAdded = (fileList: FileList | null) => {
//     if (!fileList) return;
//     setFileWarning(null);
//     const accepted: AttachedFile[] = [];
//     const rejected: string[] = [];

//     Array.from(fileList).forEach((f) => {
//       if (isAcceptedEngineeringFile(f.name, f.size)) {
//         accepted.push({ name: f.name, size: f.size });
//       } else {
//         rejected.push(f.name);
//       }
//     });

//     if (accepted.length > 0) {
//       setFiles((prev) => [...prev, ...accepted]);
//     }
//     if (rejected.length > 0) {
//       setFileWarning(
//         `Skipped unsupported or >50MB file(s): ${rejected.join(', ')}. Accepted: PDF, DWG, DXF, IFC, RVT, XLSX.`,
//       );
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validateRfqForm(values);
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length > 0) {
//       return;
//     }
//     const refCode = generateTenderReference((Date.now() % 9000) + 1000);
//     setSubmittedRef(refCode);
//   };

//   const handleResetRfq = () => {
//     setSubmittedRef(null);
//     setErrors({});
//     setFiles([]);
//     setValues({
//       contactName: '',
//       firmName: '',
//       workEmail: '',
//       contactPhone: '',
//       projectSite: '',
//       projectType: 'skyscraper',
//       selectedSystems: ['low-e', 'sentryglas'],
//       volumeScope: '2500',
//       targetUValue: '',
//       hstRequired: true,
//       engineeringNotes: '',
//     });
//   };

//   return (
//     <div className="flex flex-col w-full bg-canvas text-ink">
//       {/* Header Section */}
//       <section className="relative overflow-hidden w-full px-5 lg:px-12 pt-10 pb-12 bg-canvas border-b border-line mb-8">
//         <LogoPattern variant="light" />
//         <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-5">
//           <div className="flex items-center gap-3">
//             <span className="w-6 h-[2px] bg-burgundy" />
//             <span className="font-mono text-xs uppercase tracking-[0.2em] text-burgundy-light font-bold">
//               Request a Quote
//             </span>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
//             <div className="lg:col-span-8 flex flex-col gap-3">
//               <h1 className="font-display text-3xl sm:text-4xl font-bold text-burgundy leading-tight tracking-tight [text-wrap:balance]">
//                 Architectural Glazing Quotation
//               </h1>
//               <p className="text-base text-muted max-w-2xl">
//                 Submit your glass specifications for structural feasibility and preliminary pricing.
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Main Quotation Grid */}
//       <section className="w-full px-5 lg:px-12 pb-16">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* Left Column: 2-Stage Engineering RFQ Form */}
//           <div className="lg:col-span-12 flex flex-col gap-6">
//             {submittedRef ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.97 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.35, ease: EASE_CURVE }}
//                 className="bg-surface shadow-lg rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center gap-4 border border-line"
//               >
//                 <div className="w-16 h-16 rounded-full bg-burgundy flex items-center justify-center text-white shadow-md">
//                   <span className="material-symbols-outlined text-[36px]">check</span>
//                 </div>
//                 <h2 className="font-display text-2xl sm:text-3xl font-bold text-burgundy">
//                   Quote Request Submitted
//                 </h2>
//                 <p className="text-base text-muted max-w-lg leading-relaxed">
//                   Your architectural specification for{' '}
//                   <strong className="text-burgundy">{values.firmName}</strong> has been routed to Panorama Glass Factory (Sales@panoramaglass.net). Our engineering team will review your requirements and respond within 24-48 hours.
//                 </p>
//                 <div className="bg-canvas px-5 py-2.5 rounded-lg font-mono text-xs text-burgundy-deep font-bold uppercase tracking-widest mt-1 border border-burgundy/30">
//                   TENDER REFERENCE #{submittedRef}
//                 </div>
//                 <button
//                   type="button"
//                   onClick={handleResetRfq}
//                   className="mt-4 inline-flex items-center gap-2 rounded-lg btn btn-secondary px-5 py-2.5 text-sm font-bold cursor-pointer"
//                 >
//                   <span>Submit Another Specification</span>
//                 </button>
//               </motion.div>
//             ) : (
//               <form
//                 onSubmit={handleSubmit}
//                 noValidate
//                 className="bg-surface shadow-md rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-10 border border-line"
//               >
//                 {/* STAGE 01 */}
//                 <div className="flex flex-col gap-5">
//                   <div className="flex items-center gap-3 pb-2 border-b border-line">
//                     <span className="w-7 h-7 rounded bg-burgundy-deep text-sand font-mono text-xs font-bold flex items-center justify-center">
//                       01
//                     </span>
//                     <h2 className="font-display text-xl font-bold text-burgundy">
//                       Project &amp; Client Identity
//                     </h2>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="flex flex-col gap-1.5">
//                       <label htmlFor="contact-name" className="field-label">
//                         Project Principal / Lead Specifier *
//                       </label>
//                       <input
//                         id="contact-name"
//                         type="text"
//                         value={values.contactName}
//                         onChange={(e) => setValues({ ...values, contactName: e.target.value })}
//                         placeholder="e.g. Hassan Musa E Abuhelaiqa"
//                         required
//                         className="field-control"
//                       />
//                       {errors.contactName && (
//                         <span className="text-xs font-semibold text-danger">
//                           {errors.contactName}
//                         </span>
//                       )}
//                     </div>

//                     <div className="flex flex-col gap-1.5">
//                       <label htmlFor="firm-name" className="field-label">
//                         Architectural / Contractor Entity *
//                       </label>
//                       <input
//                         id="firm-name"
//                         type="text"
//                         value={values.firmName}
//                         onChange={(e) => setValues({ ...values, firmName: e.target.value })}
//                         placeholder="Your company name"
//                         required
//                         className="field-control"
//                       />
//                       {errors.firmName && (
//                         <span className="text-xs font-semibold text-danger">
//                           {errors.firmName}
//                         </span>
//                       )}
//                     </div>

//                     <div className="flex flex-col gap-1.5">
//                       <label htmlFor="work-email" className="field-label">
//                         Corporate Email Address *
//                       </label>
//                       <input
//                         id="work-email"
//                         type="email"
//                         value={values.workEmail}
//                         onChange={(e) => setValues({ ...values, workEmail: e.target.value })}
//                         placeholder="name@panoramaglass.net"
//                         required
//                         className="field-control"
//                       />
//                       {errors.workEmail && (
//                         <span className="text-xs font-semibold text-danger">
//                           {errors.workEmail}
//                         </span>
//                       )}
//                     </div>

//                     <div className="flex flex-col gap-1.5">
//                       <label htmlFor="contact-phone" className="field-label">
//                         Direct Line / WhatsApp *
//                       </label>
//                       <div dir="ltr" className="flex items-center gap-2">
//                         <span className="bg-canvas text-burgundy font-mono text-xs font-bold px-3 py-3 rounded-lg select-none shrink-0">
//                           +974 (QAT)
//                         </span>
//                         <input
//                           id="contact-phone"
//                           type="tel"
//                           value={values.contactPhone}
//                           onChange={(e) => setValues({ ...values, contactPhone: e.target.value })}
//                           placeholder="5077 7210"
//                           required
//                           className="field-control"
//                         />
//                       </div>
//                       {errors.contactPhone && (
//                         <span className="text-xs font-semibold text-danger">
//                           {errors.contactPhone}
//                         </span>
//                       )}
//                     </div>

//                     <div className="sm:col-span-2 flex flex-col gap-1.5">
//                       <label htmlFor="project-site" className="field-label">
//                         Erection &amp; Site Delivery Location *
//                       </label>
//                       <select
//                         id="project-site"
//                         value={values.projectSite}
//                         onChange={(e) => setValues({ ...values, projectSite: e.target.value })}
//                         required
//                         className="field-control cursor-pointer"
//                       >
//                         <option value="">Select regional development zone...</option>
//                         <option value="doha">Doha / West Bay</option>
//                         <option value="lusail">Lusail City</option>
//                         <option value="pearl">The Pearl-Qatar</option>
//                         <option value="wakrah">Al Wakrah / Mesaieed</option>
//                         <option value="rayyan">Al Rayyan / Education City</option>
//                         <option value="khor">Al Khor / Ras Laffan</option>
//                       </select>
//                       {errors.projectSite && (
//                         <span className="text-xs font-semibold text-danger">
//                           {errors.projectSite}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* STAGE 02 */}
//                 <div className="flex flex-col gap-5">
//                   <div className="flex items-center gap-3 pb-2 border-b border-line">
//                     <span className="w-7 h-7 rounded bg-burgundy text-white font-mono text-xs font-bold flex items-center justify-center">
//                       02
//                     </span>
//                     <h2 className="font-display text-xl font-bold text-burgundy">
//                       Architectural Glazing Specifications
//                     </h2>
//                   </div>

//                   <div className="flex flex-col gap-2">
//                     <span className="field-label">
//                       Primary Typology Classification
//                     </span>
//                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//                       {PROJECT_TYPOLOGIES.map((typ) => (
//                         <label
//                           key={typ.value}
//                           className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors border has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-burgundy ${
//                             values.projectType === typ.value
//                               ? 'bg-canvas border-burgundy'
//                               : 'bg-surface border-line hover:bg-canvas'
//                           }`}
//                         >
//                           <input
//                             type="radio"
//                             name="project-type"
//                             value={typ.value}
//                             checked={values.projectType === typ.value}
//                             onChange={(e) => setValues({ ...values, projectType: e.target.value })}
//                             className="field-radio"
//                           />
//                           <span className="text-xs font-medium text-burgundy">{typ.label}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-2 pt-1">
//                     <span className="field-label">
//                       Engineered Glass Assemblies
//                     </span>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
//                       {GLASS_SYSTEMS.map((sys) => {
//                         const checked = values.selectedSystems.includes(sys.id);
//                         return (
//                           <label
//                             key={sys.id}
//                             className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors border has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-burgundy ${
//                               checked
//                                 ? 'bg-canvas border-burgundy'
//                                 : 'bg-surface border-line hover:bg-canvas'
//                             }`}
//                           >
//                             <input
//                               type="checkbox"
//                               checked={checked}
//                               onChange={() => toggleSystem(sys.id)}
//                               className="field-checkbox mt-1"
//                             />
//                             <div className="flex flex-col">
//                               <span className="text-xs font-bold text-burgundy">
//                                 {sys.title}
//                               </span>
//                               <span className="text-xs text-muted mt-0.5">
//                                 {sys.subtitle}
//                               </span>
//                             </div>
//                           </label>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
//                     <div className="flex flex-col gap-1.5">
//                       <label htmlFor="volume-scope" className="field-label">
//                         Estimated Total Glazing Area (m²)
//                       </label>
//                       <select
//                         id="volume-scope"
//                         value={values.volumeScope}
//                         onChange={(e) => setValues({ ...values, volumeScope: e.target.value })}
//                         className="field-control"
//                       >
//                         <option value="500">&lt; 500 m² (Bespoke Villa / Boutique Atrium)</option>
//                         <option value="2500">500 – 2,500 m² (Mid-Rise Commercial / Podium)</option>
//                         <option value="10000">2,500 – 10,000 m² (High-Rise Facade Package)</option>
//                         <option value="over10000">&gt; 10,000 m² (Megaproject Multi-Tower Envelope)</option>
//                       </select>
//                     </div>

//                     <div className="flex flex-col gap-1.5">
//                       <label htmlFor="target-uvalue" className="field-label">
//                         Target Glass Thickness / Dimensions (mm)
//                       </label>
//                       <input
//                         id="target-uvalue"
//                         type="text"
//                         value={values.targetUValue}
//                         onChange={(e) => setValues({ ...values, targetUValue: e.target.value })}
//                         placeholder="e.g. 18–58mm IGU, Max 2400×3600mm"
//                         className="field-control"
//                       />
//                     </div>
//                   </div>

//                   <label
//                     htmlFor="hst-required"
//                     className="flex items-center gap-3 p-4 bg-canvas rounded-lg border border-line cursor-pointer has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-burgundy"
//                   >
//                     <input
//                       id="hst-required"
//                       type="checkbox"
//                       checked={values.hstRequired}
//                       onChange={(e) => setValues({ ...values, hstRequired: e.target.checked })}
//                       className="field-checkbox"
//                     />
//                     <div className="flex flex-col">
//                       <span className="text-xs font-bold text-burgundy">
//                         HST / Special Specifications
//                       </span>
//                       <span className="text-xs text-muted">
//                         Additional specifications for HST or special requirements.
//                       </span>
//                     </div>
//                   </label>
//                 </div>

//                 {/* STAGE 03 */}
//                 <div className="flex flex-col gap-4">
//                   <div className="flex items-center gap-3 pb-2 border-b border-line">
//                     <span className="w-7 h-7 rounded bg-burgundy-light text-white font-mono text-xs font-bold flex items-center justify-center">
//                       03
//                     </span>
//                     <h2 className="font-display text-xl font-bold text-burgundy">
//                       Architectural Drawings &amp; BOQ Upload
//                     </h2>
//                   </div>

//                   <div
//                     onDragOver={(e) => {
//                       e.preventDefault();
//                       setIsDragging(true);
//                     }}
//                     onDragLeave={() => setIsDragging(false)}
//                     onDrop={(e) => {
//                       e.preventDefault();
//                       setIsDragging(false);
//                       handleFilesAdded(e.dataTransfer.files);
//                     }}
//                     onClick={() => fileInputRef.current?.click()}
//                     role="button"
//                     tabIndex={0}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' || e.key === ' ') {
//                         e.preventDefault();
//                         fileInputRef.current?.click();
//                       }
//                     }}
//                     className={`rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors border-2 border-dashed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
//                       isDragging
//                         ? 'bg-canvas border-burgundy'
//                         : 'bg-surface border-sand-deep hover:bg-canvas'
//                     }`}
//                   >
//                     <div className="w-12 h-12 rounded-full bg-surface shadow-sm flex items-center justify-center text-burgundy mb-3 border border-line">
//                       <span className="material-symbols-outlined text-[26px]">cloud_upload</span>
//                     </div>
//                     <div className="font-display text-lg font-bold text-burgundy mb-1">
//                       Drag tender files, schedules, or BOQ directly here
//                     </div>
//                     <p className="text-sm text-muted max-w-md mb-3">
//                       Accepted formats:{' '}
//                       <span className="font-mono text-xs text-burgundy font-bold">
//                         PDF, DWG, DXF, IFC, RVT, XLSX
//                       </span>{' '}
//                       (up to 50MB per packet)
//                     </p>
//                     <span className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-lg shadow-sm border border-line text-xs font-bold text-burgundy">
//                       <span className="material-symbols-outlined text-[18px] text-burgundy">
//                         folder_open
//                       </span>
//                       <span>Browse Local Workstation</span>
//                     </span>
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       multiple
//                       accept=".pdf,.dwg,.dxf,.ifc,.rvt,.xlsx,.xls"
//                       onChange={(e) => handleFilesAdded(e.target.files)}
//                       className="sr-only"
//                       aria-label="Upload architectural drawings and BOQ files"
//                     />
//                   </div>

//                   {fileWarning && (
//                     <div className="rounded-lg alert alert-error">
//                       {fileWarning}
//                     </div>
//                   )}

//                   {files.length > 0 && (
//                     <ul className="space-y-2">
//                       {files.map((f, index) => (
//                         <li
//                           key={`${f.name}-${index}`}
//                           className="flex items-center justify-between bg-canvas px-4 py-2.5 rounded-lg text-xs border border-line"
//                         >
//                           <div className="flex items-center gap-2 font-semibold text-burgundy truncate">
//                             <span className="material-symbols-outlined text-burgundy text-[18px]">
//                               description
//                             </span>
//                             <span className="truncate">{f.name}</span>
//                             <span className="font-mono text-muted tabular-nums">
//                               ({formatFileSize(f.size)})
//                             </span>
//                           </div>
//                           <button
//                             type="button"
//                             onClick={() =>
//                               setFiles((prev) => prev.filter((_, idx) => idx !== index))
//                             }
//                             aria-label={`Remove ${f.name}`}
//                             className="text-danger hover:underline font-bold ms-3 shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-crimson"
//                           >
//                             Remove
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   {files.length > 0 && (
//                     <div className="text-xs font-semibold text-burgundy">
//                       {files.length} engineering packet(s) staged for tender review.
//                     </div>
//                   )}
//                 </div>

//                 {/* STAGE 04 */}
//                 <div className="flex flex-col gap-4">
//                   <div className="flex items-center gap-3 pb-2 border-b border-line">
//                     <span className="w-7 h-7 rounded bg-burgundy-deep text-white font-mono text-xs font-bold flex items-center justify-center">
//                       04
//                     </span>
//                     <h2 className="font-display text-xl font-bold text-burgundy">
//                       Specific Structural &amp; Execution Notes
//                     </h2>
//                   </div>

//                   <div className="flex flex-col gap-1.5">
//                     <label htmlFor="engineering-notes" className="field-label">
//                       Facade Windloads, Deflection Limits, Coating Orientation, or Mock-up Requirements
//                     </label>
//                     <textarea
//                       id="engineering-notes"
//                       rows={4}
//                       value={values.engineeringNotes}
//                       onChange={(e) => setValues({ ...values, engineeringNotes: e.target.value })}
//                       placeholder="Detail glass processing criteria: CNC cutting (4–19mm), Curve Tempering (Max Radius 1000mm), PVB/EVA lamination (8.76–85mm), Digital Ceramic Printing, or Supply & Installation scope..."
//                       className="field-control min-h-32 resize-y"
//                     />
//                   </div>
//                 </div>

//                 {/* Submit Section */}
//                 <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
//                   <button
//                     type="submit"
//                     className="glass-sheen btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer group font-display text-base font-bold"
//                   >
//                     <span>Submit RFQ for Technical Evaluation</span>
//                     <span className="material-symbols-outlined text-[20px] text-sand group-hover:translate-x-1 transition-transform rtl:rotate-180">
//                       arrow_forward
//                     </span>
//                   </button>

//                   <span className="text-xs text-muted">
//                     24-48 hour initial response guaranteed
//                   </span>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useRef, useState, type ChangeEvent, type DragEvent, type FormEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { RfqFormValues } from '../types';
import {
  formatFileSize,
  generateTenderReference,
  isAcceptedEngineeringFile,
  validateRfqForm,
} from '../utils/portfolio';

interface RequestQuotePageProps {
  prefillSubject?: string;
}

interface AttachedFile {
  name: string;
  size: number;
}

const PROJECT_TYPOLOGIES = [
  { value: 'skyscraper', label: 'Commercial tower' },
  { value: 'hospitality', label: 'Hospitality / mixed-use' },
  { value: 'villa', label: 'Residential' },
  { value: 'airport', label: 'Infrastructure' },
  { value: 'retail', label: 'Retail / atrium' },
  { value: 'cultural', label: 'Cultural / civic' },
];

const GLASS_SYSTEMS = [
  {
    id: 'low-e',
    title: 'Insulated glazing',
    detail: 'Double, triple and curved IGUs · 18–58 mm',
  },
  {
    id: 'sentryglas',
    title: 'Laminated glass',
    detail: 'PVB, SentryGlas and EVA · 8.76–85 mm',
  },
  {
    id: 'acoustic',
    title: 'Tempered glass',
    detail: 'Flat and curved glass processing',
  },
  {
    id: 'ballistic',
    title: 'Security and fire-rated',
    detail: 'Bullet-resistant and fire-rated assemblies',
  },
  {
    id: 'curved',
    title: 'Digital ceramic printing',
    detail: 'Full, 2D and 3D ceramic printing',
  },
  {
    id: 'pdlc',
    title: 'Specialist glass solutions',
    detail: 'Mirrors, sandblasting, partitions and skylights',
  },
];

const INITIAL_VALUES: RfqFormValues = {
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
};

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function RequestQuotePage({ prefillSubject }: RequestQuotePageProps) {
  const [values, setValues] = useState<RfqFormValues>({
    ...INITIAL_VALUES,
    engineeringNotes: prefillSubject ? `Inquiry focus: ${prefillSubject}\n` : '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const [fileWarning, setFileWarning] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [preparedRef, setPreparedRef] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const glassSystemGroups = [
    { title: 'Performance & safety', ids: ['low-e', 'sentryglas', 'acoustic', 'ballistic'] },
    { title: 'Design & specialist solutions', ids: ['curved', 'pdlc'] },
  ];

  const updateValue = <K extends keyof RfqFormValues>(key: K, value: RfqFormValues[K]) => {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      if (!previous[key as string]) return previous;
      const next = { ...previous };
      delete next[key as string];
      return next;
    });
  };

  const toggleSystem = (id: string) => {
    setValues((previous) => {
      const selected = previous.selectedSystems.includes(id);
      return {
        ...previous,
        selectedSystems: selected
          ? previous.selectedSystems.filter((system) => system !== id)
          : [...previous.selectedSystems, id],
      };
    });
  };

  const handleFilesAdded = (fileList: FileList | null) => {
    if (!fileList) return;
    setFileWarning(null);

    const accepted: AttachedFile[] = [];
    const rejected: string[] = [];

    Array.from(fileList).forEach((file) => {
      if (isAcceptedEngineeringFile(file.name, file.size)) {
        accepted.push({ name: file.name, size: file.size });
      } else {
        rejected.push(file.name);
      }
    });

    if (accepted.length) {
      setFiles((previous) => {
        const existing = new Set(previous.map((file) => `${file.name}-${file.size}`));
        return [
          ...previous,
          ...accepted.filter((file) => !existing.has(`${file.name}-${file.size}`)),
        ];
      });
    }

    if (rejected.length) {
      setFileWarning(
        `These files were skipped: ${rejected.join(', ')}. Use PDF, DWG, DXF, IFC, RVT or XLSX files up to 50 MB each.`,
      );
    }

    // Allow the same file to be selected again after it has been removed.
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    handleFilesAdded(event.target.files);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    handleFilesAdded(event.dataTransfer.files);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateRfqForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalidField = Object.keys(validationErrors)[0];
      document.getElementById(
        ({
          contactName: 'contact-name',
          firmName: 'firm-name',
          workEmail: 'work-email',
          contactPhone: 'contact-phone',
          projectSite: 'project-site',
        } as Record<string, string>)[firstInvalidField] ?? '',
      )?.focus();
      return;
    }

    // This is a local preparation reference only. Connect the RFQ API before
    // presenting this as a submitted or delivered enquiry.
    setPreparedRef(generateTenderReference((Date.now() % 9000) + 1000));
  };

  const handleReset = () => {
    setPreparedRef(null);
    setErrors({});
    setFiles([]);
    setFileWarning(null);
    setValues({
      ...INITIAL_VALUES,
      engineeringNotes: prefillSubject ? `Inquiry focus: ${prefillSubject}\n` : '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative flex min-h-[70vh] w-full flex-col bg-canvas text-ink">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.45, ease: EASE_CURVE }}
        className="relative isolate w-full overflow-hidden border-b border-brand/20 bg-brand-deep px-5 py-9 text-on-dark sm:px-8 sm:py-11 lg:px-12 lg:py-12"
      >
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-clay" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-on-dark/75">
                Project enquiry
              </span>
            </div>
            <h1 className="max-w-3xl break-words font-display text-[clamp(2rem,4.2vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-on-dark [text-wrap:balance]">
              Let&apos;s specify the right glass solution.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-on-dark/80 sm:text-base sm:leading-7">
              Share your project details and glazing requirements. Our team can use this
              information to understand the scope and prepare the next steps.
            </p>
          </div>

        </div>
      </motion.section>

      <section className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-12">
        <div className="mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              {preparedRef ? (
                <motion.section
                  key="prepared"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE_CURVE }}
                  className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-10"
                  aria-live="polite"
                >
                  <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <span className="material-symbols-outlined text-3xl">assignment_turned_in</span>
                    </span>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-clay-deep">
                      Details prepared
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                      Your enquiry details are prepared.
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-ink-muted">
                      Your information passed the form validation. A reference has been
                      generated locally, but this page is not yet connected to an enquiry
                      service, so nothing has been sent to Panorama Glass.
                    </p>
                    <div className="mt-6 w-full rounded-xl border border-line bg-surface-alt px-5 py-4 text-left">
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                        Local preparation reference
                      </span>
                      <p className="mt-1 font-mono text-lg font-bold tracking-wider text-brand">
                        #{preparedRef}
                      </p>
                    </div>
                    <p className="mt-4 text-xs leading-6 text-ink-muted">
                      To submit this enquiry, use the published phone or email contact until
                      online RFQ submission and file upload are connected.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-primary mt-7 inline-flex items-center justify-center px-6 py-3 text-sm font-bold"
                    >
                      Start another enquiry
                    </button>
                  </div>
                </motion.section>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE_CURVE }}
                  className="min-w-0 rounded-2xl border border-line bg-surface shadow-card"
                >
                  <nav aria-label="RFQ form sections" className="sticky top-0 z-20 border-b border-line bg-surface/95 px-4 py-3 backdrop-blur sm:px-8">
                    <ol className="grid grid-cols-4 gap-2">
                      {[
                        ['01', 'Contact', '#rfq-contact'],
                        ['02', 'Project', '#rfq-project'],
                        ['03', 'Glass scope', '#rfq-systems'],
                        ['04', 'Files & notes', '#rfq-files'],
                      ].map(([number, label, href]) => (
                        <li key={number} className="min-w-0">
                          <a href={href} className="group flex min-w-0 items-center gap-2 rounded-md py-1 text-xs font-semibold text-ink-muted transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft font-mono text-[10px] font-bold text-brand">{number}</span>
                            <span className="hidden truncate sm:inline">{label}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                  <section id="rfq-contact" className="scroll-mt-24 p-5 sm:p-8">
                    <SectionHeading
                      number="01"
                      title="Your details"
                      description="Tell us who to contact about this project."
                    />
                    <div className="mt-6 grid gap-x-5 gap-y-5 sm:grid-cols-2">
                      <FormField label="Full name" htmlFor="contact-name" error={errors.contactName}>
                        <input
                          id="contact-name"
                          type="text"
                          autoComplete="name"
                          value={values.contactName}
                          onChange={(event) => updateValue('contactName', event.target.value)}
                          placeholder="Your name"
                          maxLength={120}
                          required
                          className="field-control"
                          aria-invalid={Boolean(errors.contactName)}
                        />
                      </FormField>

                      <FormField label="Company / organisation" htmlFor="firm-name" error={errors.firmName}>
                        <input
                          id="firm-name"
                          type="text"
                          autoComplete="organization"
                          value={values.firmName}
                          onChange={(event) => updateValue('firmName', event.target.value)}
                          placeholder="Company name"
                          maxLength={160}
                          required
                          className="field-control"
                          aria-invalid={Boolean(errors.firmName)}
                        />
                      </FormField>

                      <FormField label="Work email" htmlFor="work-email" error={errors.workEmail}>
                        <input
                          id="work-email"
                          type="email"
                          autoComplete="email"
                          value={values.workEmail}
                          onChange={(event) => updateValue('workEmail', event.target.value)}
                          placeholder="name@company.com"
                          maxLength={254}
                          required
                          className="field-control"
                          aria-invalid={Boolean(errors.workEmail)}
                        />
                      </FormField>

                      <FormField label="Phone / WhatsApp" htmlFor="contact-phone" error={errors.contactPhone}>
                        <div className="flex gap-2" dir="ltr">
                          <span className="inline-flex shrink-0 items-center rounded-lg border border-line bg-surface-alt px-3 text-sm font-semibold text-ink-muted">
                            +974
                          </span>
                          <input
                            id="contact-phone"
                            type="tel"
                            autoComplete="tel"
                            value={values.contactPhone}
                            onChange={(event) => updateValue('contactPhone', event.target.value)}
                            placeholder="Your contact number"
                            maxLength={24}
                            required
                            className="field-control min-w-0"
                            aria-invalid={Boolean(errors.contactPhone)}
                          />
                        </div>
                      </FormField>

                      <FormField label="Project location" htmlFor="project-site" error={errors.projectSite} className="sm:col-span-2">
                        <select
                          id="project-site"
                          value={values.projectSite}
                          onChange={(event) => updateValue('projectSite', event.target.value)}
                          required
                          className="field-control"
                          aria-invalid={Boolean(errors.projectSite)}
                        >
                          <option value="">Select project location</option>
                          <option value="doha">Doha / West Bay</option>
                          <option value="lusail">Lusail City</option>
                          <option value="pearl">The Pearl-Qatar</option>
                          <option value="wakrah">Al Wakrah / Mesaieed</option>
                          <option value="rayyan">Al Rayyan / Education City</option>
                          <option value="khor">Al Khor / Ras Laffan</option>
                        </select>
                      </FormField>
                    </div>
                  </section>

                  <div className="border-t border-line" />

                  <section id="rfq-project" className="scroll-mt-24 p-5 sm:p-8">
                    <SectionHeading
                      number="02"
                      title="Project requirements"
                      description="A few essentials help us understand the scale and application."
                    />

                    <div className="mt-6">
                      <p className="field-label">What type of project is this?</p>
                      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {PROJECT_TYPOLOGIES.map((type) => {
                          const selected = values.projectType === type.value;
                          return (
                            <label
                              key={type.value}
                              className={`flex min-h-12 cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-3 text-sm transition-colors ${
                                selected
                                  ? 'border-brand bg-brand-soft text-brand'
                                  : 'border-line bg-surface text-ink-muted hover:bg-surface-alt'
                              }`}
                            >
                              <input
                                type="radio"
                                name="project-type"
                                value={type.value}
                                checked={selected}
                                onChange={() => updateValue('projectType', type.value)}
                                className="field-radio shrink-0"
                              />
                              <span className={`leading-snug ${selected ? 'font-semibold' : 'font-medium'}`}>
                                {type.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                  </section>

                  <div className="border-t border-line" />

                  <section id="rfq-systems" className="scroll-mt-24 p-5 sm:p-8">
                    <SectionHeading
                      number="03"
                      title="Glass systems & scope"
                      description="Choose the glass solutions and indicate the approximate project scale."
                    />
                    <div className="mt-6">
                      <div className="flex flex-wrap items-end justify-between gap-2">
                        <p className="field-label">Glass systems required</p>
                        <span className="text-xs text-ink-muted">Select all that apply</span>
                      </div>
                      <div className="mt-3 space-y-4">
                        {glassSystemGroups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-muted">{group.title}</p>
                            <div className="grid gap-2 sm:grid-cols-2">
                              {GLASS_SYSTEMS.filter((system) => group.ids.includes(system.id)).map((system) => {
                                const selected = values.selectedSystems.includes(system.id);
                                return (
                            <label
                              key={system.id}
                              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-colors ${
                                selected
                                  ? 'border-brand bg-brand-soft/70'
                                  : 'border-line bg-surface hover:bg-surface-alt'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={selected}
                                onChange={() => toggleSystem(system.id)}
                                className="field-checkbox mt-0.5 shrink-0"
                              />
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-ink">
                                  {system.title}
                                </span>
                                <span className="mt-1 block text-xs leading-5 text-ink-muted">
                                  {system.detail}
                                </span>
                              </span>
                            </label>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <FormField label="Estimated glazing area" htmlFor="volume-scope">
                        <select
                          id="volume-scope"
                          value={values.volumeScope}
                          onChange={(event) => updateValue('volumeScope', event.target.value)}
                          className="field-control"
                        >
                          <option value="500">Under 500 m²</option>
                          <option value="2500">500–2,500 m²</option>
                          <option value="10000">2,500–10,000 m²</option>
                          <option value="over10000">Over 10,000 m²</option>
                        </select>
                      </FormField>

                      <FormField label="Glass thickness / dimensions" htmlFor="target-uvalue">
                        <input
                          id="target-uvalue"
                          type="text"
                          value={values.targetUValue}
                          onChange={(event) => updateValue('targetUValue', event.target.value)}
                          placeholder="e.g. 18–58 mm IGU"
                          maxLength={120}
                          className="field-control"
                        />
                      </FormField>
                    </div>

                    <label className={`mt-6 flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
                      values.hstRequired ? 'border-brand bg-brand-soft/50' : 'border-line bg-surface-alt'
                    }`}>
                      <input
                        id="hst-required"
                        type="checkbox"
                        checked={values.hstRequired}
                        onChange={(event) => updateValue('hstRequired', event.target.checked)}
                        className="field-checkbox mt-0.5 shrink-0"
                      />
                      <span>
                        <span className="block text-sm font-semibold text-ink">
                          Include HST / special specifications
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-ink-muted">
                          Select if heat-soak testing or other special requirements apply.
                        </span>
                      </span>
                    </label>
                  </section>

                  <div className="border-t border-line" />

                  <section id="rfq-files" className="scroll-mt-24 p-5 sm:p-8">
                    <SectionHeading
                      number="04"
                      title="Drawings and project notes"
                      description="Add available documents and any technical context."
                    />

                    <div
                      onDragOver={(event) => {
                        event.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                          setIsDragging(false);
                        }
                      }}
                      onDrop={handleDrop}
                      className={`mt-6 flex flex-col items-center rounded-xl border border-dashed px-5 py-7 text-center transition-colors ${
                        isDragging
                          ? 'border-brand bg-brand-soft'
                          : 'border-line bg-surface-alt hover:border-brand/60 hover:bg-brand-soft/40'
                      }`}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-brand shadow-sm">
                        <span className="material-symbols-outlined text-2xl">upload_file</span>
                      </span>
                      <span className="mt-3 text-sm font-semibold text-ink">
                        Drag and drop your drawings here
                      </span>
                      <span className="mt-1 text-xs leading-5 text-ink-muted">
                        PDF, DWG, DXF, IFC, RVT or XLSX · Maximum 50 MB per file
                      </span>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="btn btn-outline-burgundy mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold"
                      >
                        <span className="material-symbols-outlined text-base">folder_open</span>
                        Browse files
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.dwg,.dxf,.ifc,.rvt,.xlsx,.xls"
                        onChange={handleFileInput}
                        className="sr-only"
                        aria-label="Select engineering files"
                      />
                    </div>

                    {fileWarning && (
                      <p role="alert" className="mt-3 rounded-lg border border-danger/20 bg-danger/5 px-4 py-3 text-xs leading-5 text-danger">
                        {fileWarning}
                      </p>
                    )}

                    {files.length === 0 && (
                      <p className="mt-3 rounded-lg border border-dashed border-line px-4 py-3 text-center text-xs text-ink-muted">
                        No files attached yet. You can continue without drawings and share them later.
                      </p>
                    )}

                    {files.length > 0 && (
                      <ul className="mt-3 divide-y divide-line rounded-lg border border-line">
                        {files.map((file, index) => (
                          <li
                            key={`${file.name}-${file.size}-${index}`}
                            className="flex min-w-0 items-center justify-between gap-3 px-3 py-3 transition-colors hover:bg-surface-alt"
                          >
                            <span className="flex min-w-0 items-center gap-2">
                              <span className="material-symbols-outlined shrink-0 text-lg text-clay-deep">
                                description
                              </span>
                              <span className="min-w-0">
                                <span className="block truncate text-xs font-semibold text-ink">
                                  {file.name}
                                </span>
                                <span className="text-[11px] text-ink-muted">
                                  {formatFileSize(file.size)}
                                </span>
                              </span>
                            </span>
                            <button
                              type="button"
                              onClick={() => setFiles((previous) => previous.filter((_, fileIndex) => fileIndex !== index))}
                              aria-label={`Remove ${file.name}`}
                              className="shrink-0 rounded px-2 py-1 text-xs font-semibold text-danger hover:bg-danger/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6">
                      <FormField label="Additional project / engineering notes" htmlFor="engineering-notes">
                        <textarea
                          id="engineering-notes"
                          rows={4}
                          value={values.engineeringNotes}
                          onChange={(event) => updateValue('engineeringNotes', event.target.value)}
                          placeholder="Share wind loads, performance targets, finishes, installation scope or any other project requirements..."
                          maxLength={5000}
                          className="field-control min-h-28 resize-y"
                        />
                      </FormField>
                    </div>
                  </section>

                
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <aside className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:sticky lg:top-24 lg:grid-cols-1">
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay-deep">
                Helpful project notes
              </p>
              <h3 className="mt-3 text-base font-bold text-ink">Not sure about the specification?</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                Select the closest glass system and provide an approximate area. Our team can clarify detailed performance requirements during the technical discussion.
              </p>
              <div className="mt-4 border-t border-line pt-4">
                <p className="text-xs font-semibold text-ink">Drawings are optional</p>
                <p className="mt-1 text-xs leading-5 text-ink-muted">
                  You can prepare the enquiry without files and share drawings separately.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-brand-deep p-5 text-on-dark">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-dark/65">
                Need to speak to us?
              </p>
              <a href="tel:+97450777210" className="mt-3 block text-lg font-semibold !text-on-dark transition-colors hover:!text-white hover:underline">
                (+974) 50777210
              </a>
              <a href="mailto:info@panoramaglass.net" className="mt-1 block break-words text-sm !text-on-dark/80 transition-colors hover:!text-white hover:underline">
                info@panoramaglass.net
              </a>
              <p className="mt-4 border-t border-on-dark/15 pt-4 text-xs leading-5 text-on-dark/65">
                New Industrial Area, Doha · State of Qatar
              </p>
            </div>

            <p className="px-1 text-[11px] leading-5 text-ink-muted">
              File selection on this page is local only. Files are not uploaded or stored until a secure RFQ upload service is connected.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

interface SectionHeadingProps {
  number: string;
  title: string;
  description: string;
}

function SectionHeading({ number, title, description }: SectionHeadingProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft font-mono text-xs font-bold text-brand">
        {number}
      </span>
      <span className="min-w-0">
        <span className="block font-display text-xl font-bold text-ink">{title}</span>
        <span className="mt-1 block text-xs leading-5 text-ink-muted sm:text-sm">
          {description}
        </span>
      </span>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

function FormField({ label, htmlFor, error, className = '', children }: FormFieldProps) {
  return (
    <div className={`min-w-0 space-y-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="field-label">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-semibold text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
