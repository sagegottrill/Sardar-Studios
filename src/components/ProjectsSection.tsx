import React, { useState, useEffect, useRef } from 'react';

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Our Work
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Real results for real businesses.
          </p>
        </div>

        {/* Creative Media Showcase */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-7xl mx-auto">
            {/* Top Row - Large video and image */}
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              <div className="relative group lg:w-2/3">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <video
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    autoPlay
                  >
                    <source src="/con1v.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="relative group lg:w-1/3">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <img
                    src="/img4.jpg"
                    alt="Project showcase"
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Middle Row - Staggered images */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="relative group md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <img
                    src="/img3.jpg"
                    alt="Project showcase"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="relative group md:w-1/2 md:mt-12">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <video
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    autoPlay
                  >
                    <source src="/con2v.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Single centered image */}
            <div className="flex justify-center">
              <div className="relative group max-w-2xl w-full">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <img
                    src="/img1.jpg"
                    alt="Project showcase"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;