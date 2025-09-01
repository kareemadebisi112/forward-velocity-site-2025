import React, { useRef, useEffect, useState } from 'react';

const VideoBlob3D = ({ size = 340 }) => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && !videoError) {
      // Start playing when component mounts
      video.play().catch(() => {
        console.log('Video autoplay prevented or file not found');
        setVideoError(true);
      });
    }
  }, [videoError]);

  // Simple loading state if video fails
  if (videoError) {
    return (
      <div 
        className="relative bg-gradient-to-br from-green-900/20 to-green-700/20 rounded-full flex items-center justify-center border border-green-500/30"
        style={{ width: size, height: size }}
      >
        <div className="text-green-400 text-sm opacity-70">
          Video loading...
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative"
      style={{ width: size, height: size }}
    >
      <video
        ref={videoRef}
        width={size}
        height={size}
        loop
        muted
        playsInline
        autoPlay
        className="object-cover rounded-full"
        style={{ 
          background: 'transparent',
          mixBlendMode: 'normal'
        }}
        onError={() => setVideoError(true)}
      >
        <source src="/assets/blob3d-animation.webm" type="video/webm" />
        <source src="/assets/blob3d-animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBlob3D;
