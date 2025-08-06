import { Video } from './video'
import { RightBar } from './right-bar'
import { BottomBar } from './bottom-bar'

export function DesignPlatform() {
  return (
    <div className="w-full">

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Left side - Video and BottomBar stacked */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Video - Takes 3/4 of the height */}
          <div className="bento-square flex-[3]">
            <Video />
          </div>

          {/* Bottom Bar - Takes 1/4 of the height */}
          <div className="bento-square flex-1">
            <BottomBar />
          </div>
        </div>

        {/* Right side - RightBar extends full height */}
        <div className="bento-square">
          <RightBar />
        </div>
      </div>
    </div>
  )
}