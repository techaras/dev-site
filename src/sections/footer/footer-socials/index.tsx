import { GithubIcon } from '@/components/icons/socials/github-icon';
import { LinkedinIcon } from '@/components/icons/socials/linkedin-icon';

export function FooterSocials() {
  return (
    <div className="flex items-center gap-6">
      <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2">
        <GithubIcon className="w-4 h-4" />
        Github
      </button>
      <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2">
        <LinkedinIcon className="w-4 h-4" />
        LinkedIn
      </button>
    </div>
  );
}