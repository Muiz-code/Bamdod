import React, { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Load cart items from localStorage when the cart opens
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // Handle Remove Item
  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Dispatch event to update cart count
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleClearCart = () => {
    setCartItems([]); // Clear local state
    localStorage.removeItem("cart"); // Clear from localStorage

    // Update cart count in Navbar
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-1000 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-title">Your Cart.</h2>
        <HiOutlineX className="cursor-pointer text-2xl" onClick={onClose} />
      </div>

      <div className="flex flex-col space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-body">{item.name}</p>
                <p className="font-body text-gray-500">${item.price}</p>
              </div>
              <button
                className="text-red-500 text-sm font-body"
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="font-title">Your cart is currently empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Total Amount:</p>
            <p className="text-lg font-bold">${totalAmount.toFixed(2)}</p>
          </div>

          {/* Remove All Items Button */}
          <div className="flex flex-col gap-2">
            <button
              className="bg-red-600 font-body text-white p-3 rounded-lg cursor-pointer hover:bg-red-500 transition duration-300 shadow-md"
              onClick={handleClearCart}
            >
              Remove All
            </button>

            {/* Proceed to Checkout Button */}
            <Link to="/checkout">
              <button className="bg-green-800 font-body text-white p-3 rounded-lg cursor-pointer hover:bg-green-700 transition duration-300 shadow-md">
                Proceed to Checkout🚀
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Start Shopping Button */}
      {cartItems.length === 0 && (
        <button
          className="mt-4 w-full font-body bg-green-800 text-white p-2 rounded cursor-pointer"
          onClick={onClose}
        >
          Start Shopping
        </button>
      )}
    </div>
  );
};

export default Cart;
