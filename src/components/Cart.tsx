import React from 'react';
import { HiOutlineX } from 'react-icons/hi';

interface CartProps {
  onClose: () => void; // Function to handle closing the cart
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4 transition-transform duration-300 ease-in-out transform">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <HiOutlineX className="cursor-pointer text-2xl" onClick={onClose} />
      </div>
      {/* Placeholder for cart items */}
      <div className="flex flex-col">
        <p>Your cart is currently empty.</p>
      </div>
      <button
        className="mt-4 w-full bg-green-800 text-white p-2 rounded cursor-pointer"
        onClick={onClose}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default Cart;