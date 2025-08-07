export function TrustIndicator() {
    return (
      <div className="bento-no-min flex flex-col justify-between items-center text-center">
        <img 
          src="/src/assets/AccuraCast.svg" 
          alt="AccuraCast" 
          className="h-8 w-auto"
        />
        <span className="font-body text-sm text-muted-foreground font-light">
          Trusted by
        </span>
      </div>
    );
  }