import React, { useRef, useEffect, useState } from 'react';

const VideoRotatingSolar = () => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && !videoError) {
      video.play().catch(() => {
        console.log('Video autoplay prevented or file not found');
        setVideoError(true);
      });
    }
  }, [videoError]);

  // Simple loading state if video fails
  if (videoError) {
    return (
      <div className="w-full h-full relative bg-gradient-to-br from-gray-900/20 to-black/20 flex items-center justify-center border border-green-500/30">
        <div className="text-green-400 text-sm opacity-70">
          Video loading...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        autoPlay
        style={{ 
          background: 'transparent',
          mixBlendMode: 'normal'
        }}
        onError={() => setVideoError(true)}
      >
        <source src="/assets/solar-animation.webm" type="video/webm" />
        <source src="/assets/solar-animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoRotatingSolar;
