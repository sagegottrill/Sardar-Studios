import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter signup
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Stay in the Loop
            </h3>
            <p className="text-gray-300 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              Get weekly insights on digital marketing trends, growth strategies, and exclusive tips to scale your business.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="bg-green-500/20 border border-green-500/30 text-green-300 p-4 rounded-lg backdrop-blur-sm max-w-md mx-auto">
                <div className="text-center">
                  <span className="font-semibold">Thanks for subscribing!</span>
                </div>
              </div>
            )}

            <p className="text-xs text-gray-400 mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              By subscribing, you consent to receive marketing emails in line with our privacy policy.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Sardar Studios</h3>
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Cutting through the noise. Building brands that stand out.
              Digital marketing for ambitious businesses ready to grow.
            </p>
            <div className="space-y-2 text-gray-300">
              <a href="https://linkedin.com/company/sardastudios" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>LinkedIn</a>
              <a href="https://instagram.com/sardastudios" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Instagram</a>
              <a href="https://twitter.com/sardastudios" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Twitter</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>SEO & Content Strategy</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Paid Advertising</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Social Media Marketing</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Web Design & Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Brand Strategy</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Analytics & Optimization</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>About Us</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Case Studies</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Contact</button></li>
              <li><a href="/blog" className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Blog</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Email</p>
                <a href="mailto:hello@sardastudios.com" className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  hello@sardastudios.com
                </a>
              </div>
              <div>
                <p className="font-medium text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Location</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }}>London, United Kingdom</p>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>Serving clients globally</p>
              </div>
              <div>
                <p className="font-medium text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Response Time</p>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              © {currentYear} Orivon Edge. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;