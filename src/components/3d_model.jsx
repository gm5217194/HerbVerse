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
import "./plantmodal.css";

const Model3D = ({ modelUrl }) => {
  return (
    <div className="model-embed-wrapper">
  <iframe
    title="3D Plant Model"
    src={modelUrl}
    width="600"
    height="400"
    allow="autoplay; fullscreen"
    allowFullScreen
    mozAllowFullScreen="true"
    webkitAllowFullScreen="true"
    execution-while-out-of-viewport="true"
    execution-while-not-rendered="true"
    web-share="true"
  ></iframe>
</div>

  );
};

export default Model3D;
