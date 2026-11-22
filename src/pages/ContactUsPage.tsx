// import { useRef, useState } from 'react';
// import { motion } from 'motion/react';
// import type { ContactFormValues, PageRoute } from '../types';
// import { validateContactForm } from '../utils/portfolio';
// import { LogoPattern } from '../components/LogoPattern';

// interface ContactUsPageProps {
//   onNavigate: (route: PageRoute) => void;
// }

// const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ContactUsPage({ onNavigate }: ContactUsPageProps) {
//   const [values, setValues] = useState<ContactFormValues>({
//     fullName: '',
//     orgName: '',
//     emailAddress: '',
//     contactNumber: '',
//     inquiryType: '',
//     projectScope: '',
//     sampleBox: false,
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validateContactForm(values);
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length > 0) return;

//     setSubmitting(true);
//     window.setTimeout(() => {
//       setSubmitting(false);
//       setSubmitted(true);
//     }, 450);
//   };

//   return (
//     <div className="flex flex-col w-full bg-canvas text-ink">
//       {/* Hero Header Section */}
//       <section className="relative overflow-hidden w-full px-5 lg:px-12 py-10 lg:py-12 bg-canvas">
//         <LogoPattern variant="light" />
//         <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-start space-y-4">
//           <div className="flex items-center gap-3">
            
//             <span className="eyebrow">
//               Contact Us
//             </span>
//           </div>

//           <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-burgundy max-w-4xl tracking-tight leading-tight [text-wrap:balance]">
//             Get in Touch
//           </h1>

//           <p className="text-base text-muted max-w-2xl">
//             Contact Panorama Glass Factory in Doha, Qatar for quotations, orders, and inquiries.
//           </p>

//           {/* Quick Contact Summary Ribbon */}
//           <div className="w-full pt-2">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               <div className="flex items-center gap-3 p-4 bg-canvas rounded-xl border border-line">
//                 <div className="p-2 rounded-lg bg-burgundy/10 text-burgundy flex items-center justify-center shrink-0">
//                   <span className="material-symbols-outlined text-[18px]">location_on</span>
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="font-display text-sm text-burgundy font-bold">
//                     New Industrial Area, Doha
//                   </span>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 p-4 bg-canvas rounded-xl border border-line">
//                 <div className="p-2 rounded-lg bg-burgundy/10 text-burgundy flex items-center justify-center shrink-0">
//                   <span className="material-symbols-outlined text-[18px]">call</span>
//                 </div>
//                 <div className="flex flex-col">
//                   <a
//                     href="tel:+97450777210"
//                     className="font-display text-sm text-burgundy font-bold hover:text-burgundy-light transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded"
//                   >
//                     (+974) 50777210
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 p-4 bg-canvas rounded-xl border border-line">
//                 <div className="p-2 rounded-lg bg-burgundy/10 text-burgundy flex items-center justify-center shrink-0">
//                   <span className="material-symbols-outlined text-[18px]">email</span>
//                 </div>
//                 <div className="flex flex-col min-w-0">
//                   <a
//                     href="mailto:info@panoramaglass.net"
//                     className="font-display text-sm text-burgundy font-bold hover:text-burgundy-light transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded"
//                   >
//                     info@panoramaglass.net
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 p-4 bg-canvas rounded-xl border border-line">
//                 <div className="p-2 rounded-lg bg-burgundy/10 text-burgundy flex items-center justify-center shrink-0">
//                   <span className="material-symbols-outlined text-[18px]">schedule</span>
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="font-display text-sm text-ink font-bold tabular-nums">
//                     Sun-Thu: 8AM-5PM
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Split Architecture View */}
//       <section className="w-full px-5 lg:px-12 py-10 bg-canvas border-t border-line">
//         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
//           {/* Left Column: Interactive Technical Contact Form */}
//           <div className="lg:col-span-7 bg-surface rounded-xl p-6 sm:p-8 lg:p-10 shadow-card border border-line">
//             <div className="pb-5 border-b border-line space-y-1">
//               <h2 className="font-display text-2xl sm:text-3xl font-bold text-burgundy">
//                 Contact Form
//               </h2>
//             </div>

//             <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5 mt-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-1.5">
//                   <label htmlFor="fullName" className="field-label">
//                     Full Name <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     id="fullName"
//                     type="text"
//                     value={values.fullName}
//                     onChange={(e) => setValues({ ...values, fullName: e.target.value })}
//                     placeholder="Hassan Musa E Abuhelaiqa"
//                     required
//                     className="field-control"
//                   />
//                   {errors.fullName && (
//                     <span className="text-xs font-semibold text-danger">{errors.fullName}</span>
//                   )}
//                 </div>

//                 <div className="space-y-1.5">
//                   <label htmlFor="orgName" className="field-label">
//                     Company
//                   </label>
//                   <input
//                     id="orgName"
//                     type="text"
//                     value={values.orgName}
//                     onChange={(e) => setValues({ ...values, orgName: e.target.value })}
//                     placeholder="Your company name"
//                     className="field-control"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-1.5">
//                   <label htmlFor="emailAddress" className="field-label">
//                     Corporate Email Address <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     id="emailAddress"
//                     type="email"
//                     value={values.emailAddress}
//                     onChange={(e) => setValues({ ...values, emailAddress: e.target.value })}
//                     placeholder="name@panoramaglass.net"
//                     required
//                     className="field-control"
//                   />
//                   {errors.emailAddress && (
//                     <span className="text-xs font-semibold text-danger">
//                       {errors.emailAddress}
//                     </span>
//                   )}
//                 </div>

//                 <div className="space-y-1.5">
//                   <label htmlFor="contactNumber" className="field-label">
//                     Contact Number <span className="text-danger">*</span>
//                   </label>
//                   <div dir="ltr" className="relative flex items-center">
//                     <span className="absolute left-3.5 font-mono text-xs text-muted font-bold">
//                       +974
//                     </span>
//                     <input
//                       id="contactNumber"
//                       type="tel"
//                       value={values.contactNumber}
//                       onChange={(e) => setValues({ ...values, contactNumber: e.target.value })}
//                       placeholder="5077 7210"
//                       required
//                       className="field-control ps-14 pe-4"
//                     />
//                   </div>
//                   {errors.contactNumber && (
//                     <span className="text-xs font-semibold text-danger">
//                       {errors.contactNumber}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <label htmlFor="inquiryType" className="field-label">
//                   Subject / Inquiry Type <span className="text-danger">*</span>
//                 </label>
//                 <div className="relative">
//                   <select
//                     id="inquiryType"
//                     value={values.inquiryType}
//                     onChange={(e) => setValues({ ...values, inquiryType: e.target.value })}
//                     required
//                     className="field-control appearance-none cursor-pointer pe-10"
//                   >
//                     <option value="">Select Technical Discipline</option>
//                     <option value="architectural-advisory">
//                       Glass &amp; Aluminium Trading Enquiry
//                     </option>
//                     <option value="factory-inspection">
//                       Factory Inspection &amp; Facility Tour (New Industrial Area, Doha)
//                     </option>
//                     <option value="tender-procurement">
//                       Glass Processing &amp; Curve Glazing Quotation
//                     </option>
//                     <option value="commercial-general">
//                       Supply &amp; Installation Services
//                     </option>
//                     <option value="careers-vendor">
//                       General &amp; Accessories Inquiries
//                     </option>
//                   </select>
//                   <span className="material-symbols-outlined absolute end-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
//                     expand_more
//                   </span>
//                 </div>
//                 {errors.inquiryType && (
//                   <span className="text-xs font-semibold text-danger">
//                     {errors.inquiryType}
//                   </span>
//                 )}
//               </div>

//               <div className="space-y-1.5">
//                 <label htmlFor="projectScope" className="field-label">
//                   Project Scope &amp; Detailed Specifications
//                 </label>
//                 <textarea
//                   id="projectScope"
//                   rows={4}
//                   value={values.projectScope}
//                   onChange={(e) => setValues({ ...values, projectScope: e.target.value })}
//                   placeholder="Mention glass dimensions, thickness (4–85 mm), flat or curve tempering, lamination, or installation requirements..."
//                   className="field-control resize-y min-h-32"
//                 />
//               </div>

//               <label
//                 htmlFor="sampleBox"
//                 className="p-4 rounded-xl bg-canvas border border-line flex items-start gap-3 cursor-pointer select-none"
//               >
//                 <input
//                   id="sampleBox"
//                   type="checkbox"
//                   checked={values.sampleBox}
//                   onChange={(e) => setValues({ ...values, sampleBox: e.target.checked })}
//                   className="field-checkbox mt-1"
//                 />
//                 <div>
//                   <span className="font-display text-sm text-burgundy font-bold block">
//                     Request a Physical Glass Sample Presentation Box
//                   </span>
//                   <span className="text-xs text-muted block mt-0.5">
//                     Request physical glass samples for your project evaluation.
//                   </span>
//                 </div>
//               </label>

//               <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="glass-sheen btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display text-sm font-bold px-8 py-3.5 cursor-pointer disabled:opacity-70"
//                 >
//                   <span>
//                     {submitting
//                       ? 'Transmitting...'
//                       : submitted
//                         ? 'Message Sent'
//                         : 'Send Message'}
//                   </span>
//                   <span className="material-symbols-outlined text-[20px] text-sand group-hover:translate-x-1 transition-transform rtl:rotate-180">
//                     {submitted ? 'done_all' : 'arrow_forward'}
//                   </span>
//                 </button>

//                 <span className="text-xs text-muted">
//                   We respond within 24-48 hours.
//                 </span>
//               </div>

//               {submitted && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.25, ease: EASE_CURVE }}
//                   className="p-4 rounded-lg bg-canvas text-burgundy-deep space-y-1 border border-burgundy/30"
//                 >
//                   <div className="flex items-center gap-2 text-burgundy-light font-display text-sm font-bold">
//                     <span className="material-symbols-outlined">check_circle</span>
//                     <span>Inquiry Dispatched Successfully</span>
//                   </div>
//                   <p className="text-xs text-ink">
//                     Panorama Glass Factory sales &amp; technical desk has received your inquiry
//                     {values.sampleBox ? ' (including your Sample Box dispatch request)' : ''}. We will respond within 24-48 hours.
//                   </p>
//                 </motion.div>
//               )}
//             </form>
//           </div>

//           {/* Right Column: Plant Locations & Specialized Desks */}
//           <div className="lg:col-span-5 flex flex-col space-y-4">
//             {/* Hub 1 */}
//             <div className="bg-surface rounded-xl p-4 shadow-card border border-line">
//               <div className="flex items-center justify-between pb-2 font-mono text-xs">
//                 <span className="text-burgundy-light font-bold uppercase">
//                   HQ &amp; Processing Factory
//                 </span>
//                 <span className="text-muted flex items-center gap-1 font-semibold">
//                   <span className="material-symbols-outlined text-[16px] text-burgundy-light">
//                     location_on
//                   </span>{' '}
//                   Doha
//                 </span>
//               </div>
//               <h3 className="font-display text-base font-bold text-burgundy">
//                 Panorama Glass Factory
//               </h3>
//               <p className="text-xs text-muted mt-1">
//                 St 26, Bldg 30, Area 81, New Industrial Area, Doha
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 text-xs">
//                 <a
//                   href="tel:+97450777210"
//                   className="flex items-center gap-2 text-burgundy hover:text-burgundy-light transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded"
//                 >
//                   <span className="material-symbols-outlined text-[18px] text-burgundy-light">phone</span>
//                   <span>(+974) 50777210</span>
//                 </a>
//                 <a
//                   href="mailto:Sales@panoramaglass.net"
//                   className="flex items-center gap-2 text-burgundy hover:text-burgundy-light transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded"
//                 >
//                   <span className="material-symbols-outlined text-[18px] text-burgundy-light">mail</span>
//                   <span>Sales@panoramaglass.net</span>
//                 </a>
//               </div>
//             </div>

//             {/* Hub 2 */}
//             <div className="bg-surface rounded-xl p-4 shadow-card border border-line">
//               <div className="flex items-center justify-between pb-2 font-mono text-xs">
//                 <span className="text-burgundy-light font-bold uppercase">
//                   Trading &amp; Supply
//                 </span>
//                 <span className="text-muted flex items-center gap-1 font-semibold">
//                   <span className="material-symbols-outlined text-[16px] text-burgundy-light">
//                     inventory_2
//                   </span>{' '}
//                   500+ Containers
//                 </span>
//               </div>
//               <h3 className="font-display text-base font-bold text-burgundy">
//                 Glass, Aluminium &amp; Accessories Trading
//               </h3>
//               <p className="text-xs text-muted mt-1">
//                 New Industrial Area, Doha
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 text-xs">
//                 <a
//                   href="tel:+97470444877"
//                   className="flex items-center gap-2 text-burgundy hover:text-burgundy-light transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded"
//                 >
//                   <span className="material-symbols-outlined text-[18px] text-burgundy-light">phone</span>
//                   <span>(+974) 70444877</span>
//                 </a>
//                 <a
//                   href="mailto:Order@panoramaglass.net"
//                   className="flex items-center gap-2 text-burgundy hover:text-burgundy-light transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded"
//                 >
//                   <span className="material-symbols-outlined text-[18px] text-burgundy-light">mail</span>
//                   <span>Order@panoramaglass.net</span>
//                 </a>
//               </div>
//             </div>

//             {/* Direct Specialized Desks */}
//             <div className="bg-surface rounded-xl p-4 shadow-card border border-line">
//               <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-burgundy-light font-bold pb-3">
//                 Direct Specialized Desks
//               </div>
//               <div className="divide-y divide-line space-y-3">
//                 <div className="pt-1 flex items-center justify-between gap-2">
//                   <div className="flex flex-col">
//                     <span className="text-xs font-bold text-burgundy">
//                       Sales Enquiry Desk
//                     </span>
//                     <span className="text-xs text-muted">Quotations &amp; Product Enquiries</span>
//                   </div>
//                   <a
//                     href="mailto:Sales@panoramaglass.net"
//                     className="px-2.5 py-1 rounded bg-burgundy/10 hover:bg-burgundy/20 font-mono text-[11px] font-bold text-burgundy transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
//                   >
//                     Sales@panoramaglass.net
//                   </a>
//                 </div>

//                 <div className="pt-3 flex items-center justify-between gap-2">
//                   <div className="flex flex-col">
//                     <span className="text-xs font-bold text-burgundy">
//                       Order &amp; Processing Desk
//                     </span>
//                     <span className="text-xs text-muted">Production Orders &amp; Dispatch</span>
//                   </div>
//                   <a
//                     href="mailto:Order@panoramaglass.net"
//                     className="px-2.5 py-1 rounded bg-burgundy/10 hover:bg-burgundy/20 font-mono text-[11px] font-bold text-burgundy transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
//                   >
//                     Order@panoramaglass.net
//                   </a>
//                 </div>

//                 <div className="pt-3 flex items-center justify-between gap-2">
//                   <div className="flex flex-col">
//                     <span className="text-xs font-bold text-burgundy">
//                       General &amp; Other Enquiries
//                     </span>
//                     <span className="text-xs text-muted">ISO Documentation &amp; Administration</span>
//                   </div>
//                   <a
//                     href="mailto:info@panoramaglass.net"
//                     className="px-2.5 py-1 rounded bg-burgundy/10 hover:bg-burgundy/20 font-mono text-[11px] font-bold text-burgundy transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
//                   >
//                     info@panoramaglass.net
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Pre-Footer Urgent Quotation Callout */}
//       <section className="w-full px-5 lg:px-12 py-12 bg-canvas border-t border-line">
//         <div className="reveal max-w-[1200px] mx-auto relative overflow-hidden rounded-2xl card-dark p-8 lg:p-12 border border-sand/25 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="absolute top-0 inset-x-0 h-1.5 bg-burgundy" />
//           <LogoPattern variant="dark" />
//           <div className="relative z-10 space-y-2 max-w-2xl text-center md:text-start">
//             <span className="font-mono text-xs uppercase tracking-[0.2em] text-sand font-bold">
//               Sales &amp; Order Desk
//             </span>
//             <h2 className="font-display text-2xl sm:text-3xl text-white font-bold">
//               Looking for an Immediate Glass &amp; Aluminium Quotation?
//             </h2>
//             <p className="text-sm sm:text-base text-sand/80">
//               Submit your glass processing requirements, dimensions, and BOQ schedules directly to Sales@panoramaglass.net or Order@panoramaglass.net.
//             </p>
//           </div>

//           <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
//             <button
//               type="button"
//               onClick={() => onNavigate('request-a-quote')}
//               className="glass-sheen btn btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display text-sm font-bold px-7 py-3.5 cursor-pointer"
//             >
//               <span>Request a Quote</span>
//               <span className="material-symbols-outlined text-[20px] text-burgundy-deep group-hover:translate-x-1 transition-transform rtl:rotate-180">
//                 arrow_forward
//               </span>
//             </button>
//             <a
//               href="tel:+97450777210"
//               className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg btn btn-outline-light flex-1 sm:w-auto"
//             >
//               <span className="material-symbols-outlined text-[20px] text-sand">
//                 phone_in_talk
//               </span>
//               <span>Call Desk</span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import type { ContactFormValues, PageRoute } from '../types';
import { validateContactForm } from '../utils/portfolio';
import { LogoPattern } from '../components/LogoPattern';

interface ContactUsPageProps {
  onNavigate: (route: PageRoute) => void;
}

const INITIAL_VALUES: ContactFormValues = {
  fullName: '',
  orgName: '',
  emailAddress: '',
  contactNumber: '',
  inquiryType: '',
  projectScope: '',
  sampleBox: false,
};

const CONTACT_DETAILS = [
  {
    label: 'Factory location',
    value: 'New Industrial Area, Doha',
    icon: 'location_on',
    href: undefined,
  },
  {
    label: 'Main contact',
    value: '(+974) 50777210',
    icon: 'call',
    href: 'tel:+97450777210',
  },
  {
    label: 'General enquiries',
    value: 'info@panoramaglass.net',
    icon: 'mail',
    href: 'mailto:info@panoramaglass.net',
  },
  {
    label: 'Business hours',
    value: 'Sun–Thu: 8AM–5PM',
    icon: 'schedule',
    href: undefined,
  },
];

const SPECIALIZED_DESKS = [
  {
    title: 'Sales Enquiry Desk',
    description: 'Quotations & product enquiries',
    email: 'Sales@panoramaglass.net',
  },
  {
    title: 'Order & Processing Desk',
    description: 'Production orders & dispatch',
    email: 'Order@panoramaglass.net',
  },
  {
    title: 'General & Other Enquiries',
    description: 'Documentation & administration',
    email: 'info@panoramaglass.net',
  },
];

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const contactLinkClass =
  'inline-flex min-w-0 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

export function ContactUsPage({ onNavigate }: ContactUsPageProps) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formNotice, setFormNotice] = useState<'idle' | 'invalid' | 'not-configured'>('idle');

  const updateValue = <K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setFormNotice('idle');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFormNotice('invalid');
      return;
    }

    // The supplied component contains no API/action for sending enquiries.
    // Do not display a false "sent" confirmation until a real endpoint is connected.
    setFormNotice('not-configured');
  };

  return (
    <main className="flex w-full flex-col bg-canvas text-ink">
      {/* PAGE INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.45, ease: EASE_CURVE }}
        className="relative isolate overflow-hidden border-b border-line bg-canvas px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
      >
        <LogoPattern variant="light" />
        <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-start">
          <span className="eyebrow mb-4">Contact Panorama Glass</span>
          <h1 className="max-w-4xl font-display text-3xl font-bold tracking-tight text-brand [text-wrap:balance] sm:text-4xl lg:text-5xl">
            Let’s Discuss Your Glass Requirements
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-muted sm:text-base">
            Contact Panorama Glass Factory in Doha, Qatar for quotations, orders, technical discussions and general enquiries.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {CONTACT_DETAILS.map((detail) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-brand-soft text-brand">
                    <span aria-hidden="true" className="material-symbols-outlined text-xl">
                      {detail.icon}
                    </span>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                      {detail.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold text-brand">
                      {detail.value}
                    </span>
                  </span>
                </>
              );

              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex min-h-[84px] items-center gap-3 rounded-xl border border-line bg-surface p-4 shadow-card transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={detail.label}
                  className="flex min-h-[84px] items-center gap-3 rounded-xl border border-line bg-surface p-4 shadow-card"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CONTACT FORM AND CONTACT ROUTING */}
      <section
        aria-label="Contact form and company contact information"
        className="border-b border-line bg-surface px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-7 lg:col-span-7 lg:p-9">
            <div className="border-b border-line pb-5">
              <span className="eyebrow mb-3">Send an enquiry</span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand sm:text-3xl">
                Contact Form
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                Share your contact details and project requirements. Fields marked with <span className="font-bold text-danger">*</span> are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="min-w-0 space-y-2">
                  <label htmlFor="fullName" className="field-label">
                    Full name <span className="text-danger">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={(event) => updateValue('fullName', event.target.value)}
                    placeholder="Your full name"
                    required
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className="field-control"
                  />
                  {errors.fullName && (
                    <p id="fullName-error" role="alert" className="text-xs font-semibold text-danger">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="min-w-0 space-y-2">
                  <label htmlFor="orgName" className="field-label">Company</label>
                  <input
                    id="orgName"
                    name="orgName"
                    type="text"
                    autoComplete="organization"
                    value={values.orgName}
                    onChange={(event) => updateValue('orgName', event.target.value)}
                    placeholder="Your company name"
                    className="field-control"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="min-w-0 space-y-2">
                  <label htmlFor="emailAddress" className="field-label">
                    Corporate email <span className="text-danger">*</span>
                  </label>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={values.emailAddress}
                    onChange={(event) => updateValue('emailAddress', event.target.value)}
                    placeholder="name@company.com"
                    required
                    aria-invalid={Boolean(errors.emailAddress)}
                    aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                    className="field-control"
                  />
                  {errors.emailAddress && (
                    <p id="emailAddress-error" role="alert" className="text-xs font-semibold text-danger">
                      {errors.emailAddress}
                    </p>
                  )}
                </div>

                <div className="min-w-0 space-y-2">
                  <label htmlFor="contactNumber" className="field-label">
                    Contact number <span className="text-danger">*</span>
                  </label>
                  <div dir="ltr" className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center font-mono text-xs font-bold text-ink-muted">
                      +974
                    </span>
                    <input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      autoComplete="tel-national"
                      inputMode="tel"
                      value={values.contactNumber}
                      onChange={(event) => updateValue('contactNumber', event.target.value)}
                      placeholder="Enter your number"
                      required
                      aria-invalid={Boolean(errors.contactNumber)}
                      aria-describedby={errors.contactNumber ? 'contactNumber-error' : undefined}
                      className="field-control pl-14"
                    />
                  </div>
                  {errors.contactNumber && (
                    <p id="contactNumber-error" role="alert" className="text-xs font-semibold text-danger">
                      {errors.contactNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiryType" className="field-label">
                  Subject / inquiry type <span className="text-danger">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={values.inquiryType}
                  onChange={(event) => updateValue('inquiryType', event.target.value)}
                  required
                  aria-invalid={Boolean(errors.inquiryType)}
                  aria-describedby={errors.inquiryType ? 'inquiryType-error' : undefined}
                  className="field-control"
                >
                  <option value="">Select an enquiry type</option>
                  <option value="architectural-advisory">Glass &amp; aluminium trading enquiry</option>
                  <option value="factory-inspection">Factory inspection &amp; facility tour</option>
                  <option value="tender-procurement">Glass processing &amp; curved glazing quotation</option>
                  <option value="commercial-general">Supply &amp; installation services</option>
                  <option value="careers-vendor">General &amp; accessories enquiries</option>
                </select>
                {errors.inquiryType && (
                  <p id="inquiryType-error" role="alert" className="text-xs font-semibold text-danger">
                    {errors.inquiryType}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="projectScope" className="field-label">
                  Project scope &amp; specifications
                </label>
                <textarea
                  id="projectScope"
                  name="projectScope"
                  rows={5}
                  value={values.projectScope}
                  onChange={(event) => updateValue('projectScope', event.target.value)}
                  placeholder="Share glass dimensions, thickness, flat or curved tempering, lamination, quantities or installation requirements..."
                  className="field-control min-h-32 resize-y"
                />
              </div>

              <label
                htmlFor="sampleBox"
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-canvas p-4 transition-colors hover:border-brand"
              >
                <input
                  id="sampleBox"
                  name="sampleBox"
                  type="checkbox"
                  checked={values.sampleBox}
                  onChange={(event) => updateValue('sampleBox', event.target.checked)}
                  className="field-checkbox mt-1"
                />
                <span>
                  <span className="block font-display text-sm font-bold text-brand">
                    Request a physical glass sample presentation box
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-ink-muted">
                    Request physical glass samples for your project evaluation.
                  </span>
                </span>
              </label>

              <div className="flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  <span>Review enquiry</span>
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                
              </div>

              {formNotice === 'invalid' && (
                <p role="alert" className="rounded-lg border border-danger/30 bg-danger/10 p-3 text-sm text-danger">
                  Please review the highlighted fields before continuing.
                </p>
              )}

              {formNotice === 'not-configured' && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: EASE_CURVE }}
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-warning/30 bg-warning/10 p-4 text-sm text-ink"
                >
                  <p className="font-semibold">Your details passed the form validation.</p>
                  <p className="mt-1 text-xs leading-5 text-ink-muted">
                    Online submission is not connected in this page yet. Please use the email or telephone contact details until the enquiry API is integrated.
                  </p>
                </motion.div>
              )}
            </form>
          </div>

          {/* CONTACT ROUTING */}
          <aside className="flex min-w-0 flex-col gap-5 lg:col-span-5">
            <div className="rounded-2xl border border-line bg-canvas p-5 sm:p-6">
              <span className="eyebrow mb-3">Visit our facility</span>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-xl font-bold text-brand">Panorama Glass Factory</h2>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    St 26, Bldg 30, Area 81, New Industrial Area, Doha, Qatar
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <span aria-hidden="true" className="material-symbols-outlined text-xl">factory</span>
                </span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 border-t border-line pt-4 sm:grid-cols-2">
                <a href="tel:+97450777210" className={contactLinkClass}>
                  <span aria-hidden="true" className="material-symbols-outlined">call</span>
                  <span>(+974) 50777210</span>
                </a>
                <a href="mailto:Sales@panoramaglass.net" className={contactLinkClass}>
                  <span aria-hidden="true" className="material-symbols-outlined">mail</span>
                  <span className="break-all">Sales@panoramaglass.net</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-canvas p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="eyebrow mb-2">Trading &amp; supply</span>
                  <h2 className="font-display text-lg font-bold text-brand">
                    Glass, Aluminium &amp; Accessories
                  </h2>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <span aria-hidden="true" className="material-symbols-outlined text-xl">inventory_2</span>
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-muted">New Industrial Area, Doha</p>
              <a href="tel:+97470444877" className={`${contactLinkClass} mt-4 border-t border-line pt-4`}>
                <span aria-hidden="true" className="material-symbols-outlined">call</span>
                <span>(+974) 70444877</span>
              </a>
              <a href="mailto:Order@panoramaglass.net" className={`${contactLinkClass} mt-3`}>
                <span aria-hidden="true" className="material-symbols-outlined">mail</span>
                <span className="break-all">Order@panoramaglass.net</span>
              </a>
            </div>

            <div className="rounded-2xl border border-line bg-canvas p-5 sm:p-6">
              <span className="eyebrow mb-4">Direct specialised desks</span>
              <div className="divide-y divide-line">
                {SPECIALIZED_DESKS.map((desk) => (
                  <div key={desk.title} className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-brand">{desk.title}</h3>
                      <p className="mt-1 text-xs text-ink-muted">{desk.description}</p>
                    </div>
                    <a
                      href={`mailto:${desk.email}`}
                      className="max-w-full break-all text-xs font-semibold text-clay-deep underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-right"
                    >
                      {desk.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-canvas px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="card-dark relative mx-auto flex max-w-7xl flex-col items-start gap-7 overflow-hidden p-7 sm:p-9 md:flex-row md:items-center md:justify-between lg:p-12">
          <LogoPattern variant="dark" />
          <div className="relative z-10 max-w-2xl">
            <span className="eyebrow eyebrow--on-dark mb-3">Sales &amp; order desk</span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-dark sm:text-3xl">
              Looking for an Immediate Glass &amp; Aluminium Quotation?
            </h2>
            <p className="mt-3 text-sm leading-7 text-on-dark/85">
              Send your glass processing requirements, dimensions and BOQ schedules to our sales or order teams.
            </p>
          </div>

          <div className="relative z-10 flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('request-a-quote')}
              className="btn btn-light w-full sm:w-auto"
            >
              <span>Request a quote</span>
              <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <a href="tel:+97450777210" className="btn btn-outline-light w-full sm:w-auto">
              <span aria-hidden="true" className="material-symbols-outlined text-lg">phone_in_talk</span>
              <span>Call desk</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
