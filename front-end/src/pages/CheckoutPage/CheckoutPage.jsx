import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/cartContext";

const CheckoutPage = () => {
  const [gstin, setGstin] = useState("");
  const [isValidGSTIN, setIsValidGSTIN] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const { cartItems } = useCart();
  const cartArray = Object.values(cartItems);

  // Calculate total price dynamically
  const totalPrice = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Calculate tax as 18% of total price
  const taxAmount = totalPrice * 0.18;

  const validateGSTIN = (input) => {
    const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstinRegex.test(input);
  };

  const handleGSTINChange = (e) => {
    const value = e.target.value.toUpperCase();
    setGstin(value);
    setIsValidGSTIN(validateGSTIN(value));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-5xl w-full bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-10">
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Billing Details</h2>
            <form className="space-y-6">
              {["Full Name", "Phone Number", "Email Address", "Street Address", "City", "Postal Code"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{field}</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder={`Enter your ${field.toLowerCase()}`}
                  />
                </div>
              ))}
            </form>
          </div>

          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
            <div className="text-md space-y-4">
              <div className="flex justify-between"><span>Total Items</span><span>{cartArray.length}</span></div>
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsDetailsOpen(!isDetailsOpen)}>
                <span>Product Price Details</span>
                <div className="flex items-center">
                  <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
                  <FaChevronDown className={`ml-2 transition-transform ${isDetailsOpen ? "rotate-180" : ""}`} />
                </div>
              </div>
              {isDetailsOpen && (
                <div className="ml-4 text-gray-600 space-y-2">
                  <div className="flex justify-between"><span>Shipping Charges</span><span>₹90</span></div>
                  <div className="flex justify-between"><span>Handling Charge</span><span>₹10</span></div>
                  <div className="flex justify-between"><span>Tax (18%)</span><span>₹{taxAmount.toFixed(2)}</span></div>
                </div>
              )}
              <hr className="my-3 border-gray-300" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{(totalPrice + 90 + 10 + taxAmount).toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Enter GSTIN</h3>
              <input 
                type="text" 
                value={gstin} 
                onChange={handleGSTINChange} 
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all uppercase"
                placeholder="Enter your GSTIN"
              />
            </div>

            <button 
              className={`w-full mt-6 p-3 text-white rounded-lg font-semibold text-lg shadow-md transition-all ${isValidGSTIN ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} 
              disabled={!isValidGSTIN}
            >
              {isValidGSTIN ? "GSTIN Verified" : "Verify GSTIN"}
            </button>

            {/* Place Order Button */}
            <button 
              className="w-full mt-6 p-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-semibold text-lg shadow-md transition-all"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
