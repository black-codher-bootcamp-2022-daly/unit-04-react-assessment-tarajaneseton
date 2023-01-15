import Product from './Product';
import React from "react";
// import { Route } from "react-router-dom";


export const ProductList = ( props ) => {
const {products}=props
console.log("products",products);
//the below maps through the data and should return 'no items found' but that doesnt work
// 14.01 swapped item={product} for product={product} 
    return (
        <div>
            {/* <h1 className="title">Suggested For You</h1>{" "} */}
            {(!products || products.length === 0) ? (
                <div className="empty">No products found...</div>
            ) : (
          products.map((product) => (
            <div className="product" key={product.trackId}>
          <Product 
          product={product}
          id={product.trackId}
          key={product.trackId} 
          name={product.trackName} 
          {...product}
          thumbnail={product.artworkUrl100}
          artistName={product.artistName} 
          price={product.trackPrice}
          addToBasket={product.addToBasket}
          removeFromBasket={product.removeFromBasket}
          />
          </div>
          ))
        )}
         </div> 
          );
};

export default ProductList;