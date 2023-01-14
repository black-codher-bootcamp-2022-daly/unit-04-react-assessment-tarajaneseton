import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import Product from "./components/Product.js";
import ProductList from "./components/ProductList.js";
import About from "./pages/About";
import Basket from "./components/Basket";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Search } from "./components/Search"
import { createRoot } from "react-dom/client";
// import Header from "./components/Header.js";


  

// }

// adding an event listener,listening for buttons that are clicked, click. when you click, the function/ event listener will trigger the callback which expects 2 (minimum) parameters, el, bbutton element and e, the mouse event that triggers the element. target lets you know where that event came from
// const buttons = list.querySelectorAll('button')
// console.log(buttons)
// buttons.forEach((button) => {
//   button.addEventListener('click', function (el, e) {
//     console.log('Element', el)
//     console.log('Event', e)
//   })
// })

//event listener for a scroll event
//document.addEventListener('scroll', (doc, ev) => {
  // console.log(doc)
// })


// passing the DOM element to ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing each element to root rende
root.render(
  <React.StrictMode>
    {/* <Router> */}
      <App />
      {/* <Header /> */}
      {/* <Product />
      <ProductList />
      {/* <About />
      <Basket /> */}
      {/* <Search /> */}
      {/* <Search keyword={keyword} setKeyword={setKeyword}/> */}
    {/* </Router> */} */}
  </React.StrictMode>
);
