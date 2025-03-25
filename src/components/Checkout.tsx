import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const CheckoutPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode] = useState("");
  const [state] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartWithQuantity = storedCart.map((item: CartItem) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCart(cartWithQuantity);
  }, []);

  // Function to update quantity
  // const updateQuantity = (id: number, amount: number) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(1, item.quantity + amount) }
  //         : item
  //     )
  //   );
  // };

  // Function to remove an item from the cart
  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Check if form is valid
  const isFormValid = () => {
    return email && firstName && lastName && address && city && country;
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle order completion
  const handleCompleteOrder = () => {
    if (!isFormValid()) return;

    const message = encodeURIComponent(
      `Hello, I want to place an order:\n\n` +
        cart
          .map(
            (item) =>
              `- ${item.name} (x${item.quantity}): ₦${(
                item.price * item.quantity
              ).toFixed(2)}`
          )
          .join("\n") +
        `\n\nTotal: ₦${totalPrice.toFixed(2)}\n\n` +
        `Customer Details:\n` +
        `Email: ${email}\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Address: ${address}, ${city}, ${state}, ${postalCode}, ${country}`
    );

    const whatsappNumber = "2349038415909"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");

    localStorage.removeItem("cart");
    setCart([]);
    navigate("/order-completed");
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <h1 className="font-header text-center text-green-600">
          CheckOut Page.
        </h1>

        <h2 className="text-xl font-title mb-4">Contact.</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />

        <h2 className="text-xl font-title mt-4 mb-4">Delivery.</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        >
          <option value="">Country/Region</option>
          <option value="Nigeria">Nigeria</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Ghana">Ghana</option>
          <option value="India">India</option>
        </select>

        <button
          onClick={handleCompleteOrder}
          disabled={!isFormValid()}
          className={`p-2 rounded w-full mb-4  ${
            isFormValid()
              ? "bg-green-700 text-white cursor-pointer"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        >
          Complete Order
        </button>
      </div>

      {/* Right Side: Order Summary */}
      <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded shadow md:fixed md:right-0 md:top-0 md:h-full">
        <h2 className="text-xl font-title mb-4">Order Summary:</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded"
                />
                <span className="font-body">{item.name}</span>
                <span className="font-body font-semibold">
                  ₦{(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between mb-2">
              <span className="font-body">Subtotal</span>
              <span className="font-body">₦{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span className="font-body">Total</span>
              <span className="font-body">₦{totalPrice.toFixed(2)}</span>
            </div>
          </>
        )}

        <Link to="/">
          <p className="bg-green-700 text-white p-2 rounded text-center cursor-pointer">
            Back to Homepage
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
