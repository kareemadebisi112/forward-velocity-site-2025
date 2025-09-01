import React, { lazy, Suspense } from 'react';

// Enhanced mobile detection
const isMobileDevice = () => {
  return window.innerWidth <= 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Lazy load 3D components for better performance
const RotatingSolar = lazy(() => import('./RotatingSolar'));
const Blob3D = lazy(() => import('./Blob3D'));

// Video versions for mobile performance
const VideoRotatingSolar = lazy(() => import('./VideoRotatingSolar'));
const VideoBlob3D = lazy(() => import('./VideoBlob3D'));

// Loading spinner for 3D components
const ThreeDLoader = ({ type = 'blob' }) => (
  <div className={`flex items-center justify-center ${type === 'solar' ? 'absolute inset-0' : 'w-64 h-64'}`}>
    <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

export const OptimizedRotatingSolar = () => {
  const isMobile = isMobileDevice();

  return (
    <Suspense fallback={<ThreeDLoader type="solar" />}>
      {isMobile ? <VideoRotatingSolar /> : <RotatingSolar />}
    </Suspense>
  );
};

export const OptimizedBlob3D = () => {
  const isMobile = isMobileDevice();

  return (
    <Suspense fallback={<ThreeDLoader type="blob" />}>
      {isMobile ? <VideoBlob3D /> : <Blob3D />}
    </Suspense>
  );
};
