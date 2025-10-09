import React from 'react';

export default function CircleDesign() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Large white circle with concentric rings */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full border border-pink-100 absolute"></div>
          <div className="w-[300px] h-[300px] rounded-full border border-pink-100 absolute"></div>
          <div className="w-[200px] h-[200px] rounded-full border border-gray-300 absolute"></div>
        </div>
      </div>

      {/* Top right orange circle */}
      <div className="absolute top-[10%] right-[5%] w-[100px] h-[100px] bg-orange-300 rounded-full shadow-lg"></div>

      {/* Bottom left black circle */}
      <div className="absolute bottom-[10%] left-[5%] w-[70px] h-[70px] bg-black rounded-full"></div>
    </div>
  );
}
