import "./styles/App.css";
import React, { useState, useReducer } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import { Search } from "./components/Search";
import About from "./pages/About";
import Product from "./components/Product";

import Basket from "./components/Basket";

import Header from "./components/Header";
import BasketTotal from "./components/BasketTotal";
// import BasketCount from "./components/BasketCount";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// useEffect(() => {
//   console.log("An action =>", term);
// }, [term]);

// const currencyOptions = {
//   minimumFractionDigits: 2,
//   maximumFracionDigits: 2,
// }

// function addBook(id) {
//   console.log(`The product ${id} was clicked`);
// }
  //***moved basketreducer and total reducer to basket, originally in app
  // function basketReducer(state, product, props)  {
  //   return [...state, product, props]
  // }

  function basketReducer(state,action) {
    switch(action.type) {
      case 'add':
        return [...state, action.name];
        case 'remove':
          const updated = [...state, action.name];
          case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if(productIndex < 0) {
              return state;
            }
            const update = [...state];
            update.splice(productIndex, 1)
            return update;
            default:
            return state;
    }
  }

function totalReducer(state, props, action) {
  if(action.type === 'add') {
    return state + action.props.price;
  }
  return state - action.props.price;
}

export function App() {
  const [products, setProducts] = useState(data);
  // const [term, setTerm, search] = useState(" ");
  const [term, setTerm] = useState(" ");
  // const [basket, setBasket] = useState([]);
  const [basket, setBasket] = useReducer(basketReducer, []);
  // const [total, setTotal] = useState(0);
  const [total, setTotal] = useReducer(totalReducer, 0);

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

  function addToBasket(product, props) {
    setBasket({ product, type: 'add'});
    // const { name, price } = product;
    // setBasket({ name, type: 'add' })
    // setBasket(name);
    // setBasket(current => [...current, product.name]);
    // setTotal(current => current + product.price);
    // setTotal({price, type: 'add'});
  
    // function getTotal(total) {
    //   return total.toLocaleString(undefined, currencyOptions)
    // }
          }

   function removeFromBasket(product, props) {
    setBasket({ product, type: 'remove'});
    // const { name, price } = product;
    // setBasket({ name, type: 'remove' });
    // setTotal({ price, type: 'remove' })  
   }

   

  // function addToBasket(product) {
  //   console.log(`'${product}' was clicked`);
  //   const newBasket = basket;
  //   newBasket.push(product);
  //   setBasket(newBasket);
  //   console.log({ newBasket, basket });
  // }

  function Home() {
    return (
      <>
        <Header />
        <Search term={term} setTerm={setTerm} handleSubmit={search} />
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

// setProducts (results.results.filter(
//   (result) =>
//     result.trackName &&
//     basket.findIndex((product) => result.id === product.trackId) === -1
// ));

export default App;

