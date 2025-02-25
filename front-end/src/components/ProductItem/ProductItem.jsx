import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import Wishlist Icons

const ProductItem = () => {
  const [quantity, setQuantity] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false); // State for Wishlist

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted); // Toggle Wishlist
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      {/* Left Side: Product Image */}
      <div className="md:w-1/2">
        <img
          src="/src/assets/sofa-legs/auroraBlock3/auroraBlock3-2.JPG"
          alt="sofa leg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Product Details */}
      <div className="p-4 md:w-1/2 flex flex-col justify-center">
        {/* Star Rating */}
        <div className="flex mb-1">
          {Array(5)
            .fill("★")
            .map((star, index) => (
              <span key={index} className="text-yellow-500 text-lg">
                {star}
              </span>
            ))}
        </div>

        {/* Product Name */}
        <h2 className="text-lg font-bold mb-1">Sofa Leg</h2>

        {/* Product Price */}
        <p className="text-md text-black font-bold mb-2">₹9999</p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3">
          High-quality sofa leg with durable material and premium finish.
        </p>

        {/* Cart Controls */}
        {quantity === 0 ? (
          <button
            className="bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-900 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center space-x-3">
            <button
              className="bg-gray-300 text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition"
              onClick={handleDecrease}
            >
              −
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              className="bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-900 transition"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        )}

        {/* Wishlist Button */}
        <div
          className="flex items-center justify-center text-gray-500 text-sm mt-2 cursor-pointer"
          onClick={toggleWishlist}
        >
          {isWishlisted ? (
            <AiFillHeart className="text-red-500 text-lg" />
          ) : (
            <AiOutlineHeart className="text-lg" />
          )}
          <span className="ml-1">{isWishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
