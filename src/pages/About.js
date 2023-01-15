import React from "react";

export default function About(props) {
    return (
        <div className="aboutPage">
            <h1 style={{fontFamily: "Arial"}}>Welcome to Tara's Media Store</h1>
            <body>
            <p style={{fontFamily: "Arial", fontSize: 18}}>I created Media Store using the iTunes API to enable users to discover their favourite music, films and TV shows and add them to their Basket.
        <br/>
        <br/>
                How to use Media Store:
                <br/>
                1. To search, simply enter the artist name or keyword using the search bar on the homepage.
                <br/>
                2. Add the song or film to your basket by clicking 'Add'. If you change your mind you can remove it by clicking 'Remove'. </p>
                </body>
            
            </div>       
      
    )
}