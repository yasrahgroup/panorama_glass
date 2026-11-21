import { motion } from 'motion/react';

interface LogoPatternProps {
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Architectural background motif inspired by stepped glass curtain walls:
 * translucent faceted sky-blue & slate glass fins with an animated specular horizon curve.
 */
export function LogoPattern({ variant = 'light', className = '' }: LogoPatternProps) {
  const isDark = variant === 'dark';

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none absolute inset-0 w-full h-full ${className}`}
    >
      <defs>
        <linearGradient id={`arc-panorama-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284C7" stopOpacity={isDark ? 0.85 : 0.34} />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity={isDark ? 0.92 : 0.45} />
          <stop offset="100%" stopColor="#0E7490" stopOpacity={isDark ? 0.78 : 0.32} />
        </linearGradient>
        <linearGradient id={`glass-pane-primary-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity={isDark ? 0.2 : 0.08} />
          <stop offset="100%" stopColor="#0284C7" stopOpacity={isDark ? 0.05 : 0.02} />
        </linearGradient>
        <linearGradient id={`glass-pane-slate-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" stopOpacity={isDark ? 0.16 : 0.08} />
          <stop offset="100%" stopColor="#E0F2FE" stopOpacity={isDark ? 0.03 : 0.02} />
        </linearGradient>
        <linearGradient id={`glass-pane-cyan-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E7490" stopOpacity={isDark ? 0.22 : 0.09} />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity={isDark ? 0.05 : 0.02} />
        </linearGradient>
      </defs>

      {/* Stepped vertical architectural curtain-wall fin panels */}
      <g opacity={isDark ? 0.58 : 0.65}>
        <motion.polygon
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          points="960,40 1055,15 1055,390 960,405"
          fill={`url(#glass-pane-primary-${variant})`}
          stroke={isDark ? 'rgba(56,189,248,0.42)' : 'rgba(2,132,199,0.22)'}
          strokeWidth="1"
        />
        <motion.polygon
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          points="1068,18 1175,-10 1175,382 1068,396"
          fill={`url(#glass-pane-slate-${variant})`}
          stroke={isDark ? 'rgba(148,163,184,0.34)' : 'rgba(15,23,42,0.14)'}
          strokeWidth="1.1"
        />
        <motion.polygon
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          points="1188,-12 1320,-42 1320,375 1188,388"
          fill={`url(#glass-pane-cyan-${variant})`}
          stroke={isDark ? 'rgba(34,211,238,0.38)' : 'rgba(14,116,144,0.2)'}
          strokeWidth="1.2"
        />
      </g>

      {/* Diagonal specular glass reflections */}
      <g opacity={isDark ? 0.14 : 0.2}>
        <polygon points="840,0 910,0 760,420 690,420" fill={isDark ? '#38BDF8' : '#0284C7'} opacity={isDark ? 0.7 : 0.25} />
        <polygon points="940,0 975,0 825,420 790,420" fill="#FFFFFF" opacity={isDark ? 0.35 : 0.88} />
      </g>

      {/* Sweeping Architectural Horizon Arc */}
      <motion.path
        initial={{ pathLength: 0.4, opacity: 0.3 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        d="M -60 405 C 320 355, 790 215, 1490 95"
        fill="none"
        stroke={`url(#arc-panorama-${variant})`}
        strokeWidth={isDark ? 2.2 : 1.8}
        strokeLinecap="round"
      />
      <path
        d="M 40 422 C 420 365, 860 228, 1500 120"
        fill="none"
        stroke={isDark ? 'rgba(148,163,184,0.28)' : 'rgba(15,23,42,0.12)'}
        strokeWidth="1"
        strokeDasharray="6 6"
      />
    </svg>
  );
}
