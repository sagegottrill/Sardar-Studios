import React, { useState, useEffect, useRef } from 'react';

const AwardsPartnersSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const awards = [
    {
      name: "Google Partner",
      description: "Certified Google Ads & Analytics Partner",
      icon: "🌐",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Meta Business Partner",
      description: "Official Meta Advertising Partner",
      icon: "📘",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Clutch Top Developer",
      description: "Recognized by Clutch.co",
      icon: "⭐",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "5-Star Google Reviews",
      description: "Consistently rated 5-stars on Google",
      icon: "⭐",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Shopify Expert",
      description: "Certified Shopify Development Partner",
      icon: "🛍️",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "HubSpot Partner",
      description: "Official HubSpot Marketing Partner",
      icon: "🎯",
      color: "from-gray-600 to-gray-800"
    }
  ];

  const partners = [
    { name: "Google", logo: "🇬" },
    { name: "Meta", logo: "🇲" },
    { name: "Shopify", logo: "🛒" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Mailchimp", logo: "📧" },
    { name: "Canva", logo: "🎨" },
    { name: "Zapier", logo: "🔗" },
    { name: "Slack", logo: "💬" }
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
      className="relative py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Awards & Partnerships
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized by industry leaders and trusted by the world's biggest platforms.
            Your success is backed by proven expertise and official partnerships.
          </p>
        </div>

        {/* Awards Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${award.color} flex items-center justify-center text-white text-xl flex-shrink-0`}>
                  {award.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{award.name}</h3>
                  <p className="text-sm text-gray-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">
            Technology Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-4xl">{partner.logo}</div>
                <span className="text-sm font-medium text-gray-600">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
              <div className="text-sm text-gray-600">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsPartnersSection;