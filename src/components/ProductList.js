//Rename the example file \src\models\example-data.json to data.json and pass items from here into your <ProductList/> component.
//When the <ProductList/> is empty a message should be displayed:

// "No items found..." 
// Expected props for the <ProductList/> component are listed below:

// Props
// Example expected props. Please note this is not an exhaustive list, but the minimum props required for assessment.

// <ProductList
//     items={items}
//     addToBasket={addToBasket} />

import Product from './Product';
import React from "react";


const ProductList = ( props ) => {
const {products}=props
console.log("products",products);

    return (
        <div>
            <h1 className="title">Suggested For You</h1>{" "}
            {(!products || products.length === 0) ? (
                <div className="empty">No items found...</div>
            ) : (
          products.map((product) => (
            <div className="product" key={product.trackId}>
          <Product 
          item={product}
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