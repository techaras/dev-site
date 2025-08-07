export function AchievementCard({ title, description, className = "" }: { title: React.ReactNode, description: string, className?: string }) {
    return (
      <div className={`bento-no-min ${className} flex flex-col justify-between items-center text-center`}>
        <h3 className="font-heading text-2xl text-foreground">
          {title}
        </h3>
        <span className="font-body text-sm text-muted-foreground font-light">
          {description}
        </span>
      </div>
    );
  }