import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import type { ContactFormValues, PageRoute } from '../types';
import { validateContactForm } from '../utils/portfolio';
import { LogoPattern } from '../components/LogoPattern';

interface ContactUsPageProps {
  onNavigate: (route: PageRoute) => void;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactUsPage({ onNavigate }: ContactUsPageProps) {
  const [values, setValues] = useState<ContactFormValues>({
    fullName: '',
    orgName: '',
    emailAddress: '',
    contactNumber: '',
    inquiryType: '',
    projectScope: '',
    sampleBox: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-[#0f172a]">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden w-full px-5 lg:px-12 py-10 lg:py-12 bg-logo-fins">
        <LogoPattern variant="light" />
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-start space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#0284c7]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
              Contact Us
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0b192c] max-w-4xl tracking-tight leading-tight [text-wrap:balance]">
            Get in Touch
          </h1>

          <p className="text-base text-[#475569] max-w-2xl">
            Contact Panorama Glass Factory in Doha, Qatar for quotations, orders, and inquiries.
          </p>

          {/* Quick Contact Summary Ribbon */}
          <div className="w-full pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-sm text-[#0b192c] font-bold">
                    New Industrial Area, Doha
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#ecfeff] text-[#0e7490] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </div>
                <div className="flex flex-col">
                  <a
                    href="tel:+97450777210"
                    className="font-display text-sm text-[#0b192c] font-bold hover:text-[#0284c7] transition-colors tabular-nums"
                  >
                    (+974) 50777210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-100 text-[#0b192c] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">email</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <a
                    href="mailto:info@panoramaglass.net"
                    className="font-display text-sm text-[#0b192c] font-bold hover:text-[#0284c7] transition-colors truncate"
                  >
                    info@panoramaglass.net
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#e0f2fe] text-[#0369a1] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-sm text-[#0b192c] font-bold tabular-nums">
                    Sun-Thu: 8AM-5PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Split Architecture View */}
      <section className="w-full px-5 lg:px-12 py-10 bg-[#f1f5f9] border-t border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Technical Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200">
            <div className="pb-5 border-b border-slate-200 space-y-1">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0b192c]">
                Contact Form
              </h2>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#0b192c]">
                    Full Name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={values.fullName}
                    onChange={(e) => setValues({ ...values, fullName: e.target.value })}
                    placeholder="Hassan Musa E Abuhelaiqa"
                    required
                    className="w-full px-4 py-3 bg-[#f8fafc] rounded-lg text-sm text-[#0f172a] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                  />
                  {errors.fullName && (
                    <span className="text-xs font-semibold text-[#dc2626]">{errors.fullName}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="orgName" className="block text-xs font-semibold text-[#0b192c]">
                    Company
                  </label>
                  <input
                    id="orgName"
                    type="text"
                    value={values.orgName}
                    onChange={(e) => setValues({ ...values, orgName: e.target.value })}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-[#f8fafc] rounded-lg text-sm text-[#0f172a] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="emailAddress" className="block text-xs font-semibold text-[#0b192c]">
                    Corporate Email Address <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    value={values.emailAddress}
                    onChange={(e) => setValues({ ...values, emailAddress: e.target.value })}
                    placeholder="name@panoramaglass.net"
                    required
                    className="w-full px-4 py-3 bg-[#f8fafc] rounded-lg text-sm text-[#0f172a] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                  />
                  {errors.emailAddress && (
                    <span className="text-xs font-semibold text-[#dc2626]">
                      {errors.emailAddress}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contactNumber" className="block text-xs font-semibold text-[#0b192c]">
                    Contact Number <span className="text-[#dc2626]">*</span>
                  </label>
                  <div dir="ltr" className="relative flex items-center">
                    <span className="absolute left-3.5 font-mono text-xs text-[#475569] font-bold">
                      +974
                    </span>
                    <input
                      id="contactNumber"
                      type="tel"
                      value={values.contactNumber}
                      onChange={(e) => setValues({ ...values, contactNumber: e.target.value })}
                      placeholder="5077 7210"
                      required
                      className="w-full pl-14 pr-4 py-3 bg-[#f8fafc] rounded-lg text-sm text-[#0f172a] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                    />
                  </div>
                  {errors.contactNumber && (
                    <span className="text-xs font-semibold text-[#dc2626]">
                      {errors.contactNumber}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="inquiryType" className="block text-xs font-semibold text-[#0b192c]">
                  Subject / Inquiry Type <span className="text-[#dc2626]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="inquiryType"
                    value={values.inquiryType}
                    onChange={(e) => setValues({ ...values, inquiryType: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#f8fafc] rounded-lg text-sm text-[#0f172a] border border-slate-300 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="">Select Technical Discipline</option>
                    <option value="architectural-advisory">
                      Glass &amp; Aluminium Trading Enquiry
                    </option>
                    <option value="factory-inspection">
                      Factory Inspection &amp; Facility Tour (New Industrial Area, Doha)
                    </option>
                    <option value="tender-procurement">
                      Glass Processing &amp; Curve Glazing Quotation
                    </option>
                    <option value="commercial-general">
                      Supply &amp; Installation Services
                    </option>
                    <option value="careers-vendor">
                      General &amp; Accessories Inquiries
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute end-3.5 top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none">
                    expand_more
                  </span>
                </div>
                {errors.inquiryType && (
                  <span className="text-xs font-semibold text-[#dc2626]">
                    {errors.inquiryType}
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="projectScope" className="block text-xs font-semibold text-[#0b192c]">
                  Project Scope &amp; Detailed Specifications
                </label>
                <textarea
                  id="projectScope"
                  rows={4}
                  value={values.projectScope}
                  onChange={(e) => setValues({ ...values, projectScope: e.target.value })}
                  placeholder="Mention glass dimensions, thickness (4–85 mm), flat or curve tempering, lamination, or installation requirements..."
                  className="w-full px-4 py-3 bg-[#f8fafc] rounded-lg text-sm text-[#0f172a] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all resize-y"
                />
              </div>

              <label
                htmlFor="sampleBox"
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 cursor-pointer select-none"
              >
                <input
                  id="sampleBox"
                  type="checkbox"
                  checked={values.sampleBox}
                  onChange={(e) => setValues({ ...values, sampleBox: e.target.checked })}
                  className="mt-1 h-5 w-5 rounded accent-[#0284c7]"
                />
                <div>
                  <span className="font-display text-sm text-[#0b192c] font-bold block">
                    Request a Physical Glass Sample Presentation Box
                  </span>
                  <span className="text-xs text-[#475569] block mt-0.5">
                    Request physical glass samples for your project evaluation.
                  </span>
                </div>
              </label>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] disabled:opacity-70 text-white font-display text-sm font-bold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all group cursor-pointer"
                >
                  <span>
                    {submitting
                      ? 'Transmitting...'
                      : submitted
                        ? 'Message Sent'
                        : 'Send Message'}
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-[#e0f2fe] group-hover:translate-x-1 transition-transform rtl:rotate-180">
                    {submitted ? 'done_all' : 'arrow_forward'}
                  </span>
                </button>

                <span className="text-xs text-[#475569]">
                  We respond within 24-48 hours.
                </span>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE_CURVE }}
                  className="p-4 rounded-lg bg-[#e0f2fe] text-[#075985] space-y-1 border border-[#0284c7]/30"
                >
                  <div className="flex items-center gap-2 text-[#0284c7] font-display text-sm font-bold">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>Inquiry Dispatched Successfully</span>
                  </div>
                  <p className="text-xs text-[#0f172a]">
                    Panorama Glass Factory sales &amp; technical desk has received your inquiry
                    {values.sampleBox ? ' (including your Sample Box dispatch request)' : ''}. We will respond within 24-48 hours.
                  </p>
                </motion.div>
              )}
            </form>
          </div>

          {/* Right Column: Plant Locations & Specialized Desks */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* Hub 1 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between pb-2 font-mono text-xs">
                <span className="text-[#0284c7] font-bold uppercase">
                  HQ &amp; Processing Factory
                </span>
                <span className="text-[#475569] flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#0284c7]">
                    location_on
                  </span>{' '}
                  Doha
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-[#0b192c]">
                Panorama Glass Factory
              </h3>
              <p className="text-xs text-[#475569] mt-1">
                St 26, Bldg 30, Area 81, New Industrial Area, Doha
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 text-xs">
                <a
                  href="tel:+97450777210"
                  className="flex items-center gap-2 text-[#0b192c] hover:text-[#0284c7] transition-colors tabular-nums"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#0284c7]">phone</span>
                  <span>(+974) 50777210</span>
                </a>
                <a
                  href="mailto:Sales@panoramaglass.net"
                  className="flex items-center gap-2 text-[#0b192c] hover:text-[#0284c7] transition-colors truncate"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#0284c7]">mail</span>
                  <span>Sales@panoramaglass.net</span>
                </a>
              </div>
            </div>

            {/* Hub 2 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between pb-2 font-mono text-xs">
                <span className="text-[#0e7490] font-bold uppercase">
                  Trading &amp; Supply
                </span>
                <span className="text-[#475569] flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#0e7490]">
                    inventory_2
                  </span>{' '}
                  500+ Containers
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-[#0b192c]">
                Glass, Aluminium &amp; Accessories Trading
              </h3>
              <p className="text-xs text-[#475569] mt-1">
                New Industrial Area, Doha
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 text-xs">
                <a
                  href="tel:+97470444877"
                  className="flex items-center gap-2 text-[#0b192c] hover:text-[#0e7490] transition-colors tabular-nums"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#0e7490]">phone</span>
                  <span>(+974) 70444877</span>
                </a>
                <a
                  href="mailto:Order@panoramaglass.net"
                  className="flex items-center gap-2 text-[#0b192c] hover:text-[#0e7490] transition-colors truncate"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#0e7490]">mail</span>
                  <span>Order@panoramaglass.net</span>
                </a>
              </div>
            </div>

            {/* Direct Specialized Desks */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0284c7] font-bold pb-3">
                Direct Specialized Desks
              </div>
              <div className="divide-y divide-slate-200 space-y-3">
                <div className="pt-1 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0b192c]">
                      Sales Enquiry Desk
                    </span>
                    <span className="text-xs text-[#475569]">Quotations &amp; Product Enquiries</span>
                  </div>
                  <a
                    href="mailto:Sales@panoramaglass.net"
                    className="px-2.5 py-1 rounded bg-[#e0f2fe] hover:bg-[#bae6fd] font-mono text-[11px] font-bold text-[#075985] transition-colors shrink-0"
                  >
                    Sales@panoramaglass.net
                  </a>
                </div>

                <div className="pt-3 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0b192c]">
                      Order &amp; Processing Desk
                    </span>
                    <span className="text-xs text-[#475569]">Production Orders &amp; Dispatch</span>
                  </div>
                  <a
                    href="mailto:Order@panoramaglass.net"
                    className="px-2.5 py-1 rounded bg-[#ecfeff] hover:bg-[#cffafe] font-mono text-[11px] font-bold text-[#0e7490] transition-colors shrink-0"
                  >
                    Order@panoramaglass.net
                  </a>
                </div>

                <div className="pt-3 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0b192c]">
                      General &amp; Other Enquiries
                    </span>
                    <span className="text-xs text-[#475569]">ISO Documentation &amp; Administration</span>
                  </div>
                  <a
                    href="mailto:info@panoramaglass.net"
                    className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 font-mono text-[11px] font-bold text-[#0b192c] transition-colors shrink-0"
                  >
                    info@panoramaglass.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Pre-Footer Urgent Quotation Callout */}
      <section className="w-full px-5 lg:px-12 py-12 bg-[#f1f5f9] border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto relative overflow-hidden rounded-2xl bg-logo-fins-dark text-white p-8 lg:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#38bdf8]/25">
          <div className="absolute top-0 inset-x-0 h-1.5 logo-gold-seam" />
          <LogoPattern variant="dark" />
          <div className="relative z-10 space-y-2 max-w-2xl text-center md:text-start">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38bdf8] font-bold">
              Sales &amp; Order Desk
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-bold">
              Looking for an Immediate Glass &amp; Aluminium Quotation?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Submit your glass processing requirements, dimensions, and BOQ schedules directly to Sales@panoramaglass.net or Order@panoramaglass.net.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => onNavigate('request-a-quote')}
              className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-display text-sm font-bold px-7 py-3.5 rounded-lg shadow-md transition-all group cursor-pointer"
            >
              <span>Request a Quote</span>
              <span className="material-symbols-outlined text-[20px] text-[#e0f2fe] group-hover:translate-x-1 transition-transform rtl:rotate-180">
                arrow_forward
              </span>
            </button>
            <a
              href="tel:+97450777210"
              className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-display text-sm font-bold border border-white/25 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] text-[#38bdf8]">
                phone_in_talk
              </span>
              <span>Call Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
