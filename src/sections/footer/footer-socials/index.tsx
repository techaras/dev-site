import { GithubIcon } from '@/components/icons/socials/github-icon';
import { LinkedinIcon } from '@/components/icons/socials/linkedin-icon';

export function FooterSocials() {
  const handleGithubClick = () => {
    window.open('https://github.com/techaras', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/stav-symeonidis/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center gap-6">
      <button 
        onClick={handleGithubClick}
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2"
        aria-label="Visit GitHub profile"
      >
        <GithubIcon className="w-4 h-4" />
        Github
      </button>
      <button 
        onClick={handleLinkedInClick}
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2"
        aria-label="Visit LinkedIn profile"
      >
        <LinkedinIcon className="w-4 h-4" />
        LinkedIn
      </button>
    </div>
  );
}