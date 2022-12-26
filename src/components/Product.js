import React from 'react';
import data from "./models/data.json";

export function Product(props) {
    // const books = data;
    // const{ trackName, artistName, trackPrice, artworkUrl100 } = props
    return (
        <div>
            <h1>{props.trackName}</h1>
            <h2>{props.artistName}</h2>
            <h3>{props.trackPrice}</h3>
            <img src={props.artworkUrl100} alt={trackName}/>
        </div>
    );
}

export const Productlist = (props) => 
{
    return (
        <main>
            {props.products.map(
                (item) => 
                <Product trackName={item.trackName} artistName={item.artistName} trackPrice={item.trackPrice} artworkUrl100={item.artworkUrl100}/>
                )}
        </main>
        )
    }