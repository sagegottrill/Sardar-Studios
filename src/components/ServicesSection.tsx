import React, { useState, useEffect, useRef } from 'react';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const services = [
    {
      title: 'SEO & Content Strategy',
      description: 'Rank higher, attract more qualified leads through strategic content and technical optimization.',
      features: ['Keyword Research', 'Content Strategy', 'Technical SEO', 'Performance Tracking'],
      stats: { improvement: '150%', time: '3 months' }
    },
    {
      title: 'Paid Advertising',
      description: 'Google Ads, Facebook, LinkedIn campaigns that deliver measurable ROI and scale profitably.',
      features: ['Campaign Strategy', 'Ad Creation', 'Bid Optimization', 'Conversion Tracking'],
      stats: { improvement: '300%', time: '2 months' }
    },
    {
      title: 'Social Media Marketing',
      description: 'Build engaged communities and convert followers into customers across all platforms.',
      features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Analytics'],
      stats: { improvement: '250%', time: '4 months' }
    },
    {
      title: 'Web Design & Development',
      description: 'Conversion-focused websites that represent your brand and drive business growth.',
      features: ['UI/UX Design', 'Responsive Development', 'E-commerce', 'Performance Optimization'],
      stats: { improvement: '200%', time: '6 weeks' }
    },
    {
      title: 'Brand Strategy',
      description: 'Define your unique position, messaging, and visual identity to stand out from competitors.',
      features: ['Brand Discovery', 'Positioning Strategy', 'Visual Identity', 'Brand Guidelines'],
      stats: { improvement: '180%', time: '2 months' }
    },
    {
      title: 'Analytics & Optimization',
      description: 'Data-driven insights to continuously improve performance and maximize marketing spend.',
      features: ['Data Analysis', 'A/B Testing', 'Conversion Optimization', 'Reporting'],
      stats: { improvement: '175%', time: 'Ongoing' }
    }
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

  // Auto-scroll carousel
  useEffect(() => {
    if (!isVisible || !carouselRef.current) return;

    const carousel = carouselRef.current;
    let animationId: number;

    const autoScroll = () => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScroll) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isVisible]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('/secb.jpg')`,
      }}
    >
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6 font-heading">
            <span className="text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Services That
            </span>
            <br />
            <span className="text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Drive Results
            </span>
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
            We combine strategic thinking with cutting-edge execution to deliver
            measurable growth across every channel and platform.
          </p>
        </div>

        {/* Services Carousel */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden -mx-8 sm:-mx-12 lg:-mx-16">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                marginLeft: '-8rem',
                marginRight: '-8rem',
              }}
            >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 font-accent leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 mb-6 leading-relaxed font-body text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-white/60 mr-3 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm font-body" style={{ fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-white font-tech">{service.stats.improvement}</div>
                        <div className="text-xs text-white/60 font-body" style={{ fontFamily: "'Inter', sans-serif" }}>Avg. Improvement</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white font-tech">{service.stats.time}</div>
                        <div className="text-xs text-white/60 font-body" style={{ fontFamily: "'Inter', sans-serif" }}>Timeline</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/40 transition-all duration-300"
              ></div>
            ))}
          </div>
        </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl mx-auto max-w-4xl"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 font-heading" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-body leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Let's discuss how we can help you achieve extraordinary results with our proven strategies and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-tech"
                >
                  Start Your Project
                </button>
                <button className="border-2 border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm font-tech">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;