import React from 'react';
import { FaArrowUp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="bg-gray-100 py-8 relative">
      <div className="flex items-center mb-4">
        <a href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-18 w-auto md:h-16 lg:h-30 object-contain" // Logo size
          />
        </a>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-stretch"> {/* Use items-stretch */}
          <div className="text-center md:text-left mb-6 md:mb-0 flex-grow"> {/* Added flex-grow */}
            <h2 className="text-2xl font-title mb-2">Bamdo Lod Food Ingredients Delivery Services.</h2>
            <p className="mb-4 font-body">
              We simplify meal preparation by delivering fresh, high-quality ingredients to our <br /> customers, promoting healthy eating and convenience. It is price friendly and it <br /> saves stress.
            </p>
            <p className="mb-6 font-body">
              Busy schedules, inconveniences in purchase locations, and limited access to fresh <br /> ingredients make it challenging for our target market to prepare meals. Our services <br /> addresses this need by providing convenient and affordable access to fresh ingredients <br /> with swift delivery.
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col w-full md:w-1/3">
            <h3 className="text-lg font-title mb-2">Newsletter.</h3>
            <p className="mb-4 font-body">Sign up for exclusive offers and more.</p>
            <div className="flex mb-5"> {/* Use flex-grow */}
              <input
                type="email"
                placeholder="Your email"
                className="border outline-none font-body border-gray-300 rounded-l-md p-2 w-60"
              />
              <button className="bg-green-800 cursor-pointer text-white rounded-r-md px-4">
                &gt;
              </button>
            </div>
            <button 
              onClick={scrollToTop} 
              className="flex items-center cursor-pointer justify-center bg-green-800 text-white font-body rounded-md w-60 py-2 mt-2 transition duration-300 hover:bg-green-700"
            >
              <FaArrowUp className="mr-2" /> {/* Arrow icon */}
              Back to top🚀
            </button>

          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4 mt-6">
          <a href="https://bamdolod@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-green-800 hover:text-green-800 transition text-xl" />
          </a>
          <a href="https://www.instagram.com/bamdolod?utm_source=qr&igsh=YXVzazhtaW84dHlz" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-green-800 hover:text-green-800 transition text-xl" />
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm font-body">
            &copy; {new Date().getFullYear()} Bamdo Lod. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;