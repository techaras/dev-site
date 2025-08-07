export function SocialLinks() {
    return (
      <div className="flex gap-3">
        <button className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/src/assets/GitHubIcon.svg" alt="GitHub" className="w-6 h-6" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/src/assets/LinkedInIcon.svg" alt="LinkedIn" className="w-6 h-6" />
        </button>
      </div>
    );
  }
  