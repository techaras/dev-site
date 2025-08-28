import { SocialLinks } from './social-links';
import { CometCard } from '@/components/ui/comet-card';

export function ProfileSection() {
  return (
    <div className="bento-no-min col-span-3 row-span-3 flex items-center gap-6">
      {/* Profile Image with CometCard - left side */}
      <CometCard className="w-64 flex-shrink-0 ml-4">
        <img 
          src="/profile-dev.jpg" 
          alt="Stavros Symeonidis" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </CometCard>
      
      {/* Text - right side */}
      <div className="flex flex-col ml-4">
        <h3 className="font-heading text-2xl text-foreground mb-2">
          Stavros Symeonidis
        </h3>
        <p className="font-body text-sm font-light text-muted-foreground mb-4">
          Patent-Winning AI Developer & CTO
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}