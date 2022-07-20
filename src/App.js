import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const[cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () =>{
    setCartVisible(true);
  }

  const hideCartHandler = () =>{
    setCartVisible(false);
  }

  return (
    // Since all the App components need access to CartProvider, therefore we wrapped them all with CartProvider
    <CartProvider>
    { cartVisible && <Cart onClose = {hideCartHandler}/> }
      <Header onShowCart = {showCartHandler} />
      {/* data is passed via props in following manner:
      HeaderCartButton --> Header --> App */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
