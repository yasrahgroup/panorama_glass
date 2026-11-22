import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export function FormInput({ label, error, required, id, className, ...props }: FormInputProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="text-danger" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        className={cn('field-control', className)}
        {...props}
      />
      {error && <span role="alert" className="text-xs font-semibold text-danger">{error}</span>}
    </div>
  );
}

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export function FormTextarea({ label, error, required, id, className, ...props }: FormTextareaProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="text-danger" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        className={cn('field-control min-h-32 resize-y', className)}
        {...props}
      />
      {error && <span role="alert" className="text-xs font-semibold text-danger">{error}</span>}
    </div>
  );
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

export function FormSelect({ label, error, required, id, options, className, ...props }: FormSelectProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="text-danger" aria-hidden="true">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          aria-invalid={error ? true : undefined}
          className={cn('field-control appearance-none cursor-pointer pe-10', className)}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="material-symbols-outlined absolute end-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
          expand_more
        </span>
      </div>
      {error && <span role="alert" className="text-xs font-semibold text-danger">{error}</span>}
    </div>
  );
}
