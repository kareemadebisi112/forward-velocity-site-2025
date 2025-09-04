import React, { useRef, useState } from 'react';
import Blob3D from '../components/Blob3D';
import RotatingSolar from '../components/RotatingSolar';
import ThreeJSVideoRecorder from '../utils/ThreeJSVideoRecorder';

const AnimationRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState('');
  const [activeComponent, setActiveComponent] = useState('blob');
  
  const recorderRef = useRef(null);

  const startRecording = async (componentType) => {
    setIsRecording(true);
    setRecordingStatus(`Recording ${componentType} animation...`);
    
    // Wait a moment for the component to fully load
    setTimeout(async () => {
      try {
        // Find the canvas element
        const canvas = document.querySelector('canvas');
        if (!canvas) {
          setRecordingStatus('No canvas found! Make sure the 3D component is loaded and try again.');
          setIsRecording(false);
          return;
        }

        // Check WebGL support more thoroughly
        let gl = null;
        try {
          gl = canvas.getContext('webgl2') || 
               canvas.getContext('webgl') || 
               canvas.getContext('experimental-webgl');
        } catch (e) {
          console.error('WebGL context error:', e);
        }

        if (!gl) {
          // Provide alternative solutions
          setRecordingStatus(`
            WebGL not available. Alternative solutions:
            1. Enable hardware acceleration in your browser
            2. Try a different browser (Chrome/Firefox recommended)
            3. Use browser screen recording (see instructions below)
            4. Use OBS Studio for desktop recording
          `);
          setIsRecording(false);
          return;
        }

        // Check if canvas.captureStream is supported
        if (!canvas.captureStream) {
          setRecordingStatus(`
            Canvas recording not supported in this browser.
            Try Chrome or Firefox, or use screen recording instead.
          `);
          setIsRecording(false);
          return;
        }

        // Start recording using the browser's built-in MediaRecorder
        const stream = canvas.captureStream(30); // 30 FPS
        
        // Check MediaRecorder support
        if (!window.MediaRecorder || !MediaRecorder.isTypeSupported('video/webm')) {
          setRecordingStatus(`
            Video recording not supported. 
            Please use browser screen recording or OBS Studio.
          `);
          setIsRecording(false);
          return;
        }

        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: 'video/webm;codecs=vp9',
          videoBitsPerSecond: 2500000 // 2.5 Mbps
        });

        const chunks = [];
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);
          
          // Create download link
          const a = document.createElement('a');
          a.href = url;
          a.download = `${componentType}-animation.webm`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          setRecordingStatus(`${componentType} animation saved successfully! ✅`);
          setIsRecording(false);
        };

        mediaRecorder.onerror = (event) => {
          console.error('MediaRecorder error:', event);
          setRecordingStatus(`Recording failed. Try using browser screen recording instead.`);
          setIsRecording(false);
        };

        mediaRecorder.start();
        setRecordingStatus(`Recording ${componentType} animation... (10 seconds)`);
        
        // Stop recording after 10 seconds
        setTimeout(() => {
          if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
          }
        }, 10000);

      } catch (error) {
        console.error('Recording error:', error);
        setRecordingStatus(`Error: ${error.message}. Please try browser screen recording instead.`);
        setIsRecording(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">3D Animation Recorder</h1>
        
        <div className="mb-8 text-center">
          <p className="text-gray-300 mb-4">
            Use this page to record your 3D animations as video files for better mobile performance.
          </p>
          <p className="text-sm text-yellow-400">
            📹 Videos will be recorded at 30fps for 10 seconds and saved as WebM files.
          </p>
        </div>

        {/* Component Selector */}
        <div className="mb-8 flex justify-center gap-4">
          <button
            onClick={() => setActiveComponent('blob')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeComponent === 'blob' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Blob3D
          </button>
          <button
            onClick={() => setActiveComponent('solar')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeComponent === 'solar' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            RotatingSolar
          </button>
        </div>

        {/* Recording Controls */}
        <div className="mb-8 text-center">
          <button
            onClick={() => startRecording(activeComponent)}
            disabled={isRecording}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-colors ${
              isRecording
                ? 'bg-red-600 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isRecording ? '🔴 Recording...' : '🎬 Start Recording'}
          </button>
          
          {recordingStatus && (
            <p className="mt-4 text-lg font-medium text-yellow-400">
              {recordingStatus}
            </p>
          )}
        </div>

        {/* 3D Component Display */}
        <div className="bg-gray-800 rounded-lg p-8 flex justify-center items-center min-h-[500px]">
          {activeComponent === 'blob' && (
            <div className="text-center">
              <h3 className="text-xl mb-4">Blob3D Component</h3>
              <Blob3D size={400} />
            </div>
          )}
          
          {activeComponent === 'solar' && (
            <div className="text-center w-full">
              <h3 className="text-xl mb-4">RotatingSolar Component</h3>
              <div style={{ width: '100%', height: '400px' }}>
                <RotatingSolar />
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">📋 Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Select the component you want to record (Blob3D or RotatingSolar)</li>
            <li>Wait for the 3D component to fully load and start animating</li>
            <li>Click "Start Recording" to begin a 10-second recording</li>
            <li>The video will automatically download when recording is complete</li>
            <li>Place the downloaded .webm files in your <code className="bg-gray-700 px-2 py-1 rounded">public/assets/</code> folder</li>
            <li>Create corresponding .mp4 versions for better browser compatibility</li>
          </ol>
          
          <div className="mt-6 p-4 bg-red-900 rounded-lg">
            <h4 className="font-bold text-red-200 mb-2">🚨 If WebGL/Recording Not Supported:</h4>
            <div className="text-red-100 text-sm space-y-2">
              <p><strong>Method 1: Browser Screen Recording</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Chrome:</strong> Press Ctrl+Shift+I → Sources tab → More tools → Screen recorder</li>
                <li><strong>Firefox:</strong> Install "Screen Recorder" extension</li>
                <li><strong>Edge:</strong> Use Xbox Game Bar (Win+G) or "Screen recorder" extension</li>
              </ul>
              
              <p className="mt-3"><strong>Method 2: OBS Studio (Recommended for best quality)</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Download OBS Studio (free)</li>
                <li>Create "Window Capture" source</li>
                <li>Select your browser window</li>
                <li>Record 10-15 seconds of animation</li>
                <li>Export as MP4 or WebM</li>
              </ul>
              
              <p className="mt-3"><strong>Method 3: Built-in Screen Recording</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Windows:</strong> Win+G → Screen recording</li>
                <li><strong>Mac:</strong> Cmd+Shift+5 → Record selected portion</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-900 rounded-lg">
            <h4 className="font-bold text-blue-200 mb-2">💡 Pro Tips:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-100 text-sm">
              <li>Enable hardware acceleration: Chrome Settings → Advanced → System → "Use hardware acceleration"</li>
              <li>Try in Incognito/Private mode to disable extensions that might interfere</li>
              <li>Record in a high-resolution browser window for better quality</li>
              <li>Make sure the animation has completed at least one full cycle before recording</li>
              <li>Convert WebM to MP4 using online tools for better browser support</li>
              <li>Optimize video file sizes using tools like FFmpeg or online compressors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationRecorder;
