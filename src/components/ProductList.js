import Product from "./Product";
import React from "react";

export const ProductList = (props) => {
  const { products } = props;
  // console.log("products", products);

  return (
    <div>
      {!products || products.length === 0 ? (
        <div className="empty">No items found...</div>
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
              addToBasket={props.addToBasket}
              removeFromBasket={props.removeFromBasket}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
