import { sofaLegsList } from "../../assets/asset";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/NavBar";

const WishList = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 md:px-10 lg:px-20">
        <h1 className="text-center text-2xl font-semibold">Wishlist</h1>
        <p className="text-center text-gray-500">{sofaLegsList.length} items</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 mt-6">
          {sofaLegsList.map((item) => (
            <div key={item.id} className="border p-2 rounded-lg relative w-full">
              <button className="absolute top-2 right-2 bg-black text-white rounded-full p-1">✖</button>
              <img src={item.images[1]} alt={item.name} className="w-40 h-40 object-cover rounded" />
              <h2 className="text-lg font-semibold mt-3">{item.name}</h2>

              <div className="mt-3 flex justify-between">
                <button className="border px-3 py-1 rounded text-sm">More info</button>
                <button className="bg-black text-white px-3 py-1 rounded text-sm">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
