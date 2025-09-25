import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInteraction = () => {
    scrollToServices();
  };

  const handleMouseDown = () => {
    // Optional: Add subtle feedback if needed
  };

  const handleMouseUp = () => {
    // Optional: Add subtle feedback if needed
  };

  const handleMouseLeave = () => {
    // Optional: Add subtle feedback if needed
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/SSS.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Invisible Interactive Scroll Area */}
      <div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-32 cursor-pointer"
        onClick={handleInteraction}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* Invisible area - maintains scroll functionality */}
      </div>
    </section>
  );
};export default HeroSection;