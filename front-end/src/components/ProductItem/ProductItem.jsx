

const ProductItem = () => {
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
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-yellow-500 text-lg">★</span>
        </div>
        {/* Product Name */}
        <h2 className="text-lg font-bold mb-1">Sofa Leg</h2>
        {/* Product Price */}
        <p className="text-md text-black font-bold mb-2">₹9999</p>
        {/* Description */}
        <p className="text-gray-600 text-sm mb-3">
          High-quality sofa leg with durable material and premium finish.
        </p>
        {/* Add to Cart Button */}
        <button className="bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-900 transition">
          Add to Cart
        </button>
        {/* Wishlist */}
        <div className="text-center text-gray-500 text-xs mt-1">
          <span className="mr-1">♡</span> Wishlist
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
