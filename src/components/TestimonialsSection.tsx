import React, { useState, useEffect, useRef } from 'react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      quote: "Sardar Studios transformed our digital presence completely. Their strategic approach helped us increase our online revenue by 300% in just 6 months. The team's expertise in both creativity and data-driven results is unmatched.",
      name: "Sarah Johnson",
      position: "CEO, TechCorp Solutions",
      company: "TechCorp",
      image: "https://d64gsuwffb70l.cloudfront.net/68d4680df89a05716d5da7b5_1758750806871_200bf148.webp",
      rating: 5,
      metrics: { growth: "300%", timeframe: "6 months", type: "Revenue Increase" },
      color: "from-gray-600 to-gray-800"
    },
    {
      quote: "Working with Asad and his team was a game-changer for our B2B lead generation. They didn't just deliver campaigns; they delivered a complete strategy that aligned with our business goals. Our sales team is now overwhelmed with qualified leads.",
      name: "Michael Chen",
      position: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      image: "https://d64gsuwffb70l.cloudfront.net/68d4680df89a05716d5da7b5_1758750808601_d4a7bd1e.webp",
      rating: 5,
      metrics: { growth: "400%", timeframe: "8 months", type: "Lead Generation" },
      color: "from-gray-600 to-gray-800"
    },
    {
      quote: "The brand repositioning project exceeded all our expectations. Sardar Studios helped us clarify our message and create a visual identity that truly represents who we are. Our brand recognition has doubled, and client inquiries have increased by 60%.",
      name: "Emma Rodriguez",
      position: "Founder, InnovateNow Agency",
      company: "InnovateNow",
      image: "https://d64gsuwffb70l.cloudfront.net/68d4680df89a05716d5da7b5_1758750810327_228fe146.webp",
      rating: 5,
      metrics: { growth: "200%", timeframe: "4 months", type: "Brand Awareness" },
      color: "from-gray-600 to-gray-800"
    },
    {
      quote: "Local SEO and reputation management transformed our business. We went from being invisible online to dominating our local market. The team's attention to detail and ongoing optimization is incredible.",
      name: "David Park",
      position: "Owner, ScaleUp Services",
      company: "ScaleUp Services",
      image: "https://d64gsuwffb70l.cloudfront.net/68d4680df89a05716d5da7b5_1758750812049_3f8b0c4e.webp",
      rating: 5,
      metrics: { growth: "250%", timeframe: "5 months", type: "Local Visibility" },
      color: "from-gray-600 to-gray-800"
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

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);

      return () => clearInterval(timer);
    }
  }, [isVisible, testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              What Our Clients
            </span>
            <br />
            <span className="text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Really Say
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Don't just take our word for it. Here's what business leaders say about
            working with Sardar Studios and the results they achieved.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <svg className="w-20 h-20 text-white opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-xl opacity-30 animate-pulse"></div>
                </div>
              </div>

              <blockquote className="text-2xl lg:text-3xl text-white leading-relaxed mb-8 text-center font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-6">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white/20 shadow-lg"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full opacity-20 animate-pulse`}></div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-white text-xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-300 text-lg mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-white font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-3xl blur-3xl opacity-20 -z-10`}></div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className={`flex justify-center space-x-4 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`group relative transition-all duration-500 ${
                currentTestimonial === index ? 'scale-125' : 'hover:scale-110'
              }`}
            >
              <div               className={`w-4 h-4 rounded-full bg-gradient-to-r ${testimonial.color} transition-all duration-300 ${
                currentTestimonial === index ? 'shadow-lg shadow-white/50' : ''
              }`}></div>
              {currentTestimonial === index && (
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-white animate-ping"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mini Testimonials Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 ${
                currentTestimonial === index ? 'ring-2 ring-white/50 bg-white/10' : ''
              }`}
            >
              <div className="mb-4">
                <h5 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{testimonial.name}</h5>
                <p className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{testimonial.company}</p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                "{testimonial.quote.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;