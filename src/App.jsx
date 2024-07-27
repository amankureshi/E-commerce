import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Product_card from "./Components/Product_card";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Products" Component={Products} />
        <Route exact path="/Products/:id" Component={Product_card} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
