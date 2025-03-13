import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Product from "./pages/Product";
import Carte from "./pages/Carte";
import Orders from "./pages/Orders";
import Verify from "./pages/Verify";
import MyOrder from "./pages/MyOrder";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";

export default function App() {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <BrowserRouter>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Header setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Carte/>} />
        <Route path="/order" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
