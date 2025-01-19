import React, { useState } from 'react';

const Header = () => {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '#events' },
    { name: 'Resources', href: '#resources' },
    { name: 'Organizers', href: '#organizers' },
    { name: 'Contact', href: '#contact' },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
   <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6">

      <div className="flex justify-between items-center py-2 sm:py-2 lg:py-1">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <img 
            src="1.png" 
            className="w-14 h-14 sm:w-15 sm:h-15 md:w-24 md:h-20 lg:w-25 lg:h-25" 
            alt="Logo" 
          />

          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (Toggle visibility based on `isMobileMenuOpen`) */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="flex flex-col space-y-4 mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
