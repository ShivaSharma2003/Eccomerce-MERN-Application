import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

const App = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Product />} path="/product" />
        <Route element={<Orders />} path="/orders" />
        <Route element={<Signup />} path="/auth/signup" />
        <Route element={<Signin />} path="/auth/signin" />
      </Routes>
    </>
  );
};

export default App;
