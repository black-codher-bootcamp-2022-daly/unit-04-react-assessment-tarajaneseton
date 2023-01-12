// import "./styles/App.css";
import React, { useState } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import { Search } from "./components/Search";
import About from "./pages/About";
import Basket from "./components/Basket";
// tobia's way: import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// const [products, setProducts]
export function App() {
  const [products] = useState(data);
  const [keyword, setKeyword] = useState(" ");

  return (
    <div className="wrapper">
      {/* <Header /> */}
      <h1>Tara's Media Store App</h1>
      <BrowserRouter>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/basket"> Basket </Link></li>
      </ul>
          {/* <Route path="/" element={<Home />} /> */}
          <Routes>
            <Route path="about" element={<About />} />
          <Route path="basket" element={<Basket />} /> 
          </Routes>
      </BrowserRouter>
    </div>
  );

// might need to change Basket to Basketlist

  // <Route exact path="/" element={
  //   <Header/>
  //   <h2>Welcome to the Bookcase App</h2>
  //   <ProductList products={products}>
  //   <Search />
  //     <ProductList/>
  //   </Route>
}

{
  /* <Search keyword={} setKeyword={} /> */
}

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
