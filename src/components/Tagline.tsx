type TaglineProps = {
  className?: string;
  compact?: boolean;
};

export function Tagline({ className = "", compact = false }: TaglineProps) {
  return (
    <p
      className={`font-editorial font-bold uppercase leading-none tracking-[.04em] ${compact ? "text-lg sm:text-xl md:text-2xl" : "text-3xl sm:text-4xl md:text-5xl"} ${className}`}
      aria-label="Real. Honest. Analytical."
    >
      <span>Real.</span> <span>Honest.</span> <span>Analytical.</span>
    </p>
  );
}
