import "./styles/App.css";
import React, { useState } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import { Search } from "./components/Search";
import About from "./pages/About";
import Basket from "./components/Basket";
import Header from "./components/Header";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function addBook(id) {
  console.log(`The product ${id} was clicked`);
}

export function App() {
  const [products, setProducts] = useState(data);
  // const [term, setTerm, search] = useState(" ");
  const [term, setTerm] = useState(" ");

  //Your app should display the results of the search in an component called <ProductList/> with the identifier id="results" e.g. <div id="results"/>.


  async function search(value) {
    console.log("find books that got clicked", value);
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(
        results.results.filter(
          (result) =>
          result.trackName
        )
      )
      // setProducts(results.products);
    }
  }

  function Home() {
    return (
      <>
        <Header />
        <Search term={term} setTerm={setTerm} handleSubmit={search} />
        {/* <ProductList /> */}
        <ProductList products={products} />
        {/* <ProductList products={products} addToBasket={addToBasket} removeFromBasket={removeFromBasket} productCount={products.length} /> */}
      </>
    );
  }

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
}

// might need to change Basket to Basketlist

//     setProducts(results.items); after   if (!results.error) {
//asynchronus function waits for fetch to request data from a different url
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
