import { useState, useEffect } from "react";
import {
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { categories, categoryItems } from "../data/categories"; // Updated import
import Cart from "./Cart"; // Import the Cart component

const searchTexts = ["Spices . . .", "Ingredients . . .", "Food-stuffs . . ."];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("Search for");
  const [searchQuery, setSearchQuery] = useState(""); // Track search input value
  const [cartOpen, setCartOpen] = useState(false); // Manage cart visibility

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSearchText(`🚀 Search for ${searchTexts[index]}`);
      index = (index + 1) % searchTexts.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 relative z-50 navbar-background">
      {/* Navbar Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <a href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-18 w-auto md:h-16 lg:h-30 object-contain" // Increased logo size
              />
            </a>
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 text-green-700 text-xl font-body">
            <HiOutlineSearch
              className="cursor-pointer text-green-700 transition-transform duration-300 text-2xl sm:text-3xl"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            <HiOutlineUser className="cursor-pointer text-2xl sm:text-3xl" />
            <HiOutlineShoppingBag
              className="cursor-pointer text-2xl sm:text-3xl"
              onClick={() => setCartOpen(!cartOpen)} // Toggle cart visibility
            />
            <HiOutlineMenu
              className="cursor-pointer block md:hidden text-black transition-transform duration-300 text-2xl sm:text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex justify-center mb-4 w-full mt-[-30px] z-50">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={searchText}
            className={`absolute w-52 sm:w-60 md:w-72 lg:w-120 p-3 border border-gray-300 rounded-lg bg-white shadow-md focus:ring-2 focus:ring-green-500 transition-all duration-700 ease-in-out transform font-body outline-none pr-10 ${
              searchOpen
                ? "opacity-100 scale-100 translate-y-2 sm:translate-y-4"
                : "opacity-0 scale-95 -translate-y-4"
            } top-[50px] sm:top-[-110px] placeholder-ellipsis`}
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }} // CSS for ellipsis
          />
        </div>
      </div>

      {/* Category Menu Section */}
      <div
        className={`flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 max-w-6xl mx-5 transition-all duration-500 ease-in-out transform font-body text-sm md:text-base mb-0 ${
          menuOpen
            ? "opacity-100 max-h-screen scale-100"
            : "opacity-0 max-h-0 scale-95"
        } md:opacity-100 md:max-h-screen md:scale-100`}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative bg-green-800 text-white font-body p-3 px-2 rounded-md flex justify-between items-center"
          >
            <span className="text-center">{category}</span>
            <HiOutlineChevronDown className="text-md" />

            {/* Dropdown container */}
            <div
              className="absolute left-0 top-full w-full hidden group-hover:block mt-2 bg-white text-black p-4 rounded-md shadow-lg transition-all duration-100 ease-out opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 z-50 overflow-y-auto max-h-40" // Changed to absolute on the bottom
              style={{
                transitionDelay: `${index * 100}ms`, // Cascading effect based on index
              }}
            >
              <a href="#staple-munch">
                <ul>
                  {categoryItems[index].map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-2 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-green-800 hover:text-white cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Overlay */}
      {cartOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-gray-200 bg-opacity-70"
            onClick={() => setCartOpen(false)}
          />
          <Cart onClose={() => setCartOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
