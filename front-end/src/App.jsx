import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./pages/Cart/Cart";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import WishList from "./pages/WishList/WishList";
import MyOrders from "./pages/MyOrders/MyOrders";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
    </>
  );
}

export default App;
