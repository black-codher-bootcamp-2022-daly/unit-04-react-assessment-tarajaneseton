// import "./styles/App.css";
import React, { useState } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";

//this maps through the data
function App() {
  const [products, setProducts] = useState(data);
  return <ProductList products={products} />;
}

export default App;