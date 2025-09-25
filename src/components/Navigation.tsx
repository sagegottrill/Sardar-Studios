import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sardar Studios
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ml-4 border border-white/20"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Let's Talk
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden !bg-black border-t border-gray-800 shadow-2xl relative z-60">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 rounded-lg text-base font-medium transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 rounded-lg text-base font-medium transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 rounded-lg text-base font-medium transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 rounded-lg text-base font-medium transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-white hover:bg-gray-100 text-black px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mx-4 mt-4 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;