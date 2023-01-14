// import "./styles/App.css";
import React, { useState } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import { Search } from "./components/Search";
import About from "./pages/About";
import Basket from "./components/Basket";
import Header from "./components/Header";
// tobia's way: import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function addBook(id) {
  console.log(`The product ${id} was clicked`);
}
// const [products, setProducts]
export function App() {
  const [products] = useState(data);
  const [term, setTerm, search] = useState(" ");

  return (
    <div className="wrapper">
      {/* <Header /> */}
      <h1>Tara's Media Store App</h1>
      <BrowserRouter>
        <ul>
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
      </BrowserRouter>
    </div>
  );

  function Home() {
    return (
      <>
        <Header />
        <Search term={term} setTerm={setTerm} search={search} />
        {/* <ProductList /> */}
        <ProductList products={products} productCount={products.length} />
        {/* <ProductList products={products} addToBasket={addToBasket} removeFromBasket={removeFromBasket} productCount={products.length} /> */}
      </>
    );
  }
}

// might need to change Basket to Basketlist

//     setProducts(results.items); after   if (!results.error) {

// async function search(value) {
//   const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;
//   const results = await fetch(url).then((res) => res.json());
//   if (!results.error) {
//     }
//   }
// setProducts (results.results.filter(
//   (result) =>
//     result.trackName &&
//     basket.findIndex((product) => result.id === product.trackId) === -1
// ));

export default App;
