import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export function FormInput({ label, error, required, id, className = '', ...props }: FormInputProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-semibold text-[#0b192c]">
        {label} {required && <span className="text-[#dc2626]">*</span>}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 bg-[#f8fafc] rounded-lg text-sm text-[#0f172a] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all ${className}`}
        {...props}
      />
      {error && <span className="text-xs font-semibold text-[#dc2626]">{error}</span>}
    </div>
  );
}

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export function FormTextarea({ label, error, required, id, className = '', ...props }: FormTextareaProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-semibold text-[#0b192c]">
        {label} {required && <span className="text-[#dc2626]">*</span>}
      </label>
      <textarea
        id={id}
        className={`w-full px-4 py-3 bg-[#f8fafc] rounded-lg text-sm text-[#0f172a] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all resize-y ${className}`}
        {...props}
      />
      {error && <span className="text-xs font-semibold text-[#dc2626]">{error}</span>}
    </div>
  );
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

export function FormSelect({ label, error, required, id, options, className = '', ...props }: FormSelectProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-semibold text-[#0b192c]">
        {label} {required && <span className="text-[#dc2626]">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          className={`w-full px-4 py-3 bg-[#f8fafc] rounded-lg text-sm text-[#0f172a] border border-slate-300 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all cursor-pointer ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="material-symbols-outlined absolute end-3.5 top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none">
          expand_more
        </span>
      </div>
      {error && <span className="text-xs font-semibold text-[#dc2626]">{error}</span>}
    </div>
  );
}
