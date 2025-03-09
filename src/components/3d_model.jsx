// import React from "react";

// <div class="sketchfab-embed-wrapper">
//   <iframe
//     title="Aloe vera plant"
//     frameborder="0"
//     allowfullscreen
//     mozallowfullscreen="true"
//     webkitallowfullscreen="true"
//     allow="autoplay; fullscreen; xr-spatial-tracking"
//     xr-spatial-tracking
//     execution-while-out-of-viewport
//     execution-while-not-rendered
//     web-share
//     src="https://sketchfab.com/models/66c6699e50ab4863989777f920a981dd/embed?ui_theme=dark">
//     </iframe>
// </div>;
import React from "react";

const Model3D = ({ modelUrl }) => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="3D Plant Model"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen;"
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        // src={"https://sketchfab.com/models/66c6699e50ab4863989777f920a981dd/embed?ui_theme=dark"}
        src={"https://sketchfab.com/models/ad2a3704a5294dfcb93b224fc0c5a530/embed"}
        width="100%"
        height="400px" // Adjust height as needed
      ></iframe>
    </div>
  );
};

export default Model3D;
