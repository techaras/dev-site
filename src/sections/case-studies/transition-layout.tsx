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
        <div className="grid grid-cols-1 [@media(min-width:1390px)]:grid-cols-3 gap-6 h-full">
          {/* Left side - Overlapping Videos and BottomBar */}
          <div className="[@media(min-width:1390px)]:col-span-2 flex flex-col gap-6">
            {/* Video Container - Takes most height on small screens, flex-[3] on large screens */}
            <div className="bento-square flex-1 [@media(min-width:1390px)]:flex-[3] relative overflow-hidden">
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

            {/* Bottom Bar - Minimal height on small screens, flex-1 on large screens */}
            <div 
              ref={bottomBarRef}
              className="bg-black border border-[#353739] rounded-[2rem] p-8 max-h-[120px] transition-all duration-300 ease-in-out hover:border-[#555759] hover:-translate-y-0.5 [@media(min-width:1390px)]:bg-black [@media(min-width:1390px)]:border [@media(min-width:1390px)]:border-[#353739] [@media(min-width:1390px)]:rounded-[2rem] [@media(min-width:1390px)]:p-8 [@media(min-width:1390px)]:min-h-[200px] [@media(min-width:1390px)]:transition-all [@media(min-width:1390px)]:duration-300 [@media(min-width:1390px)]:ease-in-out [@media(min-width:1390px)]:hover:border-[#555759] [@media(min-width:1390px)]:hover:-translate-y-0.5 flex-none [@media(min-width:1390px)]:flex-1"
            >
              <BottomBar techStack={currentData.techStack} />
            </div>
          </div>

          {/* Right side - RightBar with conditional bento-square styling and minimal height on small screens */}
          <div 
            ref={rightBarRef}
            className="flex-none [@media(min-width:1390px)]:bg-black [@media(min-width:1390px)]:border [@media(min-width:1390px)]:border-[#353739] [@media(min-width:1390px)]:rounded-[2rem] [@media(min-width:1390px)]:p-8 [@media(min-width:1390px)]:min-h-[200px] [@media(min-width:1390px)]:transition-all [@media(min-width:1390px)]:duration-300 [@media(min-width:1390px)]:ease-in-out [@media(min-width:1390px)]:hover:border-[#555759] [@media(min-width:1390px)]:hover:-translate-y-0.5"
          >
            <RightBar projectData={currentData.projectData} />
          </div>
        </div>
      </div>
    </div>
  );
}