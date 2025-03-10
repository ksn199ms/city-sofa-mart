// Code: Main App component

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import ProductPage from "./pages/ProductPage/ProductPage"
import Cart from "./pages/Cart/Cart"
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
    </>
  
  )
}

export default App



