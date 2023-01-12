import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// export default function About() {
//     return (
//         <>
//     <h1>About</h1>
//     <p>Welcome to my Media App where you can search for your favourite music, TV show or film and add them to your basket. Created by Tara Jane Seton.</p>
//     </>
//     )
// }

export default function About(props) {
    return (
        // <div className="header">
        //     <h1>About</h1>
        //     <div className="breadcrumb">
        //         <Link to="/"> Home </Link>
        //     </div>
        <div className="aboutPage">
            <h2>Welcome to my Media Store Application</h2>
            <p>This React application allows a user to add products to their basket. It connects to the iTunes API and the user is able to search the entire iTunes library using the search bar on the homepage</p>
            </div>       
            //  </div>
    )
}