import type { ProductItem } from '../types';

interface ProductSchematicProps {
  product: ProductItem;
  compact?: boolean;
}

export function ProductSchematic({ product, compact = true }: ProductSchematicProps) {
  const heightClass = compact ? 'h-full w-full' : 'h-48 w-full rounded-xl';

  if (product.id === 'dgu') {
    return (
      <div
        className={`${heightClass} relative overflow-hidden bg-gradient-to-br from-burgundy-deep via-accent-primary to-accent-secondary flex items-center justify-center p-3`}
      >
        <svg
          viewBox="0 0 320 150"
          className="w-full h-full"
          aria-label="Insulated double and triple glazed unit architectural cross-section"
        >
          <defs>
            <pattern id="dgu-grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(91,122,140,0.22)" strokeWidth="0.7" />
            </pattern>
            <linearGradient id="glass-pane" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5EFE6" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#D4C2A9" stopOpacity="0.24" />
            </linearGradient>
          </defs>
          <rect width="320" height="150" fill="url(#dgu-grid)" />

          {/* Curved Horizon Arc */}
          <path d="M 0 132 C 95 118, 210 74, 320 42" fill="none" stroke="rgba(91,122,140,0.5)" strokeWidth="1.2" />

          {/* Solar Rays Incoming + Reflected */}
          <path d="M 24 42 L 102 64 L 38 96" fill="none" stroke="#5B7A8C" strokeWidth="2" strokeLinecap="round" />
          <polygon points="36,97 44,89 47,97" fill="#5B7A8C" />
          <text x="14" y="30" fill="#8A9AA5" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="700">
            SOLAR IR REFLECTED
          </text>

          {/* Outer 6mm Low-E Pane */}
          <rect x="104" y="20" width="20" height="110" rx="2" fill="url(#glass-pane)" stroke="#FFFFFF" strokeWidth="1.2" />
          {/* Coated Surface #2 */}
          <line x1="125" y1="21" x2="125" y2="129" stroke="#5B7A8C" strokeWidth="2.8" />

          {/* Warm-Edge Spacer & Cavity */}
          <rect x="127" y="24" width="50" height="102" fill="rgba(135,63,80,0.22)" stroke="rgba(91,122,140,0.55)" strokeDasharray="3 3" />
          <rect x="127" y="20" width="50" height="10" fill="#481522" stroke="#D4C2A9" strokeWidth="0.8" />
          <rect x="127" y="120" width="50" height="10" fill="#481522" stroke="#D4C2A9" strokeWidth="0.8" />
          <text x="152" y="72" textAnchor="middle" fill="#F5EFE6" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700">
            IGU / TGU
          </text>
          <text x="152" y="85" textAnchor="middle" fill="#E9DDCB" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5">
            18–58mm Thick
          </text>

          {/* Inner Clear Float */}
          <rect x="179" y="20" width="20" height="110" rx="2" fill="url(#glass-pane)" stroke="#FFFFFF" strokeWidth="1.2" />

          {/* Callouts */}
          <text x="212" y="54" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10.5" fontWeight="700">
            Double &amp; Triple
          </text>
          <text x="212" y="70" fill="#8A9AA5" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8">
            Low-E / Double Silver
          </text>
          <text x="212" y="86" fill="#F5EFE6" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="700">
            1,050 sqm / Day
          </text>
          <text x="212" y="102" fill="#E9DDCB" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5">
            2400 × 3600 mm Max
          </text>
        </svg>
      </div>
    );
  }

  if (product.id === 'sgp') {
    return (
      <div
        className={`${heightClass} relative overflow-hidden bg-gradient-to-br from-accent-primary via-burgundy-deep to-burgundy flex items-center justify-center p-3`}
      >
        <svg
          viewBox="0 0 320 150"
          className="w-full h-full"
          aria-label="PVB, SentryGlas, and EVA structural laminated glass assembly"
        >
          <defs>
            <pattern id="sgp-grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(91,122,140,0.2)" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="320" height="150" fill="url(#sgp-grid)" />
          <path d="M 0 135 C 90 112, 220 68, 320 38" fill="none" stroke="rgba(91,122,140,0.5)" strokeWidth="1.2" />

          {/* Laminated Structural Sandwich */}
          <rect x="64" y="18" width="26" height="114" rx="2" fill="rgba(245,239,230,0.28)" stroke="#F5EFE6" strokeWidth="1.4" />
          <rect x="92" y="18" width="12" height="114" fill="rgba(212,194,169,0.85)" stroke="#FFFFFF" strokeWidth="1" />
          <rect x="106" y="18" width="26" height="114" rx="2" fill="rgba(245,239,230,0.28)" stroke="#F5EFE6" strokeWidth="1.4" />

          {/* Stress Mesh Lines */}
          <path d="M 68 42 L 86 60 M 86 42 L 68 60 M 70 84 L 84 98 M 84 84 L 70 98" stroke="#5B7A8C" strokeWidth="1" opacity="0.9" />

          {/* Clamp Hardware */}
          <rect x="52" y="34" width="92" height="14" rx="2" fill="#873F50" stroke="#8A9AA5" strokeWidth="1" />
          <rect x="52" y="102" width="92" height="14" rx="2" fill="#873F50" stroke="#8A9AA5" strokeWidth="1" />
          <circle cx="98" cy="41" r="3" fill="#FFFFFF" />
          <circle cx="98" cy="109" r="3" fill="#FFFFFF" />

          {/* Specs Callout */}
          <text x="160" y="46" fill="#8A9AA5" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700">
            PVB · SENTRYGLAS · EVA
          </text>
          <text x="160" y="63" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11.5" fontWeight="700">
            8.76 – 85mm Build
          </text>
          <text x="160" y="82" fill="#E9DDCB" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700">
            2400 × 4200 mm Max
          </text>
          <text x="160" y="99" fill="#F5EFE6" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8">
            02 Lamination Lines
          </text>
          <text x="160" y="114" fill="#E9DDCB" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8">
            Flat &amp; Curve Safety
          </text>
        </svg>
      </div>
    );
  }

  if (product.id === 'acoustic') {
    return (
      <div
        className={`${heightClass} relative overflow-hidden bg-gradient-to-br from-burgundy-deep via-accent-primary to-accent-secondary flex items-center justify-center p-3`}
      >
        <svg
          viewBox="0 0 320 150"
          className="w-full h-full"
          aria-label="Acoustic multilayer laminated soundproof glass cross-section"
        >
          <path d="M 0 132 C 110 112, 220 75, 320 46" fill="none" stroke="rgba(212,194,169,0.34)" strokeWidth="1.2" />

          {/* Exterior Waves */}
          <path d="M 16 75 Q 26 35, 36 75 T 56 75 T 76 75 T 96 75" fill="none" stroke="#D4C2A9" strokeWidth="2.2" />
          <path d="M 18 75 Q 28 50, 38 75 T 58 75 T 78 75 T 98 75" fill="none" stroke="#FFFFFF" strokeWidth="1.3" opacity="0.7" />
          <text x="18" y="30" fill="#E9DDCB" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700">
            ACOUSTIC PVB
          </text>

          {/* Tri-layer Glazing Stack */}
          <rect x="112" y="20" width="14" height="110" rx="1.5" fill="rgba(245,239,230,0.34)" stroke="#F5EFE6" strokeWidth="1" />
          <rect x="128" y="20" width="7" height="110" fill="#D4C2A9" opacity="0.95" />
          <rect x="137" y="20" width="12" height="110" rx="1.5" fill="rgba(245,239,230,0.34)" stroke="#F5EFE6" strokeWidth="1" />
          <rect x="151" y="20" width="22" height="110" fill="rgba(255,255,255,0.08)" stroke="rgba(138,154,165,0.45)" strokeDasharray="3 3" />
          <rect x="175" y="20" width="18" height="110" rx="1.5" fill="rgba(245,239,230,0.44)" stroke="#FFFFFF" strokeWidth="1.2" />

          {/* Attenuated Interior Line */}
          <path d="M 204 75 Q 218 71, 232 75 T 260 75 T 292 75" fill="none" stroke="#8A9AA5" strokeWidth="2" />
          <text x="206" y="54" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="700">
            ACOUSTIC PVB
          </text>
          <text x="206" y="96" fill="#E9DDCB" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700">
            8.76–85mm Lam
          </text>
          <text x="206" y="112" fill="#F5EFE6" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8">
            Controlled PVB Line
          </text>
        </svg>
      </div>
    );
  }

  if (product.id === 'ballistic') {
    return (
      <div
        className={`${heightClass} relative overflow-hidden bg-gradient-to-br from-burgundy-deep via-accent-primary to-burgundy flex items-center justify-center p-3`}
      >
        <svg
          viewBox="0 0 320 150"
          className="w-full h-full"
          aria-label="BR 01 to BR 07 bullet-resistant multi-ply glass cross-section"
        >
          <path d="M 0 130 C 100 110, 215 72, 320 42" fill="none" stroke="rgba(91,122,140,0.4)" strokeWidth="1.2" />

          {/* Structural Clamp */}
          <rect x="92" y="16" width="88" height="8" rx="1.5" fill="#873F50" stroke="#8A9AA5" strokeWidth="0.8" />
          <rect x="92" y="126" width="88" height="8" rx="1.5" fill="#873F50" stroke="#8A9AA5" strokeWidth="0.8" />

          {/* Armored Plies */}
          <rect x="96" y="24" width="16" height="102" fill="rgba(245,239,230,0.34)" stroke="#F5EFE6" strokeWidth="1" />
          <rect x="114" y="24" width="5" height="102" fill="#D4C2A9" />
          <rect x="121" y="24" width="14" height="102" fill="rgba(245,239,230,0.38)" stroke="#F5EFE6" strokeWidth="1" />
          <rect x="137" y="24" width="5" height="102" fill="#873F50" />
          <rect x="144" y="24" width="14" height="102" fill="rgba(245,239,230,0.38)" stroke="#F5EFE6" strokeWidth="1" />
          <rect x="160" y="24" width="14" height="102" fill="rgba(212,194,169,0.5)" stroke="#FFFFFF" strokeWidth="1.2" />

          {/* Impact Vector Arrested */}
          <line x1="22" y1="75" x2="94" y2="75" stroke="#D4C2A9" strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="98" cy="75" r="7" fill="none" stroke="#D4C2A9" strokeWidth="1.5" />
          <circle cx="98" cy="75" r="2.5" fill="#FFFFFF" />
          <text x="20" y="58" fill="#D4C2A9" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="700">
            BR 01 – BR 07
          </text>
          <text x="20" y="98" fill="#F5EFE6" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5">
            BULLET PROOF
          </text>

          {/* Right Engineering Specs */}
          <text x="188" y="46" fill="#D4C2A9" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700">
            FIRE &amp; BALLISTIC
          </text>
          <text x="188" y="64" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="700">
            Up to 85mm Multi-Ply
          </text>
          <text x="188" y="83" fill="#E9DDCB" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5">
            EVA &amp; PVB Lamination
          </text>
          <text x="188" y="100" fill="#E9DDCB" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8">
            2400 × 4200 mm Max
          </text>
        </svg>
      </div>
    );
  }

  // pdlc / sand blasting & smart glass
  return (
    <div
      className={`${heightClass} relative overflow-hidden bg-gradient-to-br from-burgundy-deep via-accent-primary to-burgundy flex items-center justify-center p-3`}
    >
      <svg
        viewBox="0 0 320 150"
        className="w-full h-full"
        aria-label="Sand blasted and smart glass schematic"
      >
        {/* Architectural Frame */}
        <rect x="26" y="20" width="268" height="110" rx="4" fill="#481522" stroke="#D4C2A9" strokeWidth="1.5" />

        {/* Left Half: Frosted Sand Blast */}
        <rect x="32" y="26" width="126" height="98" fill="rgba(248,250,252,0.95)" />
        <text x="95" y="68" textAnchor="middle" fill="#292525" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="12" fontWeight="700">
          SAND BLAST
        </text>
        <text x="95" y="86" textAnchor="middle" fill="#873F50" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700">
          FULL · GRADIENT
        </text>

        {/* Right Half: Smart Glass / Clear */}
        <rect x="162" y="26" width="126" height="98" fill="rgba(135,63,80,0.34)" />
        <line x1="175" y1="40" x2="215" y2="110" stroke="rgba(255,255,255,0.22)" strokeWidth="8" />
        <line x1="210" y1="40" x2="250" y2="110" stroke="rgba(212,194,169,0.28)" strokeWidth="4" />
        <text x="225" y="68" textAnchor="middle" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="12" fontWeight="700">
          SMART GLASS
        </text>
        <text x="225" y="86" textAnchor="middle" fill="#E9DDCB" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700">
          EVA LAM · MIRRORS
        </text>

        {/* Divider */}
        <line x1="160" y1="20" x2="160" y2="130" stroke="#8A9AA5" strokeWidth="2" />
        <rect x="116" y="114" width="88" height="14" rx="3" fill="#3D6B6B" stroke="#5E8F8F" strokeWidth="0.8" />
        <text x="160" y="124" textAnchor="middle" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" fontWeight="700">
          BR 01–BR 07
        </text>
      </svg>
    </div>
  );
}
