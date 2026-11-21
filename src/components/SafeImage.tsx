import { memo, useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const SafeImage = memo(function SafeImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Panorama Architectural Glazing',
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#e0f2fe] via-[#f1f5f9] to-[#e2e8f0] text-[#0f172a] p-6 text-center ${className}`}
      >
        <svg
          aria-hidden="true"
          className="h-12 w-12 opacity-90 mb-2"
          fill="none"
          viewBox="0 0 36 36"
        >
          <path d="M8 28V11l6-3v20" stroke="#0284C7" strokeWidth="1.5" />
          <path d="M16 28V9l6-3v22" stroke="#0F172A" strokeWidth="1.5" />
          <path d="M24 28V7l5-2v23" stroke="#0E7490" strokeWidth="1.5" />
          <path d="M5 27C14 23 22 18 32 14" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="font-display text-xs font-semibold tracking-wider uppercase text-[#0369a1]">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
});
