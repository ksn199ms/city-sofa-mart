import { useState } from "react";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("Direct Bank Transfer");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Increased margin and padding for better spacing */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-5xl w-full bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-10">
          
          {/* Billing Details Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Billing Details</h2>
            <form className="space-y-6">
              {['Full Name', 'Phone Number', 'Email Address', 'Street Address', 'City', 'Postal Code'].map((field) => (
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

          {/* Order Summary Section */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
            <div className="text-md space-y-4">
              <div className="flex justify-between"><span>Total Items</span><span>1</span></div>
              <div className="flex justify-between"><span>Product Price</span><span className="font-semibold">₹9,999</span></div>
              <div className="flex justify-between"><span>Shipping Charges</span><span>₹999</span></div>
              <div className="flex justify-between"><span>Tax</span><span>₹199</span></div>
              <hr className="my-3 border-gray-300" />
              <div className="flex justify-between text-xl font-bold"><span>Total</span><span>₹11,197</span></div>
            </div>

            {/* Payment Options */}
            <div className="mt-6">
              <h3 className="flex flex-row justify-between text-lg font-semibold mb-3 text-gray-800">Select Payment Method</h3>
              {['Direct Bank Transfer', 'UPI Payment', 'Credit Card'].map((method) => (
                <label key={method} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200 transition-all">
                  <input 
                    type="radio" 
                    name="payment" 
                    value={method} 
                    checked={paymentMethod === method} 
                    onChange={() => setPaymentMethod(method)}
                    className="form-radio text-indigo-600"
                  />
                  <span className="text-gray-700">{method}</span>
                </label>
              ))}
            </div>

            <p className="text-xs text-gray-600 mt-6">
              By placing an order, you agree to our <span className="font-semibold text-indigo-600 cursor-pointer">Privacy Policy</span>.
            </p>

            <button className="w-full mt-6 p-3 bg-yellow-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-yellow-700 transition-all">
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
