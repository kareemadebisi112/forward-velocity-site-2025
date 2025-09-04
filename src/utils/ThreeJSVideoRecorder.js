import * as THREE from 'three';

/**
 * Video Recording Utility for Three.js Animations
 * This script helps you record your 3D animations as video files
 */

class ThreeJSVideoRecorder {
  constructor(renderer, scene, camera, options = {}) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    
    this.options = {
      fps: 30,
      duration: 10, // seconds
      width: 1024,
      height: 1024,
      format: 'webm',
      quality: 0.8,
      ...options
    };
    
    this.mediaRecorder = null;
    this.recordedChunks = [];
    this.isRecording = false;
  }

  async startRecording() {
    if (this.isRecording) return;

    // Set up canvas for recording
    const canvas = this.renderer.domElement;
    canvas.width = this.options.width;
    canvas.height = this.options.height;
    this.renderer.setSize(this.options.width, this.options.height);

    // Create media stream from canvas
    const stream = canvas.captureStream(this.options.fps);
    
    // Set up media recorder
    const mimeType = this.options.format === 'webm' ? 'video/webm' : 'video/mp4';
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: mimeType,
      videoBitsPerSecond: 2500000 // 2.5 Mbps for good quality
    });

    this.recordedChunks = [];
    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
      }
    };

    this.mediaRecorder.onstop = () => {
      this.saveRecording();
    };

    this.mediaRecorder.start();
    this.isRecording = true;

    console.log(`Started recording ${this.options.duration}s animation at ${this.options.fps}fps`);
    
    // Stop recording after duration
    setTimeout(() => {
      this.stopRecording();
    }, this.options.duration * 1000);
  }

  stopRecording() {
    if (!this.isRecording) return;
    
    this.mediaRecorder.stop();
    this.isRecording = false;
    console.log('Recording stopped');
  }

  saveRecording() {
    const blob = new Blob(this.recordedChunks, {
      type: this.options.format === 'webm' ? 'video/webm' : 'video/mp4'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `3d-animation.${this.options.format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log('Recording saved successfully');
  }

  // Utility method to record a loop animation
  async recordLoopAnimation(animationFunction, loopCount = 1) {
    if (this.isRecording) return;

    const totalFrames = this.options.fps * this.options.duration;
    const framesPerLoop = Math.floor(totalFrames / loopCount);
    
    await this.startRecording();
    
    let frame = 0;
    const animate = () => {
      if (!this.isRecording) return;
      
      const progress = (frame % framesPerLoop) / framesPerLoop;
      animationFunction(progress, frame);
      
      this.renderer.render(this.scene, this.camera);
      frame++;
      
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }
}

// Usage example for Blob3D:
export const recordBlob3DAnimation = async () => {
  // This would be called from within your Blob3D component
  // after the scene is set up
  
  console.log('To record your Blob3D animation:');
  console.log('1. Set up your Three.js scene as normal');
  console.log('2. Create a recorder instance:');
  console.log('   const recorder = new ThreeJSVideoRecorder(renderer, scene, camera, {');
  console.log('     fps: 30,');
  console.log('     duration: 10,');
  console.log('     width: 1024,');
  console.log('     height: 1024');
  console.log('   });');
  console.log('3. Record the animation:');
  console.log('   recorder.recordLoopAnimation((progress) => {');
  console.log('     // Your animation logic here');
  console.log('     const t = progress * Math.PI * 2;');
  console.log('     blobGroup.position.y = Math.sin(t * 0.8) * 0.03;');
  console.log('     // ... other animations');
  console.log('   });');
};

export default ThreeJSVideoRecorder;
