import { FaTrash } from "react-icons/fa";
import Navbar from "../../components/Navbar/NavBar";
import { useCart } from "../../contexts/cartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCart();
  const cartArray = Object.values(cartItems); // Convert cart object to array

  // Calculate total price
  const totalPrice = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white p-6 mt-20">
        <h1 className="text-3xl font-bold text-center">Cart</h1>

        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Table */}
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
                <div key={item.id} className="grid grid-cols-5 items-center p-4 border-b text-center">
                  <div className="flex items-center space-x-4">
                    <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-yellow-100" />
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-gray-400">₹{item.price}</span>
                  <input
                    type="number"
                    className="w-12 mx-auto border text-center rounded"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => updateCartQuantity(item.id, parseInt(e.target.value))}
                  />
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                  <button className="text-yellow-600 hover:text-yellow-800 ml-15" onClick={() => removeFromCart(item.id)}>
                    <FaTrash size={18} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4">Your cart is empty</p>
            )}
          </div>

          {/* Cart Totals */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold">Cart Totals</h2>
            <div className="flex justify-between text-gray-500 mt-3">
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-2">
              <span>Total</span>
              <span className="text-yellow-600">₹{totalPrice.toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full border border-black py-2 rounded-lg hover:bg-black hover:text-white transition">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
