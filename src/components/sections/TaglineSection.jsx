import React from "react";

export default function TaglineSection() {
  // Responsive grid: more dots on larger screens, fewer on small screens
  const [grid, setGrid] = React.useState({ rows: 12, cols: 36 });
  const [imgSize, setImgSize] = React.useState({ width: 440, height: 220, top: -20 });

  React.useEffect(() => {
    function updateGridAndImage() {
      const width = window.innerWidth;
      if (width < 640) {
        setGrid({ rows: 8, cols: 16 });
        setImgSize({ width: 260, height: 120, top: -10 });
      } else if (width < 1024) {
        setGrid({ rows: 10, cols: 24 });
        setImgSize({ width: 340, height: 170, top: -15 });
      } else {
        setGrid({ rows: 12, cols: 36 });
        setImgSize({ width: 440, height: 220, top: -20 });
      }
    }
    updateGridAndImage();
    window.addEventListener("resize", updateGridAndImage);
    return () => window.removeEventListener("resize", updateGridAndImage);
  }, []);

  const { rows, cols } = grid;
  const dotRadius = 1.5;
  const svgWidth = 100 * cols;
  const svgHeight = 24 * rows;

  return (
    <section
      className="relative flex items-center justify-center min-h-[320px] py-8"
      style={{ backgroundColor: "#00264C" }}
    >
      {/* Brush image as background, behind everything */}
      <div
        className="absolute left-1/2"
        style={{
          top: `${imgSize.top}px`,
          transform: "translateX(-50%)",
          width: `${imgSize.width}px`,
          height: `${imgSize.height}px`,
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <img
          src="src/assets/images/Vector.png"
          alt="ERP background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
        {/* Centered text over image */}
        <div
          className="absolute left-1/2 top-1/2 flex flex-row items-center"
          style={{
            transform: "translate(-50%, -50%)",
            width: "100%",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <span className="text-white text-3xl font-bold tracking-wide">BIZPLUS</span>
          <span
            className="font-bold text-3xl px-2"
            style={{
              color: "#00264C",
              fontFamily: "inherit",
              letterSpacing: "2px",
              position: "relative",
              marginLeft: "8px"
            }}
          >
            ERP
          </span>
        </div>
      </div>

      {/* Dots Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          {Array.from({ length: rows }).map((_, row) =>
            Array.from({ length: cols }).map((_, col) => {
              const centerRow = (rows - 1) / 2;
              const centerCol = (cols - 1) / 2;
              const dist = Math.sqrt(
                Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
              );
              const maxDist = Math.sqrt(Math.pow(centerRow, 2) + Math.pow(centerCol, 2));
              const opacity = 0.7 - (dist / maxDist) * 0.6;
              return (
                <circle
                  key={`${row}-${col}`}
                  cx={col * (svgWidth / (cols - 1))}
                  cy={row * (svgHeight / (rows - 1))}
                  r={dotRadius}
                  fill="#5DD9FF"
                  opacity={opacity}
                />
              );
            })
          )}
        </svg>
      </div>

      {/* Tagline Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center mt-[180px]">
        <p className="text-white text-center text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
          Are you planning to update Startup? We are! Here is the changelog of changes we’ve made after the release.<br />
          Thanks our clients who helped us to improve our product.
        </p>
      </div>
    </section>
  );
}