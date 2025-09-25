import React, { useState, useEffect, useRef } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const openCalendly = () => {
    // In a real app, this would open Calendly
    window.open('https://calendly.com/sardastudios', '_blank');
  };

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

  const contactInfo = [
    {
      title: 'Email Us',
      content: 'hello@sardastudios.com',
    },
    {
      title: 'Based in London',
      content: 'Serving clients globally',
    },
    {
      title: 'Response Time',
      content: 'Within 24 hours',
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Unleash Your
            </span>
            <br />
            <span className="text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Digital Potential Today
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Let's discuss your project and see how we can help your business cut through the noise
            and achieve remarkable growth. Every conversation starts with understanding your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Get Your Free Consultation
                </h3>
                <p className="text-gray-300 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Fill out the form and we'll get back to you within 24 hours with a customized strategy
                  for your business. No pressure, just pure value.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-300 group-focus-within:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-300 group-focus-within:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="company" className="block text-sm font-semibold mb-3 text-gray-300 group-focus-within:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                    placeholder="Your company"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="projectType" className="block text-sm font-semibold mb-3 text-gray-300 group-focus-within:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                    >
                      <option value="" className="bg-gray-800">Select a service</option>
                      <option value="seo" className="bg-gray-800">SEO & Content Strategy</option>
                      <option value="ppc" className="bg-gray-800">Paid Advertising</option>
                      <option value="social" className="bg-gray-800">Social Media Marketing</option>
                      <option value="web" className="bg-gray-800">Web Design & Development</option>
                      <option value="brand" className="bg-gray-800">Brand Strategy</option>
                      <option value="analytics" className="bg-gray-800">Analytics & Optimization</option>
                      <option value="comprehensive" className="bg-gray-800">Comprehensive Package</option>
                    </select>
                  </div>

                  <div className="group">
                    <label htmlFor="budget" className="block text-sm font-semibold mb-3 text-gray-300 group-focus-within:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                    >
                      <option value="" className="bg-gray-800">Select budget range</option>
                      <option value="under-5k" className="bg-gray-800">Under £5,000</option>
                      <option value="5k-10k" className="bg-gray-800">£5,000 - £10,000</option>
                      <option value="10k-25k" className="bg-gray-800">£10,000 - £25,000</option>
                      <option value="25k-plus" className="bg-gray-800">£25,000+</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-300 group-focus-within:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 resize-none"
                    placeholder="Tell us about your project goals, challenges, and what you're looking to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send My Project Details'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/30 text-green-300 p-4 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="font-semibold">Thank you! We'll be in touch within 24 hours.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Calendly CTA */}
            <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer" onClick={openCalendly}>
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 animate-gradient" style={{
                  background: 'linear-gradient(45deg, #4b5563, #1f2937, #111827, #4b5563)',
                  backgroundSize: '400% 400%'
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Prefer to Schedule a Call?</h4>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Book a 30-minute strategy call to discuss your project in detail and get immediate insights.
                </p>
                <div className="flex items-center text-sm text-gray-200">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  Free consultation • No commitment
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <h5 className="font-semibold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {info.title}
                  </h5>
                  <p className="text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {info.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;