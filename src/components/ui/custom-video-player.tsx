import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useVideoViewport } from '@/hooks/useVideoViewport';

interface CustomVideoPlayerProps {
  publicId: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
  customControls?: {
    muteButton?: React.ReactNode;
    unmuteButton?: React.ReactNode;
  };
  onPlay?: () => void;
  onPause?: () => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onVolumeChange?: (volume: number) => void;
}

export function CustomVideoPlayer({
  publicId,
  className = '',
  autoPlay = false,
  muted = false,
  loop = true,
  poster,
  customControls,
  onPlay,
  onPause,
  onTimeUpdate,
  onVolumeChange
}: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [debugLogs, setDebugLogs] = useState<string[]>([]);

  // Debug logger that shows on screen
  const addDebugLog = (message: string) => {
    console.log(message);
    setDebugLogs(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  // Component mount debug
  useEffect(() => {
    const isMobile = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);
    addDebugLog(`🎬 COMPONENT MOUNTED | Device: ${isMobile ? 'MOBILE' : 'DESKTOP'}`);
    addDebugLog(`🎬 Video ref: ${videoRef.current ? 'EXISTS' : 'NULL'}`);
    
    // Debug video src URL
    const video = videoRef.current;
    if (video) {
      addDebugLog(`🎬 Video SRC: ${video.src ? 'SET' : 'EMPTY'}`);
      addDebugLog(`🎬 Video URL: ${video.src?.substring(0, 50)}...`);
    }
  }, []);

  // Initialize the autoplay hook
  const { isInViewport } = useVideoViewport(videoRef, {
    threshold: 0.5,
    rootMargin: '0px',
    enabled: true
  });

  // Debug viewport hook changes
  useEffect(() => {
    addDebugLog(`🎬 VIEWPORT HOOK: ${isInViewport ? 'IN' : 'OUT'} | Loading: ${isLoading}`);
  }, [isInViewport, isLoading]);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  
  // Generate Cloudinary video URL with optimizations
  const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${publicId}`;
  const posterUrl = poster || `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto,so_0/${publicId}.jpg`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    addDebugLog('🎬 SETTING UP VIDEO LISTENERS');

    const handleLoadedData = () => {
      addDebugLog('🎬 VIDEO LOADED');
      setIsLoading(false);
      setDuration(video.duration);
    };

    const handleLoadStart = () => {
      addDebugLog('🎬 VIDEO LOAD START');
    };

    const handleCanPlay = () => {
      addDebugLog('🎬 VIDEO CAN PLAY');
    };

    const handleError = (e: Event) => {
      const error = (e.target as HTMLVideoElement).error;
      addDebugLog(`🎬 ❌ VIDEO ERROR: ${error?.code} - ${error?.message}`);
    };

    const handleStalled = () => {
      addDebugLog('🎬 ⚠️ VIDEO STALLED');
    };

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      setCurrentTime(currentTime);
      onTimeUpdate?.(currentTime, video.duration);
    };

    const handlePlay = () => {
      console.log('🎬 CustomVideoPlayer: Video play event');
      setIsPlaying(true);
      onPlay?.();
    };

    const handlePause = () => {
      console.log('🎬 CustomVideoPlayer: Video pause event');
      setIsPlaying(false);
      onPause?.();
    };

    const handleVolumeChange = () => {
      const newVolume = video.volume;
      setVolume(newVolume);
      setIsMuted(video.muted);
      onVolumeChange?.(newVolume);
    };

    const handleEnded = () => {
      console.log('🎬 CustomVideoPlayer: Video ended');
      setIsPlaying(false);
      if (!loop) {
        setCurrentTime(0);
      }
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('stalled', handleStalled);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);
    video.addEventListener('ended', handleEnded);

    return () => {
      console.log('🎬 CustomVideoPlayer: Cleaning up video event listeners');
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('stalled', handleStalled);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onPlay, onPause, onTimeUpdate, onVolumeChange, loop]);

  // Auto-play based on viewport visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isLoading) return;

    const isMobile = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);
    addDebugLog(`🎬 Viewport: ${isInViewport ? 'IN' : 'OUT'} | Device: ${isMobile ? 'MOBILE' : 'DESKTOP'} | Playing: ${isPlaying}`);

    const handleAutoPlay = async () => {
      try {
        if (isInViewport && !isPlaying) {
          addDebugLog(`🎬 📱 AUTOPLAY ATTEMPT: muted=${video.muted} inline=${video.playsInline}`);
          
          await video.play();
          addDebugLog('🎬 ✅ AUTOPLAY SUCCESS');
        } else if (!isInViewport && isPlaying) {
          addDebugLog('🎬 Auto-pausing (left viewport)');
          await video.pause();
        }
      } catch (error) {
        const err = error as Error;
        addDebugLog(`🎬 ❌ AUTOPLAY FAILED: ${err.name} - ${err.message}`);
      }
    };

    handleAutoPlay();
  }, [isInViewport, isPlaying, isLoading]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progressBar = progressRef.current;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    
    if (newVolume === 0) {
      video.muted = true;
    } else if (video.muted) {
      video.muted = false;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`relative group ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        autoPlay={autoPlay}
        muted={true}  // ✅ FIXED: Force muted for mobile compatibility
        loop={loop}
        playsInline={true}  // ✅ FIXED: Explicit true for mobile autoplay
        preload="metadata"
        className="w-full h-full object-cover"
        // ✅ FIXED: Additional mobile compatibility attributes
        webkit-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
      />

      {/* On-Screen Debug Panel (Always Visible on Mobile) */}
      <div className="absolute top-2 left-2 bg-black/80 text-white text-xs p-2 rounded max-w-xs z-50 font-mono">
        <div className="font-bold mb-1">🎬 Debug Log:</div>
        {debugLogs.length === 0 ? (
          <div className="text-yellow-300">Waiting for logs...</div>
        ) : (
          debugLogs.map((log, i) => (
            <div key={i} className="mb-1 break-words">{log}</div>
          ))
        )}
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Custom Controls Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent">
        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {/* Progress Bar */}
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-3"
          >
            <div
              className="h-full bg-white rounded-full transition-all duration-100"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-3">
              {/* Volume */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="hover:opacity-80 transition-opacity"
                >
                  {customControls?.muteButton && customControls?.unmuteButton ? (
                    isMuted ? customControls.muteButton : customControls.unmuteButton
                  ) : (
                    isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />
                  )}
                </button>
                
                <input
                  ref={volumeRef}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>
            </div>

            {/* Time Display */}
            <div className="text-xs">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}