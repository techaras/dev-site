import { GithubIcon } from '../../../components/icons/socials/github-icon';
import { LinkedinIcon } from '../../../components/icons/socials/linkedin-icon';

export function SocialLinks() {
  return (
    <div className="flex gap-3">
      <button className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
        <GithubIcon className="w-6 h-6" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
        <LinkedinIcon className="w-6 h-6" />
      </button>
    </div>
  );
}