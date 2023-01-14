import React from "react";
// import "./styles/App.css"
// import PropTypes from "prop-types";

const Product = (props) => {
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
    </div>
  );
};

export default Product;

// Product.propTypes = {
//     trackName: PropTypes.string.isRequired,
//     artistName: PropTypes.string.isRequired,
//     trackPrice: PropTypes.number.isRequired

// }