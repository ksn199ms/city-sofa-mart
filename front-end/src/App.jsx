// Code: Main App component

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import ProductPage from "./pages/ProductPage/ProductPage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
    </>
  
  )
}

export default App



