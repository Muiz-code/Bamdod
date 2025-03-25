import React from "react";
import { Link } from "react-router-dom";

const OrderCompleted: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-green-600 text-2xl font-bold mb-4">
          🎉 Order Completed!
        </h1>
        <p className="text-gray-700 font-body mb-4">
          Thank you for your purchase! Your order has been successfully placed.
        </p>
        <Link to="/">
          <button className="bg-green-700 text-white font-body p-2 rounded">
            Return to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderCompleted;
