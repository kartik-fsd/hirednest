import React from "react";

const BackgroundPatterns = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"
        style={{ opacity: "0.9" }}
      />

      {/* Dots Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(#e5e7eb 1px, transparent 1px),
            radial-gradient(#e5e7eb 1px, transparent 1px)
          `,
          backgroundPosition: "0 0, 25px 25px",
          backgroundSize: "50px 50px",
          opacity: "0.1",
        }}
      />

      {/* Lines Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          opacity: "0.1",
        }}
      />

      {/* Radial Gradient */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-green-100 to-green-50 rounded-full"
        style={{ opacity: "0.2", filter: "blur(40px)" }}
      />

      {/* Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 50% 100%, #f3f4f6 70%, transparent 70.3%),
            radial-gradient(ellipse at 50% 100%, #f3f4f6 100%, transparent 100.3%)
          `,
          backgroundSize: "100px 100px, 200px 200px",
          opacity: "0.1",
        }}
      />
    </div>
  );
};

export default BackgroundPatterns;
