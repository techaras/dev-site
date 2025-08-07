export function SimpleTextCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
      <div className={`bento-no-min flex items-center justify-center ${className}`}>
        {children}
      </div>
    );
  }