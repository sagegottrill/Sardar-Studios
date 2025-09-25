import React, { useState, useEffect, useRef } from 'react';

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const faqs = [
    {
      question: "What does a digital marketing agency do?",
      answer: "A digital marketing agency specializes in leveraging online channels and strategies to promote your business, products, and services. Our primary goal is to enhance your company's online presence and drive targeted traffic, ultimately leading to increased brand awareness and sales. We offer comprehensive services including SEO, PPC advertising, content creation, social media marketing, email marketing, and web design."
    },
    {
      question: "How long is a partnership term?",
      answer: "We work with clients on flexible terms starting from 3 months, with most partnerships running 6-12 months initially. This allows us to prove our value and demonstrate measurable results before committing to longer terms. We believe in building lasting relationships based on proven results rather than long-term contracts."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a full suite of digital marketing services: SEO & Content Strategy, Paid Advertising (Google Ads, Facebook/Instagram Ads), Social Media Marketing & Management, Web Design & Development, Brand Strategy, Email Marketing, Analytics & Optimization, and Conversion Rate Optimization. We can handle your complete digital presence or focus on specific channels."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "While we specialize in working with small to medium-sized businesses (SMBs), we work with companies of all sizes. Our approach is tailored to your budget, goals, and current marketing maturity. Whether you're a startup looking to establish your online presence or an established business wanting to scale, we can help."
    },
    {
      question: "How do you measure success?",
      answer: "We focus on measurable KPIs that align with your business goals. This includes website traffic growth, conversion rates, cost per acquisition, return on ad spend (ROAS), organic search rankings, social media engagement, and revenue attribution. We provide transparent reporting and regular strategy reviews to ensure we're delivering results."
    },
    {
      question: "What's your typical timeline for seeing results?",
      answer: "Results vary by service: SEO typically shows results in 3-6 months, paid advertising can show immediate results, and social media marketing builds momentum over 2-3 months. We provide realistic timelines upfront and focus on sustainable, long-term growth rather than quick wins."
    },
    {
      question: "Do you offer website design and development?",
      answer: "Yes, we offer complete web design and development services. From responsive websites to e-commerce platforms, we build conversion-optimized sites that work across all devices. Our websites are designed with SEO best practices, fast loading speeds, and user experience in mind."
    },
    {
      question: "What's included in your monthly reporting?",
      answer: "Our monthly reports include comprehensive analytics on all campaigns, ROI analysis, competitor insights, recommendations for optimization, and clear next steps. We also schedule monthly strategy calls to review performance and plan for the upcoming month."
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

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-gray-900">
              Got Questions?
            </span>
            <br />
            <span className="text-gray-900">
              We've Got Answers
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with Sardar Studios.
            Can't find what you're looking for? Get in touch and we'll be happy to help.
          </p>
        </div>

        {/* FAQ Items */}
        <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-200 ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-200 mb-6 max-w-md mx-auto">
              We're here to help. Book a free consultation and get personalized answers to your specific situation.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;