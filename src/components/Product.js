import React from "react";


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
      <div className="buttons">
      <div>
        {props.inBasket !== true ? (
          <button onClick={() => addToBasket(trackId)}>Add</button>
        ) : (
          <button onClick={() => removeFromBasket(trackId)}>
            Remove
          </button>
        )}
      </div>
        {/* {props.inBasket ? (
          <button
            onClick={() => removeFromBasket(trackId)}
          >
            {" "}
            Remove
          </button>
        ) : (
          <button onClick={() => addToBasket(trackId)}>
            {" "}
            Add
          </button> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Product;
