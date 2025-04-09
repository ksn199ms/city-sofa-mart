import { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../../components/Navbar/NavBar";
import { useCart } from "../../contexts/cartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCart();
  const cartArray = Object.values(cartItems);

  const totalPrice = cartArray.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cartArray.reduce((acc, item) => acc + item.quantity, 0);

  let navigate = useNavigate();

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  const handleApplyCoupon = () => {
    if (couponCode === "FLAT100") {
      setDiscount(100);
      setError("");
    } else {
      setDiscount(0);
      setError("Invalid Coupon Code");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white p-6 mt-20">
        <h1 className="text-3xl font-bold text-center">Cart</h1>

        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-4 shadow-sm rounded-lg">
            <div className="bg-yellow-100 p-3 font-semibold grid grid-cols-5 text-center">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
              <span>Action</span>
            </div>

            {cartArray.length > 0 ? (
              cartArray.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-5 items-center p-4 border-b text-center"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.images[1]}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg bg-yellow-100"
                    />
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-gray-400">₹{item.price}</span>
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() =>
                        updateCartQuantity(
                          item.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-gray-700 font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateCartQuantity(item.id, item.quantity + 1)
                      }
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <span className="font-semibold">
                    ₹{item.price * item.quantity}
                  </span>
                  <button
                    className="text-yellow-600 hover:text-yellow-800 ml-15"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4">
                Your cart is empty
              </p>
            )}
          </div>

          <div className="bg-yellow-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold">Cart Totals</h2>
            <div className="flex justify-between text-gray-500 mt-3">
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-500 font-semibold mt-2">
                <span>Discount (FLAT100)</span>
                <span>-₹{discount}</span>
              </div>
            )}

            <div className="flex justify-between font-semibold text-lg mt-2">
              <span>Total</span>
              <span className="text-yellow-600">
                ₹{(totalPrice - discount).toFixed(2)}
              </span>
            </div>

            <div className="mt-4 flex items-center space-x-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code"
                className={`w-full p-2 border rounded-lg focus:outline-none ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Apply
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <button
              className={`mt-6 w-full border border-black py-2 rounded-lg transition ${
                totalPrice - discount > 0
                  ? "hover:bg-black hover:text-white"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => {
                if (totalPrice - discount > 0) {
                  navigate("/checkout", { state: { discount } });
                }
              }}
              disabled={totalPrice - discount === 0}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
