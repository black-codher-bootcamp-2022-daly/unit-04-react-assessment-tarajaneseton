import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import Product from "./components/Product.js";
import About from "./pages/About";
import Basket from "./components/Basket";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Search } from "./components/Search"


// fuction below is to creaTE rOUTES PAGES 
export default function Pages() {

  function Home() {
    return;
    <div>
      <h2>Home</h2>
      <section>This is Home</section>
    </div>;
  }
  
  function About() {
    return;
    <div>
      <h2>About</h2>
      <section>Hello!</section>
    </div>;
  }
  
  function Basket() {
    return;
    <div>
      <h2>Basket</h2>
      <section>Your basket</section>
    </div>;
  }
  
  return (
    <Router>
      <ul className="breadcrumb">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/basket"> Basket </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="basket" element={<Basket />} />
      </Routes>
    </Router>
  );
}

// this is a function which creates different pages using the title component. You can create the same thing by creating multiple fucntions, one for each page.
// 080122 the Basket and About functions are causing issues as they are duplicates. need to look for help on routes


const root = ReactDOM.createRoot(document.getElementById("root"));

//080123 ADDED ROUTER BELOW
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Product />
      <Search />
    </Router>
  </React.StrictMode>
);
