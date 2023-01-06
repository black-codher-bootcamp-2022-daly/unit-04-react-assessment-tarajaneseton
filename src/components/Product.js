import React from 'react';
// import "./styles/App.css"
import PropTypes from "prop-types";

//Each object in the JSON file should be rendered by your <Product/> component.

// Each product should have a button to Add to Basket. When clicked the item should be removed from <ProductList/> and added to your <Basket/> component.
// Expected props for the <Product/> component are listed below:

// Props
// Example expected props. Please note this is not an exhaustive list, but the minimum props required for assessment.

// <Product
//     kind={kind}
//     id={trackId}
//     name={trackName}
//     thumbnail={artworkUrl100}
//     price={trackPrice}
//     addToBasket={addToBasket}
//     removeFromBasket={removeFromBasket} />

//here i am copying tobias code. it still doesnt work

// function Product({product}) {
//     const { name } = product.trackName;
//     const { id } = product.trackId;
//     const { kind } = product.kind;
//     return (
//         <div>
//             <h2>{name}</h2>
//         </div>
//     );
// }

// export default Product;

// The below code creates props. its been created using the slides video but doesnt work

function Product({ trackName, artistName, trackPrice, kind, trackId,  }) {
    return (
        <div style={{
            backgroundColor: "lilac",
            padding: "10px",
            marginBottom: "4px"
        }}
        >
            <h2>{trackName}</h2>
            <h2>{artistName}</h2>
            <h3>£{trackPrice}</h3>

        </div>
    );
}

export default Product;

Product.propTypes = {
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    trackPrice: PropTypes.number.isRequired

}
 
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