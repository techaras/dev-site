interface FeatureCardProps {
  emoji?: string;
  icon?: string;
  text: React.ReactNode;
  altText?: string;
  className?: string;
  variant?: 'text-left-icon-right' | 'text-right-icon-left';
}

export function FeatureCard({ 
  emoji, 
  icon, 
  text, 
  altText,
  className = "",
  variant = 'text-left-icon-right'
}: FeatureCardProps) {
  const isTextLeftIconRight = variant === 'text-left-icon-right';
  
  return (
    <div className={`bg-black border border-[#353739] rounded-[2rem] transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1 p-4 ${className}`}>
      <div className="w-full h-full flex flex-col justify-between">
        {/* Text positioning */}
        <div className={`flex ${isTextLeftIconRight ? 'justify-start' : 'justify-end'} ${isTextLeftIconRight ? 'items-start' : 'items-end'}`}>
          <span className={`font-heading text-md text-[#f2f2f2] ${isTextLeftIconRight ? 'text-left' : 'text-right'}`}>
            {text}
          </span>
        </div>
        
        {/* Icon positioning */}
        <div className={`flex ${isTextLeftIconRight ? 'justify-end' : 'justify-start'} ${isTextLeftIconRight ? 'items-end' : 'items-start'}`}>
          {icon ? (
            <img 
              src={icon} 
              alt={altText || "Feature icon"}
              className="w-8 h-8 flex-shrink-0"
            />
          ) : (
            <span className="text-2xl">{emoji}</span>
          )}
        </div>
      </div>
    </div>
  );
}