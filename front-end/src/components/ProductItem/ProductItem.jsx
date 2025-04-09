import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useCart } from "../../contexts/cartContext";

const ProductItem = ({ id, name, price, description, images }) => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, updateCartQuantity } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart({ id, name, price, description, images });
  };

  const handleIncrease = () => {
    updateCartQuantity(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateCartQuantity(id, quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  const toggleWishlist = () => setIsWishlisted(!isWishlisted);

  // ✅ Navigate to the product details page when clicking on the item
  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row w-full max-w-4xl mx-auto cursor-pointer" 
      onClick={handleProductClick} // ✅ Clickable to navigate
    > 
      <div className="w-full sm:w-1/2 flex items-center"> 
        <img src={images[1]} alt={name} className="w-full h-auto max-h-64 object-contain sm:object-cover" /> 
      </div> 
      <div className="p-4 w-full sm:w-1/2 flex flex-col justify-center"> 
        <div className="flex mb-1"> 
          {Array(5).fill("★").map((star, index) => ( 
            <span key={index} className="text-yellow-500 text-lg">{star}</span> 
          ))} 
        </div> 
        <h2 className="text-lg font-bold mb-1">{name}</h2> 
        <p className="text-md text-black font-bold mb-2">₹{price}</p> 
        <p className="text-gray-600 text-sm mb-3">{description}</p> 

        {!quantity ? ( 
          <button 
            className="bg-black text-white text-sm py-2 w-full rounded-lg hover:bg-gray-900 transition" 
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigating when clicking "Add to Cart"
              handleAddToCart();
            }}
          > 
            Add to Cart 
          </button> 
        ) : ( 
          <div className="flex items-center space-x-3"> 
            <button 
              className="bg-gray-300 text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition" 
              onClick={(e) => {
                e.stopPropagation();
                handleDecrease();
              }}
            > 
              − 
            </button> 
            <span className="text-lg font-bold">{quantity}</span> 
            <button 
              className="bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-900 transition" 
              onClick={(e) => {
                e.stopPropagation();
                handleIncrease();
              }}
            > 
              + 
            </button> 
          </div> 
        )} 

        <div 
          className="flex items-center justify-center text-gray-500 text-sm mt-2 cursor-pointer" 
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist();
          }}
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
