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
        backgroundColor: "purple",
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

// const { kind,
//     trackId,
//     trackName,
//     artworkUrl100,
//     trackPrice
//     addToBasket
//     removeFromBasket } = props.music;

// <div className="music">
// kind={kind}
// id={trackId}
// <h2 name={trackName}>{trackName}</h2>
// <img src thumbnail={artworkUrl100}/>
// price={trackPrice}
// addToBasket={addToBasket}
// removeFromBasket={removeFromBasket} />
// </div>
// }
