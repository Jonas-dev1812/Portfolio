import React, { useEffect, useState } from "react";

export default function HeaderContent() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    //Intersection observer for Lazy Loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); //Stop Observer after first load
        }
      },
      { threshold: 0.1 }
    );

    const headerElement = document.getElementById("video-header");
    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="video-header" className="relative w-full h-full overflow-hidden">
      {isInView && (
        <video
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          onError={(e) => console.error("Video Fehler:", e)}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="/jump_rope.webm" type="video/webm" />
          <source src="/jump_rope.mp4" type="video/mp4" />
          Dein Browser unterstützt das Video-Element nicht. Todo besserer
          Fallback
        </video>
      )}

      {/* Hintergrundfarbe */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

      {/* Text Content - über dem Video */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div className="max-w-[100px] m-auto">
          {/* Spruchblock */}
          <div className="inline-block text-left font-bold">
            {/* Name zentriert zum Spruchblock */}
            <p className="text-2xl tracking-wider mb-5 text-center w-full font-normal">
              Jonas Hilberink
            </p>

            <p className="text-9xl drop-shadow-2xl">From</p>
            <p className="text-tigel-400 tracking-tighter text-9xl drop-shadow-2xl">
              CONSOLE
            </p>
            <p className="text-9xl drop-shadow-2xl">To</p>
            <p className="text-tigel-400 tracking-tighter text-9xl drop-shadow-2xl">
              GYM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
