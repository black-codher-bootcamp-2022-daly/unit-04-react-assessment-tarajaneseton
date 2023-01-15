import "./styles/App.css";
import React, { useState, useEffect } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import { Search } from "./components/Search";
import About from "./pages/About";
import Product from "./components/Product";

import Basket from "./components/Basket";

import Header from "./components/Header";
import BasketTotal from "./components/BasketTotal";
import BasketCount from "./components/BasketCount";
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

//   function basketReducer(state,action) {
//     switch(action.type) {
//       case 'add':
//         return [...state, action.name];
//         case 'remove':
//           const updated = [...state, action.name];
//           case 'remove':
//             const productIndex = state.findIndex(item => item.name === action.product.name);
//             if(productIndex < 0) {
//               return state;
//             }
//             const update = [...state];
//             update.splice(productIndex, 1)
//             return update;
//             default:
//             return state;
//     }
//   }

// function totalReducer(state, props, action) {
//   if(action.type === 'add') {
//     return state + action.props.price;
//   }
//   return state - action.props.price;
// }

export function App() {
  const [products, setProducts] = useState(data.slice(0,10));
  const [term, setTerm] = useState(" ");
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  // const [loadMoreVisible, setLoadMoreVisible] = useState(true);

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

// function getData(currentCount) {
//   if (currentCount === data.length - 10) setLoadMoreVisible(false);
//   return setProducts((currentProducts) => [
//     ...currentProducts,
//     ...data.slice(currentCount, currentCount + 10),
//   ]);
// }

useEffect(() => {

}, [term]);

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

   function BasketList() {
    return (
      <>
        <BasketCount />
        <Basket 
          basket={basket}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          basketTotal={total}
          basketCount={count}
/>          
      </>
    );
   }


  function Home() {
    return (
      // AAAAAAAAAAAAAAAA <Container> instead of <>
      <>
        <Header />
        <Search term={term} setTerm={setTerm} handleSubmit={search} />
        {/* <ProductList products={products} /> productCount could be itemCount={data.length} */}
        <ProductList products={products} addToBasket={addToBasket} removeFromBasket={removeFromBasket} productCount={data.length} />
        {/* AAAAAAAAAAAAAA {loadMoreVisble && ( could be added <)} */}
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

export default App;

