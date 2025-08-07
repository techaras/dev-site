import { SocialLinks } from './social-links';

export function ProfileSection() {
  return (
    <div className="bento-no-min col-span-3 row-span-3 flex items-center gap-6">
      {/* Image placeholder - left side */}
      <div className="w-52 h-52 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="font-body text-sm text-muted-foreground">Image</span>
      </div>
      {/* Text - right side */}
      <div className="flex flex-col">
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