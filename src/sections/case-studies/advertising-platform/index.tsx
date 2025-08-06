import { Video } from './video'
import { RightBar } from './right-bar'
import { BottomBar } from './bottom-bar'

export function AdvertisingPlatform() {
  return (
    <div className="w-full">

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Video - Left side, spans 2 columns and full height */}
        <div className="lg:col-span-2 bento-square">
          <Video />
        </div>

        {/* Right side - 2 stacked boxes */}
        <div className="flex flex-col gap-6">
          {/* Right Bar - Top */}
          <div className="bento-square flex-1">
            <RightBar />
          </div>

          {/* Bottom Bar - Bottom */}
          <div className="bento-square flex-1">
            <BottomBar />
          </div>
        </div>
      </div>
    </div>
  )
}