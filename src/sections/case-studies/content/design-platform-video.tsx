import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function DesignPlatformVideo() {
  return (
    <CustomVideoPlayer
      publicId="design-video_fvioff"
      className="w-full h-full rounded-lg overflow-hidden"
      muted={true}
      onPlay={() => console.log('Design platform video started playing')}
      onPause={() => console.log('Design platform video paused')}
    />
  );
}