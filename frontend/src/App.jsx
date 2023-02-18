import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Product />} path="/product" />
        <Route element={<Orders />} path="/orders" />
      </Routes>
    </>
  );
};

export default App;
