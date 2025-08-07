export function FeatureCard({ emoji, text, className = "" }: { emoji: string, text: string, className?: string }) {
    return (
      <div className={`bento-no-min flex flex-col justify-between items-center text-center ${className}`}>
        <span className="text-2xl mb-2">{emoji}</span>
        <span className="font-body text-sm text-muted-foreground font-light">
          {text}
        </span>
      </div>
    );
  }