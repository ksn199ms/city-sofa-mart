import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./contexts/storeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <CartProvider>
  <StoreProvider>
      <App />
    </StoreProvider>
    </CartProvider>
  </BrowserRouter>
);
