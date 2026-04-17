const logos = [
  {
    name: "Make.com",
    svg: (
      <svg viewBox="0 0 160 36" fill="currentColor" className="h-6 md:h-7">
        <path
          d="M8 8l8 10-8 10M16 8l8 10-8 10"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="36"
          y="24"
          fontSize="18"
          fontWeight="600"
          fontFamily="'Inter','Helvetica Neue',sans-serif"
          letterSpacing="-0.5"
        >
          Make.com
        </text>
      </svg>
    ),
  },
  {
    name: "N8N",
    svg: (
      <svg viewBox="0 0 90 36" fill="currentColor" className="h-6 md:h-7">
        <text
          x="0"
          y="25"
          fontSize="20"
          fontWeight="700"
          fontFamily="'Inter','Helvetica Neue',sans-serif"
          letterSpacing="-0.3"
        >
          n8n
        </text>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 140 36" fill="currentColor" className="h-6 md:h-7">
        <text
          x="0"
          y="25"
          fontSize="20"
          fontWeight="600"
          fontFamily="'Inter','Helvetica Neue',sans-serif"
          letterSpacing="-0.3"
        >
          OpenAI
        </text>
      </svg>
    ),
  },
  {
    name: "Meta",
    svg: (
      <svg viewBox="0 0 100 36" fill="currentColor" className="h-6 md:h-7">
        <text
          x="0"
          y="25"
          fontSize="20"
          fontWeight="600"
          fontFamily="'Inter','Helvetica Neue',sans-serif"
          letterSpacing="-0.3"
        >
          Meta
        </text>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    svg: (
      <svg viewBox="0 0 150 36" fill="currentColor" className="h-6 md:h-7">
        <text
          x="0"
          y="25"
          fontSize="18"
          fontWeight="600"
          fontFamily="'Inter','Helvetica Neue',sans-serif"
          letterSpacing="-0.3"
        >
          WhatsApp
        </text>
      </svg>
    ),
  },
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 120 36" fill="currentColor" className="h-6 md:h-7">
        <text
          x="0"
          y="25"
          fontSize="20"
          fontWeight="500"
          fontFamily="'Inter','Helvetica Neue',sans-serif"
          letterSpacing="-0.3"
        >
          Google
        </text>
      </svg>
    ),
  },
  {
    name: "Zapier",
    svg: (
      <svg viewBox="0 0 110 36" fill="currentColor" className="h-6 md:h-7">
        <text
          x="0"
          y="25"
          fontSize="20"
          fontWeight="600"
          fontFamily="'Inter','Helvetica Neue',sans-serif"
          letterSpacing="-0.3"
        >
          Zapier
        </text>
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 100 36" fill="currentColor" className="h-6 md:h-7">
        <text
          x="0"
          y="25"
          fontSize="22"
          fontWeight="700"
          fontFamily="'Inter','Helvetica Neue',sans-serif"
          letterSpacing="-0.5"
        >
          Stripe
        </text>
      </svg>
    ),
  },
];

const LogoSet = () => (
  <>
    {logos.map((logo) => (
      <div
        key={logo.name}
        className="flex-shrink-0 text-[#9ca3af] opacity-50 hover:opacity-90 transition-opacity duration-300"
      >
        {logo.svg}
      </div>
    ))}
  </>
);

const PartnersMarquee = () => {
  return (
    <section className="py-8 md:py-10" style={{ backgroundColor: "#0b0b0b" }}>
      <p className="text-center text-[#9ca3af] text-[10px] md:text-xs font-body tracking-[0.25em] uppercase mb-6 md:mb-8">
        Impulsados por plataformas líderes
      </p>

      <div className="overflow-hidden group">
        <div className="flex items-center gap-12 md:gap-16 w-max animate-marquee group-hover:[animation-play-state:paused]">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
