// Code: Main App component

import { CartProvider } from "./contexts/CartContext"
import Home from "./pages/Home/Home"


function App() {

  return (
    <>
    <CartProvider>
     <Home />
     </CartProvider>
    </>
  
  )
}

export default App



