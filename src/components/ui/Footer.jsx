import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold">Stay Connected</h3>
          <p className="mt-2 text-lg">Follow us on social media for updates and news.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaTwitter size={30} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
            <FaFacebook size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub size={30} />
          </a>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 Muhammad Zubair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
