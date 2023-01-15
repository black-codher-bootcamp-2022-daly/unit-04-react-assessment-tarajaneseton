import React, { useState } from "react";


// import "./styles/App.css"
// import PropTypes from "prop-types";


const Product = (props, handleClick) => {
  const {
    trackName,
    artistName,
    trackPrice,
    kind,
    trackId,
    thumbnail,
    addToBasket,
    removeFromBasket,
  } = props;

  return (
    <div
      style={{
        backgroundColor: "SeaShell",
        padding: "10px",
        marginBottom: "4px",
      }}
    >
      <img src={thumbnail} alt={trackName} />
      <h2>{trackName}</h2>
      <h2>{artistName}</h2>
      <h3>£{trackPrice}</h3>
      {/* <Product onClick={() => props.addToBasket(props.product.trackId)}/> */}
      {/* <button onClick={() => props.handleClick(props.product)}> { props.isInTheBasket ? "Remove" : "Add +" }</button> */}
      <button onClick={() => addToBasket(props.product)}>Add</button>
      <button onClick={() => removeFromBasket(props.product)}>Remove</button>
           {/* <button onClick={() => props.addToBasket(props.product)}>Add</button>
      <button onClick={() => props.removeFromBasket(props.product)}>Remove</button> */}
      {/* <button onClick={addToBasket}>Add</button>
      <button onClick={() => {
        setBasket([]);
        setTotal(0);
      }}
      >
        Remove
        </button> */}
    </div>
  );
};

export default Product;

// Product.propTypes = {
//     trackName: PropTypes.string.isRequired,
//     artistName: PropTypes.string.isRequired,
//     trackPrice: PropTypes.number.isRequired

// }