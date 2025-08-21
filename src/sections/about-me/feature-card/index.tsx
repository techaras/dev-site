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
    <div className={`bg-black border border-[#353739] rounded-[2rem] min-h-20 transition-all duration-300 p-4 overflow-hidden relative ${className}`}>

      <div className="w-full h-full flex flex-col justify-between relative z-10">

        {/* Text positioning */}
        {isTextLeftIconRight ? (
          <div className="flex justify-start items-start">
            <span className="font-heading text-md text-[#f2f2f2] text-left">
              {text}
            </span>
          </div>
        ) : (
          <div className="absolute top-0 right-0 translate-y-8">
            <span className="font-heading text-md text-[#f2f2f2] text-right">
              {text}
            </span>
          </div>
        )}
        
        {/* Icon positioning - now positioned to extend beyond container */}
        <div className={`absolute ${isTextLeftIconRight ? 'bottom-0 right-0 translate-x-4 translate-y-8' : 'bottom-0 left-0 -translate-x-4 translate-y-0'}`}>
          {icon ? (
            <img 
              src={icon} 
              alt={altText || "Feature icon"}
              className="w-28 h-28 flex-shrink-0"
            />
          ) : (
            <span className="text-6xl">{emoji}</span>
          )}
        </div>
      </div>
    </div>
  );
}