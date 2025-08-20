interface FeatureCardProps {
  emoji?: string;
  icon?: string;
  text: string;
  className?: string;
}

export function FeatureCard({ emoji, icon, text, className = "" }: FeatureCardProps) {
  return (
    <div className={`bento-no-min flex flex-col justify-between items-center text-center ${className}`}>
      <span className="font-heading text-md text-[#f2f2f2] mb-2">
        {text}
      </span>
      {icon ? (
        <img 
          src={icon} 
          alt={text}
          className="w-8 h-8 flex-shrink-0"
        />
      ) : (
        <span className="text-2xl">{emoji}</span>
      )}
    </div>
  );
}