interface SunburstBackgroundProps {
  className?: string;
}

const SunburstBackground = ({ className = "" }: SunburstBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated sunburst rays */}
      <div className="absolute inset-0 opacity-60">
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-px origin-bottom bg-gradient-to-t from-transparent via-orange-vibrant/40 to-amber-glow/60"
            style={{
              height: '60vh',
              transform: `translate(-50%, -100%) rotate(${i * 22.5}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-vibrant/20 via-amber-glow/10 to-transparent rounded-full blur-3xl" />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-vibrant/80 via-orange-dark/60 to-brown-warm/80" />
    </div>
  );
};

export default SunburstBackground;