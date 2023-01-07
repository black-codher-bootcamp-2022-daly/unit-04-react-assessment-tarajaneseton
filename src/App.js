// import "./styles/App.css";
import React, { useState } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import Search from "./components/Search";

//this maps through the data
export function App() {
  const [products, setProducts] = useState(data);
  const [term, setTerm] = useState("");



  return <ProductList products={products} />;
}

async function search(value) {
  const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;
  const results = await fetch(url).then((res) => res.json());
  if (!results.error) {
    setProducts(results.items);
    }
  }
    // setProducts (results.results.filter(
    //   (result) =>
    //     result.trackName &&
    //     basket.findIndex((product) => result.id === product.trackId) === -1
    // ));

export default App;