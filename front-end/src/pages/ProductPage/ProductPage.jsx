import { useState } from "react";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import Navbar from "../../components/Navbar/NavBar";
import { sofaLegsList } from "../../assets/asset.js";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("5 Inch");
  const [quantity, setQuantity] = useState(0);
  const [mainImage, setMainImage] = useState(sofaLegsList[6].images[0]);
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  
  const sizes = ["5 Inch", "8 Inch", "10 Inch"];

  const handleReviewSubmit = () => {
    if (newReview.trim() && rating > 0) {
      setReviews([...reviews, { text: newReview, rating }]);
      setNewReview("");
      setRating(0);
    }
  };

  const averageRating = reviews.length > 0 ? Math.round(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length) : 0;

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex">
            <div className="flex flex-col space-y-4 mt-4 flex-shrink-0">
              {sofaLegsList[6].images.slice(1, 4).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Thumbnail"
                  className="w-24 h-24 object-cover border rounded-lg cursor-pointer hover:opacity-75"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <div className="ml-4">
              <img
                src={mainImage}
                alt="Sofa Leg"
                className="w-full max-h-[500px] rounded-lg shadow"
              />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Sofa Leg</h1>
            <p className="text-xl text-gray-700">Rs. 999</p>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-sm text-gray-600 mt-2 flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < averageRating ? "text-yellow-500" : "text-gray-300"} />
              ))}
              <span className="ml-2">({reviews.length} reviews)</span>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Size</h3>
              <div className="flex space-x-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm ${selectedSize === size ? "bg-black text-white" : "bg-gray-100"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-4">
              {quantity > 0 && (
                <div className="flex border rounded-md overflow-hidden">
                  <button className="px-3 py-1 border-r" onClick={() => setQuantity((q) => Math.max(0, q - 1))}>-</button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button className="px-3 py-1 border-l" onClick={() => setQuantity((q) => q + 1)}>+</button>
                </div>
              )}

              <button className="px-6 py-2 bg-black text-white rounded-lg flex items-center gap-2" onClick={() => setQuantity(quantity > 0 ? quantity : 1)}>
                <FaShoppingCart />
                {quantity > 0 ? "Go to Cart" : "Add to Cart"}
              </button>

              <button className="px-6 py-2 border rounded-lg flex items-center gap-2">
                <FaHeart className="text-white-500" />
                Wish List
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center border-b">
          <button className={`px-6 py-3 text-lg font-semibold ${activeTab === "description" ? "border-b-2 border-black" : "text-gray-500"}`} onClick={() => setActiveTab("description")}>
            Description
          </button>
          <button className={`px-6 py-3 text-lg font-semibold ${activeTab === "reviews" ? "border-b-2 border-black" : "text-gray-500"}`} onClick={() => setActiveTab("reviews")}>
            Reviews ({reviews.length})
          </button>
        </div>

        <div className="text-center mt-6">
          {activeTab === "description" && (
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet...</p>
          )}
          {activeTab === "reviews" && (
            <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet. Be the first to review!</p>
              ) : (
                reviews.map((review, index) => (
                  <div key={index} className="p-4 border-b bg-white rounded-md shadow mb-2 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"} />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))
              )}

              <div className="mt-6 text-left">
                <h4 className="text-lg font-semibold">Add a Review</h4>
                <div className="flex gap-2 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < rating ? "text-yellow-500 cursor-pointer" : "text-gray-300 cursor-pointer"} onClick={() => setRating(i + 1)} />
                  ))}
                </div>
                <textarea className="w-full p-2 mt-2 border rounded-md" rows="3" value={newReview} onChange={(e) => setNewReview(e.target.value)} placeholder="Write your review..." />
                <button className="mt-2 px-4 py-2 bg-black text-white rounded-md" onClick={handleReviewSubmit}>Submit Review</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}