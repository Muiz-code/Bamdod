/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import AOS from "aos";
import "aos/dist/aos.css";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  imageUrl: string;
  ingredients: string[];
}

const ItemsSection: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const [, setCart] = useState<CartItem[]>([]);
  const [isMobile, setIsMobile] = useState(false); // Track if mobile view
  const [showDetails, setShowDetails] = useState<number | null>(null); // Track which item to show details for

  // Load cart from localStorage on mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animations
      once: true, // animation will only occur once
    });

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    // Detect if it's mobile
    const checkIfMobile = window.innerWidth <= 768;
    setIsMobile(checkIfMobile);

    // Handle window resize to change mobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle Add to Cart
  const handleAddToCart = (item: CartItem) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...storedCart, item];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Notify Navbar of cart update
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Filtered Data based on Search Query for each category
  const filteredStapleMunch = data.stapleMunchItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const filteredFruitBlend = data.fruitBlendData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const filteredLocalDelicacies = data.localCardsData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="p-4 flex flex-col gap-10">
      {/* Staple Munch Section */}
      <div>
        <h2 className="text-2xl font-title mx-7 mb-6 text-green-800">
          Staple Munch.
        </h2>
        <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-3 sm:border-r-2 gap-6">
          {filteredStapleMunch.map((item: CartItem) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white p-4 h-full relative group"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-60 object-cover"
              />
              <div
                className="flex-grow p-4 relative z-10"
                onClick={() =>
                  isMobile &&
                  setShowDetails(showDetails === item.id ? null : item.id)
                }
              >
                <h3 className="text-xl font-title mb-2">{item.name}</h3>
                <p className="font-body text-green-800 mb-4 font-body-bold">
                  {item.description}
                </p>
                <p className="text-green-600 font-body text-lg">
                  ₦{item.price.toFixed(2)}
                </p>
                <p
                  className={`text-sm font-body ${
                    item.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.available ? "Available" : "Out of Stock"}
                </p>
              </div>

              {/* Overlay */}
              <div
                className={`z-10 absolute inset-0 bg-black bg-opacity-50 transition-all duration-1000 opacity-0 group-hover:opacity-100 p-5  ${
                  isMobile && showDetails === item.id ? "opacity-100" : ""
                }`}
                style={{
                  bottom: isMobile && showDetails === item.id ? 0 : "-100%",
                }}
              >
                <div className="flex flex-col gap-5 text-white p-4 justify-content-between ">
                  <h3 className="text-xl font-title">{item.name}</h3>
                  <p className="text-sm font-title">{item.description}</p>
                  <div className="justify-start flex">
                    <ul className="list-disc list-inside mb-2">
                      {item.ingredients.map(
                        (ingredient: string, index: number) => (
                          <li key={index} className="text-white font-body">
                            {ingredient}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <button
                    className="cursor-pointer mt-4 px-6 py-2 bg-green-800 text-white rounded-lg transition hover:bg-green-700"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Fruit Blends Section */}
      <div>
        <h2 className="text-2xl font-title mx-7 mb-6 text-green-800">
          Fruit Blends.
        </h2>
        <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-3 sm:border-r-2 gap-6">
          {filteredFruitBlend.map((item: CartItem) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white p-4 h-full relative group"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-60 object-cover"
              />
              <div
                className="flex-grow p-4 relative z-10"
                onClick={() =>
                  isMobile &&
                  setShowDetails(showDetails === item.id ? null : item.id)
                }
              >
                <h3 className="text-xl font-title mb-2">{item.name}</h3>
                <p className="font-body text-green-800 mb-4 font-body-bold">
                  {item.description}
                </p>
                <p className="text-green-600 font-body text-lg">
                  ₦{item.price.toFixed(2)}
                </p>
                <p
                  className={`text-sm font-body ${
                    item.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.available ? "Available" : "Out of Stock"}
                </p>
              </div>

              {/* Overlay */}
              <div
                className={`z-10 absolute inset-0 bg-black bg-opacity-50 transition-all duration-1000 opacity-0 group-hover:opacity-100 p-5 ${
                  isMobile && showDetails === item.id ? "opacity-100" : ""
                }`}
                style={{
                  bottom: isMobile && showDetails === item.id ? 0 : "-100%",
                }}
              >
                <div className="flex flex-col gap-5  text-white p-4 ">
                  <h3 className="text-xl font-title">{item.name}</h3>
                  <p className="text-sm">{item.description}</p>
                  <div className="justify-start flex">
                    <ul className="list-disc list-inside mb-2">
                      {item.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-white font-body">
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="cursor-pointer mt-4 px-6 py-2 bg-green-800 text-white rounded-lg transition hover:bg-green-700"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Local Delicacies Section */}
      <div>
        <h2 className="text-2xl font-title mx-7 mb-6 text-green-800">
          Local Delicacies.
        </h2>
        <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-3 sm:border-r-2 gap-6">
          {filteredLocalDelicacies.map((item: CartItem) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white p-4 h-full relative group"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-60 object-cover"
              />
              <div
                className="flex-grow p-4 relative z-10"
                onClick={() =>
                  isMobile &&
                  setShowDetails(showDetails === item.id ? null : item.id)
                }
              >
                <h3 className="text-xl font-title mb-2">{item.name}</h3>

                <p className="font-body text-green-800 mb-4 font-body-bold">
                  {item.description}
                </p>

                <p className="font-body text-green-600 text-lg">
                  ₦{item.price}
                </p>
              </div>

              {/* Overlay that appears with sliding effect */}
              <div
                className={`z-10 absolute inset-0 bg-black bg-opacity-50 transition-all duration-1000 opacity-0 group-hover:opacity-100 ${
                  isMobile && showDetails === item.id ? "opacity-100" : ""
                }`}
                style={{
                  bottom: isMobile && showDetails === item.id ? 0 : "-100%",
                }}
              >
                <div className="flex flex-col gap-5 text-white p-4 justify-content-between ">
                  <h3 className="text-xl font-title">{item.name}</h3>
                  <p className="text-sm">{item.description}</p>
                  <div className="justify-start flex">
                    <ul className="list-disc list-inside mb-2">
                      {item.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-white font-body">
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="cursor-pointer mt-4 px-6 py-2 bg-green-800 text-white rounded-lg transition hover:bg-green-700"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;
