import { useState, useEffect } from "react";
import {
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { categories, categoryItems } from "../data/categories";
import Cart from "./Cart";
import debounce from "lodash.debounce"; // Importing lodash debounce

const searchTexts = [
  "Staple Munch . . .",
  "Local Delicacies . . .",
  "Healthy Drinks . . .",
  "Student Options . . .",
];

interface NavbarProps {
  onSearchChange: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search2Open, setSearch2Open] = useState(false);
  const [searchText, setSearchText] = useState("Search for");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSearchText(`Search for ${searchTexts[index]}`);
      index = (index + 1) % searchTexts.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixedNavbar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Cart Count
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(storedCart.length);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(storedCart.length);
    };

    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  // Trigger the search functionality and pass the query to the parent
  const debouncedSearch = debounce((query: string) => {
    onSearchChange(query);
  }, 500);

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchChange(searchQuery);
    }
  };

  return (
    <div
      id="back-to-top"
      className="bg-gray-100 flex flex-col z-10000 navbar-background p-5 gap-5"
    >
      <div>
        {/* Navbar Section */}

        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-2 ">
            <a href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[40%] object-contain "
              />
            </a>
          </div>
          {/* Search Bar */}
          <div className=" justify-center mb-4  z-50 ">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyPress}
              placeholder={searchText}
              className={` w-52 sm:w-60 md:w-72 lg:w-120 p-3 border border-gray-300 rounded-lg bg-white shadow-md focus:ring-2 focus:ring-green-500 transition-all duration-700 ease-in-out transform font-body outline-none pr-10 ${
                searchOpen
                  ? "opacity-100 scale-100 translate-y-2 sm:translate-y-4"
                  : "opacity-0 scale-95 -translate-y-4"
              } top-[50px] sm:top-[-110px] placeholder-ellipsis`}
            />
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 text-green-700 text-xl font-body">
            <HiOutlineSearch
              className="cursor-pointer text-green-700 text-2xl sm:text-3xl"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            <HiOutlineUser className="cursor-pointer text-2xl sm:text-3xl" />

            <div className="relative">
              <HiOutlineShoppingBag
                className="cursor-pointer text-2xl sm:text-3xl"
                onClick={() => setCartOpen(!cartOpen)}
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>

            <HiOutlineMenu
              className="cursor-pointer block md:hidden text-black text-2xl sm:text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>

        {showFixedNavbar && (
          <div className="fixed top-0 left-0 w-full navbar-background z-50 shadow-md transition-all duration-300 px-5 py-2">
            <div className="px-1 py-0 flex items-center justify-between">
              <a href="/">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-[40%] object-contain "
                />
              </a>
              <div className="flex items-center space-x-4 md:space-x-8 text-green-700 text-xl font-body">
                <button onClick={() => setSearchOpen(!searchOpen)}>
                  <HiOutlineSearch className="cursor-pointer text-green-700 text-2xl sm:text-3xl" />
                </button>
                <HiOutlineUser className="cursor-pointer text-2xl sm:text-3xl" />
                <div className="relative">
                  <HiOutlineShoppingBag
                    className="cursor-pointer text-2xl sm:text-3xl"
                    onClick={() => setCartOpen(!cartOpen)}
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center w-full z-50 absolute top-[-10px]">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={searchText}
                className={`w-52 sm:w-60 md:w-72 lg:w-120 p-3 border border-gray-300 rounded-lg bg-white shadow-md focus:ring-2 focus:ring-green-500 transition-all duration-700 ease-in-out transform font-body outline-none pr-10 ${
                  search2Open
                    ? "opacity-100 scale-100 translate-y-2 sm:translate-y-4"
                    : "opacity-0 scale-95 -translate-y-4"
                } placeholder-ellipsis`}
              />
            </div>
          </div>
        )}
      </div>
      {/* Categories Dropdown */}
      <div
        className={`z-100 flex flex-col items-center justify-center w-[100%] sm:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-4 transition-all duration-500 ease-in-out transform font-body text-sm md:text-base ${
          menuOpen
            ? "opacity-100 max-h-screen scale-100"
            : "opacity-0 max-h-0 scale-95"
        } md:opacity-100 md:max-h-screen md:scale-100`}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative bg-green-800 cursor-pointer text-white font-body p-3 px-2 rounded-md flex justify-between items-center"
          >
            <span className="text-center">{category}</span>
            <HiOutlineChevronDown className="text-md" />

            {/* Dropdown container */}
            <div
              className="absolute left-0 top-full w-full hidden group-hover:block mt-0 bg-white text-black p-4 rounded-md shadow-lg transition-all duration-100 ease-out opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 z-50 overflow-y-auto max-h-40" // Changed to absolute on the bottom
              style={{
                transitionDelay: `${index * 100}ms`,
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
        <div className="fixed inset-0 z-[10000] flex">
          <div
            className="fixed inset-0 bg-[#0000003b] bg-opacity-70"
            onClick={() => setCartOpen(false)}
          />
          <Cart onClose={() => setCartOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
