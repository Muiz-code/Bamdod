import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
      <h1 className="font-header text-center text-green-600">CheckOut Page.</h1>
        <h2 className="text-xl font-title mb-4">Contact.</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border font-body border-gray-300 focus:ring-2 focus:ring-green-600 outline-none rounded mb-2"
        />
        <label className="flex items-center font-body mb-2">
          <input type="checkbox" className="mr-2 font-body" />
          Email me with news and offers.
        </label>

        <h2 className="text-xl font-title mt-4 mb-4">Delivery.</h2>
        
        {/* Country/Region Dropdown */}
        <select className="w-full p-2 border border-gray-300 cursor-pointer rounded mb-2 focus:ring-2 focus:ring-green-600 outline-none">
          <option className='font-body'>Country/Region</option>
          <option className='font-body'>Nigeria</option>
          <option className='font-body'>United States</option>
          <option className='font-body'>United Kingdom</option>
          <option className='font-body'>Ghana</option>
          <option className='font-body'>India</option>
          {/* Add more options as needed */}
        </select>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-2 border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none rounded mb-2 font-body"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-2 border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none rounded mb-2 font-body"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full p-2 border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none rounded mb-2 font-body"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full p-2 border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none rounded mb-2 font-body"
        />
        <input
          type="text"
          placeholder="Postal code (optional)"
          className="w-full p-2 border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none rounded mb-2 font-body"
        />
        <input
          type="text"
          placeholder="State (optional)"
          className="w-full p-2 border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none rounded mb-4 font-body"
        />

        <h2 className="text-xl font-title mt-4 mb-4">Payments.</h2>
        <div className="border border-gray-300 p-4 rounded mb-4">
          <h3 className="font-semibold mb-2 font-body">Bank Transfer.</h3>
          <p className="text-sm mb-2 font-body">
            Use the Instant Transfer option to pay the total amount due to:
          </p>
          <p className="font-title">Account Name: S.E.S.LTD - WALLET CREDITS.</p>
          <p className="font-title">Account Number: 015391258</p>
          <p className="font-title">Bank: GTB</p>
          <p className="text-sm mt-2 font-body">
            Use your order number as reference and email us at{' '}
            <a href="mailto:service@supermart.ng" className="text-blue-500">
              bamdolod@gmail.com
            </a>{' '}
            with the transfer receipt.
          </p>
        </div>

        <button className="bg-green-700 font-body cursor-pointer text-white p-2 rounded w-full mb-4">
          Complete Order
        </button>
      </div>

      {/* Right Side: Fixed Summary */}
      <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded shadow md:fixed md:right-0 md:top-0 md:h-full">
        <h2 className="text-xl font-title mb-4">Order Summary:-</h2>
        <div className="flex justify-between mb-2">
          <span className='font-body'>Ramadan Kitchen Bundle</span>
          <span className='font-body'>₦35,000.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className='font-body'>Subtotal</span>
          <span className='font-body'>₦35,000.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className='font-body'>Shipping</span>
          <span className='font-body'>₦0.00</span>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span className='font-body'>Total</span>
          <span className='font-body'>₦35,000.00</span>
        </div>
        <button className="bg-green-700 font-body cursor-pointer text-white p-2 rounded w-full mb-4">
          Apply
        </button>

        <Link to='/'><p className="font-body bg-green-700 cursor-pointer text-white p-2 rounded text-center">
          Back to Homepage👈🏻
        </p>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;