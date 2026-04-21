import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo + Clinic Name */}
          <div className="flex items-center space-x-3">
            <div className="w-20 h-15 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-3xl">
              SMH
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-blue-800">                Santosh Medical Hall              </h1>
              <p className="text-xs md:text-sm text-gray-600 font-medium hidden sm:block">
                आपकी सेहत, हमारी जिम्मेदारी.
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Services
            </a>


            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Contact
            </a>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+917909097317"
                className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
              >
                📞 Call Now
              </a>
              <a
                href="#appointment"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-green-600 transition transform hover:scale-105"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close icon
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">
              Home
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">
              About
            </a>
            <a href="#services" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">
              Services
            </a>

            <a href="#contact" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">
              Contact
            </a>

            {/* Mobile CTAs */}
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="tel:+918603990820"
                className="block text-center py-3 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50"
              >
                Call Now: +91 86039 90820
              </a>
              <a
                href="#appointment"
                className="block text-center py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-medium shadow-md hover:from-blue-700 hover:to-green-600"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;