import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t-4 border-blue-500">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            {/* Logo & Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" 
                src={logo} 
                alt="GARIWALA Logo" 
              />
              <div>
                <h2 className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  GARIWALA
                </h2>
                <p className="text-xs text-gray-500 font-semibold">Premium Car Rentals</p>
              </div>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted partner for premium car rentals across Bangladesh. Experience luxury, comfort, and convenience at unbeatable prices.
            </p>

            {/* Social Media Links with Gradient Buttons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm bg-gradient-to-r from-blue-600 to-blue-500 border-none text-white hover:scale-110 transition-transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white hover:scale-110 transition-transform"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm bg-gradient-to-r from-pink-500 to-rose-500 border-none text-white hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm bg-gradient-to-r from-blue-700 to-blue-600 border-none text-white hover:scale-110 transition-transform"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/browse-cars" 
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-green-600 to-green-400 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Gulshan, Dhaka 1212, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <FaEnvelope className="text-blue-600 flex-shrink-0" />
                <a 
                  href="mailto:info@gariwala.com" 
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  info@gariwala.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <FaPhone className="text-red-600 flex-shrink-0" />
                <a 
                  href="tel:+8801234567890" 
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  +880 1234-567890
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <FaClock className="text-orange-600 flex-shrink-0" />
                <span className="text-sm">24/7 Support Available</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-purple-400 rounded-full"></span>
              Newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to get the latest deals, offers, and updates!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="btn btn-primary w-full bg-gradient-to-r from-blue-600 to-blue-500 border-none text-white hover:scale-105 transition-transform"
              >
                Subscribe Now
              </button>
            </form>
            
            {/* Trust Badges */}
            <div className="mt-6 flex gap-2 font-bold">
              <div className="badge badge-success gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Verified
              </div>
              <div className="badge badge-info gap-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
                Trusted
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider with gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"></div>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-sm text-gray-300">
              © {currentYear} <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">GARIWALA</span>. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <Link to="/terms" className="hover:text-blue-400 transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/cookie-policy" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>

            {/* Made with love */}
            <p className="text-sm text-gray-300 flex items-center gap-1">
              Made with 
              <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              in Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="btn btn-circle bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white shadow-lg hover:scale-110 transition-transform fixed bottom-20 right-5 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;