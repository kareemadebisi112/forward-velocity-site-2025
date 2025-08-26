# Blob3D.jsx

## Overview

`Blob3D.jsx` is a React component that renders a 3D animated blob using Three.js. It is designed to be visually appealing and interactive, with subtle floating and blinking effects. The blob is rendered inside a circular canvas and can be resized using the `size` prop.

## How It Works

- **Three.js Setup:**
  - Creates a WebGL renderer and attaches it to a React ref (`containerRef`).
  - Sets up a scene, camera, and lighting.
  - Uses OrbitControls for smooth camera movement (rotation/zoom is disabled).
- **Blob Construction:**
  - The blob is a sphere mesh with a physical material for a glassy, organic look.
  - An inner glow mesh is added for a soft green effect.
  - Two capsule-shaped meshes are positioned as "eyes" on the blob.
- **Animation:**
  - The blob gently floats up and down and rotates slightly.
  - The eyes blink periodically using scale animations.
  - The inner glow pulses for a lively effect.
- **Cleanup:**
  - Disposes of Three.js objects and removes the canvas when the component unmounts.

## Customization

- **Size:** Pass a `size` prop to change the canvas size (default: 340px).
- **Positioning:** Change `blob.position.y` or group positions to move the blob.
- **Material:** Adjust the `blobMat` properties for different looks.
- **Add Features:** Add more meshes or effects to the blob group for custom visuals.

## Usage

```jsx
<Blob3D size={400} />
```

---

# RotatingSolar.jsx

## Overview

`RotatingSolar.jsx` is a React component that renders a complex 3D scene resembling a solar system or disk with animated rings, glowing spheres, and a central dome. It uses Three.js for rendering and animation.

## How It Works

- **Three.js Setup:**
  - Initializes a WebGL renderer, scene, camera, and lighting.
  - Uses OrbitControls for camera movement (rotation/zoom is disabled).
- **Scene Construction:**
  - **Main Group:** Holds all scene objects and is slightly rotated for staging.
  - **Dome Group:** Contains a central dome mesh, inner glow, and blinking eyes.
  - **Compact Disk Group:** Contains a large disk mesh, multiple glowing rings, and spheres arranged in orbits.
  - **Lighting:** Ambient, directional, and rim lights for depth and highlights.
- **Animation:**
  - The dome blinks and glows.
  - The disk and rings rotate slowly.
  - Spheres are positioned on orbits and can be customized.
- **Cleanup:**
  - Disposes of all Three.js objects and removes the canvas on unmount.

## Customization

- **Staging:** Move or rotate groups (e.g., `mainGroup.rotation.x`) to change the scene angle.
- **Add/Remove Objects:** Add more rings, spheres, or features to the groups.
- **Material:** Adjust mesh materials for different colors and effects.
- **Animation:** Change rotation speed or add new animated properties in the `tick` function.

## Usage

```jsx
<RotatingSolar />
```

---

## Tips  

### Three.js Core Concepts (in order of usage)

1. **Renderer**

- The renderer (`THREE.WebGLRenderer`) creates the canvas and draws the 3D scene to the screen.
- Attach the renderer's DOM element to your React ref container.

2. **Scene**

- The scene (`THREE.Scene`) is the root container for all 3D objects, lights, and groups.
- Add all meshes, lights, and groups to the scene.

3. **Camera**

- The camera (`THREE.PerspectiveCamera`) defines the viewpoint and perspective for rendering.
- Position and aim the camera to frame your scene as desired.

4. **Lights**

- Lights (e.g., `THREE.AmbientLight`, `THREE.DirectionalLight`, `THREE.PointLight`) illuminate the scene and affect how materials appear.
- Add and position lights to create depth, highlights, and mood.

5. **Meshes**

- Meshes are 3D objects created from geometry (shape) and material (appearance).
- Example: `new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshStandardMaterial())`
- Group meshes using `THREE.Group()` for easier staging and animation.

6. **Controls**

- OrbitControls allow interactive camera movement (pan, zoom, rotate). You can enable/disable features as needed.

7. **Animation Loop**

- The animation loop (`tick` function) updates object properties (position, rotation, material, etc.) and re-renders the scene every frame.
- Use this loop to create dynamic effects, movement, and interactivity.

8. **Cleanup**

- Dispose of geometries, materials, controls, and remove the renderer's canvas when the component unmounts to prevent memory leaks.

### Common Edits

- To move or rotate objects: use `.position` and `.rotation` on meshes or groups.
- To change appearance: edit material properties (color, metalness, roughness, etc.).
- To add features: create new meshes or groups and add them to the scene.
- To animate: update properties inside the animation loop.

For more info, see the [Three.js documentation](https://threejs.org/docs/).
