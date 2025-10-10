import React from 'react';

const CLIENT_LOGOS = [
  'src/assets/images/client1.png',
  'src/assets/images/client2.png',
  'src/assets/images/client3.png',
  'src/assets/images/client4.png',
  'src/assets/images/client5.png',
  'src/assets/images/client6.png',
];

const ClientMarquee = ({ logos }) => {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="flex marquee-track w-[200%] items-center h-full">
      {duplicatedLogos.map((src, index) => (
        <div
          key={index}
          className="flex-shrink-0 mx-2 sm:mx-4 md:mx-8 w-20 sm:w-28 md:w-36 lg:w-44 h-10 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center"
        >
          <img
            src={src}
            alt={`Client Logo ${index % logos.length + 1}`}
            className="w-full h-auto object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/default-logo.png'; }}
          />
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee 60s linear infinite;
            will-change: transform;
          }
          .fade-mask {
            position: relative;
          }
          .fade-mask::before,
          .fade-mask::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            width: 15%;
            z-index: 10;
            pointer-events: none;
          }
          .fade-mask::before {
            left: 0;
            background: linear-gradient(to right, #ffffff 5%, rgba(255, 255, 255, 0) 100%);
          }
          .fade-mask::after {
            right: 0;
            background: linear-gradient(to left, #ffffff 5%, rgba(255, 255, 255, 0) 100%);
          }
        `}
      </style>

      <section className="bg-white shadow-xl overflow-hidden rounded-2xl w-full">
        <div className="relative w-full overflow-hidden h-16 sm:h-20 md:h-28 lg:h-32 fade-mask flex items-center">
          <ClientMarquee logos={CLIENT_LOGOS} />
        </div>
      </section>
    </>
  );
};

export default App;