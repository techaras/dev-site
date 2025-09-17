import { AdvertisingPlatformVideo } from "../../case-studies/content/advertising-platform-video";
import { BottomBar } from "../../case-studies/shared/bottom-bar";
import { RightBar } from "../../case-studies/shared/right-bar";
import { advertisingPlatformData } from "../../case-studies/content/advertising-platform-data";

export function AdvertisingMobile() {
  return (
    <div className="w-full space-y-6">
      {/* Title and Description */}
      <div className="text-left">
        <h3 className="font-heading text-lg text-foreground">
          Automated Campaign Creation
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          Automated ad campaign creation platform
        </p>
      </div>
      
      {/* Video Container without bento-square class - 16:9 aspect ratio */}
      <div className="w-full aspect-video overflow-hidden rounded-2xl">
        <AdvertisingPlatformVideo />
      </div>
      
      {/* Bottom Bar with tech stack */}
      <div className="bg-black border border-[#353739] rounded-2xl p-4">
        <BottomBar techStack={advertisingPlatformData.techStack} />
      </div>
      
      {/* Right Bar with buttons */}
      <div className="w-full">
        <RightBar projectData={advertisingPlatformData.projectData} />
      </div>
    </div>
  );
}