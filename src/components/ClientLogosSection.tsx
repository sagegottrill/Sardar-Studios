import React, { useState, useEffect, useRef } from 'react';

const ClientLogosSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Mock client logos - in real implementation, these would be actual client logos
  const clients = [
    { name: "TechCorp Solutions", industry: "Technology" },
    { name: "GrowthCo Consulting", industry: "Consulting" },
    { name: "InnovateNow Agency", industry: "Marketing" },
    { name: "ScaleUp Services", industry: "Services" },
    { name: "DataFlow Systems", industry: "Technology" },
    { name: "BrandCraft Studio", industry: "Design" },
    { name: "RevenueMax Inc", industry: "Finance" },
    { name: "EcoBuild Solutions", industry: "Construction" },
    { name: "HealthFirst Clinic", industry: "Healthcare" },
    { name: "EduLearn Platform", industry: "Education" },
    { name: "RetailPlus Chain", industry: "Retail" },
    { name: "LogiTrans Co", industry: "Logistics" }
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
      className="relative py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've partnered with businesses across industries to drive growth and achieve remarkable results.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{client.name}</h3>
              <p className="text-xs text-gray-500">{client.industry}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Client Partnerships</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
              <div className="text-sm text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;