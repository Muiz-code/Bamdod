import React from "react";
import { stapleMunchItems } from "../data/stapleCardsData"; 

const StapleMunch: React.FC = () => {
  return (
    <div className="p-4">
      <h2 id="staple-munch" className="text-2xl font-title mx-7 mb-6 text-green-800">Staple Munch.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:border-r-2 gap-6">
        {stapleMunchItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white transform hover:scale-105 transition-transform duration-500 ease-in-out p-4 h-full" // Use flex and full height
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-90 object-cover transition-transform duration-300"
            />
            <div className="flex-grow p-4"> {/* Allow this to grow to fill space */}
              <h3 className="text-xl font-title mb-2 text-gray-800">{item.name}</h3>
              <p className="text-green-800 font-body-bold mb-4">{item.description}</p>
              <p className="font-body mb-2">Ingredients:</p>
              <ul className="list-disc list-inside mb-2">
                {item.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600 font-body">{ingredient}</li>
                ))}
              </ul>
              <p className="text-green-600 font-body text-lg">
                ${item.price.toFixed(2)}
              </p>
              <p className={`text-sm font-body ${item.available ? "text-green-600" : "text-red-600"}`}>
                {item.available ? "Available" : "Out of Stock"}
              </p>
            </div>
            <button
              className="mt-4 w-full cursor-pointer bg-green-800 text-white font-body py-2 rounded-lg hover:bg-green-700 transition duration-300"
              disabled={!item.available}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StapleMunch;

