import { VideoContainer } from './shared/video-container';
import { RightBar } from './shared/right-bar';
import { BottomBar } from './shared/bottom-bar';
import { designPlatformData } from './content/design-platform-data';
import { advertisingPlatformData } from './content/advertising-platform-data';

export function TransitionLayout() {
  return (
    <div className="flex flex-col gap-16">
      {/* Design Platform */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
          {/* Left side - Video and BottomBar stacked */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Video - Takes 3/4 of the height */}
            <div className="bento-square flex-[3]">
              <VideoContainer activeVideo="design" />
            </div>

            {/* Bottom Bar - Takes 1/4 of the height */}
            <div className="bento-square flex-1">
              <BottomBar techStack={designPlatformData.techStack} />
            </div>
          </div>

          {/* Right side - RightBar extends full height */}
          <div className="bento-square">
            <RightBar projectData={designPlatformData.projectData} />
          </div>
        </div>
      </div>
      
      {/* Advertising Platform */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
          {/* Left side - Video and BottomBar stacked */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Video - Takes 3/4 of the height */}
            <div className="bento-square flex-[3]">
              <VideoContainer activeVideo="advertising" />
            </div>

            {/* Bottom Bar - Takes 1/4 of the height */}
            <div className="bento-square flex-1">
              <BottomBar techStack={advertisingPlatformData.techStack} />
            </div>
          </div>

          {/* Right side - RightBar extends full height */}
          <div className="bento-square">
            <RightBar projectData={advertisingPlatformData.projectData} />
          </div>
        </div>
      </div>
    </div>
  );
}