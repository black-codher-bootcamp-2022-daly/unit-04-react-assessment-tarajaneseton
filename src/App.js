// import "./styles/App.css";
import React, { useState } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import { Search } from "./components/Search";
// import About from "./pages/About";
// import Basket from "./components/Basket";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const [products, setProducts]
export function App() {
  const [products] = useState(data);
  const [term, setTerm] = useState("");



  return <ProductList products={products}>
    <Search />
    {/* <Search keyword={} setKeyword={} /> */}
     </ProductList>;
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