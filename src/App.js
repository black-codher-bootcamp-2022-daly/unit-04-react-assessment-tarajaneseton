import "./styles/App.css";
import React, { useState, useEffect } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import About from "./pages/About";
import Basket from "./components/Basket";
import Header from "./components/Header";
import BasketCount from "./components/BasketCount";
import BasketTotal from "./components/BasketTotal";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

export function App() {
  const [products, setProducts] = useState(data.slice(0, 10));
  const [term, setTerm] = useState(" ");
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  // useEffect(() => {

  // }, [term]);

  async function search(value) {
    console.log("find books that got clicked", value);
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(results.results.filter((result) => result.trackName));
    }
  }

  function addToBasket(trackId) {
    products.forEach((product) => {
      if (product.trackId === trackId) {
        product.inBasket = true;
        setBasket((prev) => [...prev, product]);

        if (product.trackPrice) {
          setTotal(parseFloat(total + product.trackPrice));
        } else {
          setTotal(total + 0);
        }
      }
      setCount(count + 1);
    });
  }

  function removeFromBasket(trackId) {
    const removeFromCart = [];
    basket.forEach((products) => {
      if (products.trackId !== trackId) {
        removeFromCart.push(products);
      } else {
        products.inBasket = !products.inBasket;
        if (products.trackPrice) {
          setTotal(parseFloat(total - products.trackPrice));
        }
        return products;
      }
    });

    setBasket(removeFromCart);
    setCount(count - 1);
  }

  function Basketpage() {
    return (
      <>
        <BasketCount basketCount={basket.length} />
        {
          <Basket
            basket={basket}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
            basketTotal={total}
            basketCount={count}
          />
        }
        <div className="total-price">
          Total Price <BasketTotal basketTotal={total} />
        </div>
      </>
    );
  }

  function Home() {
    return (

      <>
        {/* <Header /> */}
        <Search term={term} setTerm={setTerm} handleSubmit={search} />
        <ProductList
          products={products}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          productCount={data.length}
        />
      </>
    );
  }

  return (
    <div className="wrapper">
      <h1>Tara's Media Store App</h1>
      <BrowserRouter>
        <Header itemCount={count} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
