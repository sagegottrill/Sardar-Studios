import React, { useState, useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const values = [
    {
      title: 'Transparency',
      description: 'Clear reporting, honest communication, and no hidden surprises in our partnerships.',
    },
    {
      title: 'Creativity',
      description: 'Innovative strategies that help your brand stand out in crowded marketplaces.',
    },
    {
      title: 'Results-Driven',
      description: 'Every campaign is measured, optimized, and focused on delivering measurable ROI.',
    }
  ];

  const stats = [
    // Stats removed as requested
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
      id="about"
      className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-white/80">About Sardar Studios</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Digital Marketing
            </span>
            <br />
            <span className="text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              The Power of Process
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Our digital marketing process gets to the heart of your business, your customers,
            your challenges and ambitions. Every solution is made to measure, powered by
            battle-tested methodology that guarantees exceptional results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-20 items-center mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Your digital transformation challenges are unique. So every solution we create
                is made to measure. Powered by a personalised, battle-tested process we never stray from.
                It's how we guarantee exceptional results – every single time.
              </p>
            </div>
          </div>

          {/* Founder Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/68d4680df89a05716d5da7b5_1758750795031_167543a5.webp"
                alt="Asad Sardar - Founder"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
                <div className="text-center">
                  <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>Available for Projects</span>
                </div>
              </div>

              {/* Founder Info Card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-xs">
                <div className="mb-3">
                  <h4 className="font-bold text-gray-900 text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Asad Sardar</h4>
                  <p className="text-purple-600 font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Founder & Digital Strategist</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Experienced digital consultant with a passion for results-driven marketing
                  and helping businesses achieve extraordinary growth.
                </p>
                <div className="space-y-2 text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div>5+ Years Experience</div>
                  <div>50+ Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl blur-3xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <span className="text-white">
                Our Core Values
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              These principles guide everything we do and ensure we deliver exceptional results for every client.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {value.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-600 via-gray-800 to-black rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 animate-gradient" style={{
                background: 'linear-gradient(45deg, #4b5563, #1f2937, #111827, #4b5563)',
                backgroundSize: '400% 400%'
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Ready to Work Together?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Let's discuss how we can help your business cut through the noise and achieve remarkable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Let's Talk Strategy
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                  View Our Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;