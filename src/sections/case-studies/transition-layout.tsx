import { VideoContainer } from './shared/video-container';
import { RightBar } from './shared/right-bar';
import { BottomBar } from './shared/bottom-bar';
import { designPlatformData } from './content/design-platform-data';
import { advertisingPlatformData } from './content/advertising-platform-data';
import { useScrollTransition } from './useScrollTransition';

export function TransitionLayout() {
  const {
    sectionRef,  // <- Changed from containerRef
    designVideoRef,
    advertisingVideoRef,
    rightBarRef,
    bottomBarRef,
    activeCaseStudy,
  } = useScrollTransition();

  // Get the current data based on active case study
  const currentData = activeCaseStudy === 'design' ? designPlatformData : advertisingPlatformData;

  return (
    <div 
      ref={sectionRef}  // <- Now this targets the entire content
      className="flex flex-col gap-16"
    >
      {/* Content Container */}
      <div className="w-full h-[700px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Left side - Overlapping Videos and BottomBar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Video Container - Overlapping videos with transitions */}
            <div className="bento-square flex-[3] relative overflow-hidden">
              {/* Design Platform Video */}
              <div 
                ref={designVideoRef}
                className="absolute inset-0 w-full h-full"
              >
                <VideoContainer activeVideo="design" />
              </div>

              {/* Advertising Platform Video */}
              <div 
                ref={advertisingVideoRef}
                className="absolute inset-0 w-full h-full"
              >
                <VideoContainer activeVideo="advertising" />
              </div>
            </div>

            {/* Bottom Bar - Content changes based on activeCaseStudy */}
            <div 
              ref={bottomBarRef}
              className="bento-square flex-1"
            >
              <BottomBar techStack={currentData.techStack} />
            </div>
          </div>

          {/* Right side - RightBar content changes based on activeCaseStudy */}
          <div 
            ref={rightBarRef}
            className="bento-square"
          >
            <RightBar projectData={currentData.projectData} />
          </div>
        </div>
      </div>
    </div>
  );
}