import React from 'react';
import "./styles/App.css"
import musicdata from "./models/data.json";
import PropTypes from "prop-types";

// map works however moving it from app.js to product.js resultd in it no longer working. it cant locate files in this component 
export const Product = () => {
    return (
        <>
        <div className="product-container">
        
           </div>
        </>
    );
};
    

// slides
// const { artistName,
//         trackName,
//         trackPrice,
//         currency,
//         artworkUrl60
//  } = props.track;

//  <div className="track">
//     <img src={artworkUrl60} alt={title}/>
//     <div>
//         <h2 artistName={artistName}>{artistName}</h2>
//         <h2 trackName={trackName}>{trackName}</h2>
//     </div>
//  </div>


// * <div className="track">
//     <img src={artworkUrl100} alt={trackName}/>
// <div>
//     <h2 trackName={trackName}>{trackName}</h2>
//     <h2 artistName={artistName}>{artistName}</h2>
//     <h2 trackPrice={trackPrice}>{trackPrice}</h2>

// </div>
// </div>
// ); */}
// // export function Product(props) {
//     // const books = data;
//     // const { trackName, artistName, trackPrice, artworkUrl100 } = props

// // export const Track = (props) => {
// //     return (
// //             <div>
// //             <h1>{props.trackName}</h1>
// //             <h2>{props.artistName}</h2>
// //             <h3>{props.trackPrice}</h3>
// //             <img src={props.artworkUrl100} alt={props.trackName}/>
       
// //         </div>
// //     );
        
// // }

// // export const Productlist = (props) => 
// // {
// //     return (
// //         <main>
// //             {props.products.map(
// //                 (item) => 
// //                 <Product trackName={item.trackName} artistName={item.artistName} trackPrice={item.trackPrice} artworkUrl100={item.artworkUrl100}/>
// //                 )}
// //         </main>
// //         )
// //     }