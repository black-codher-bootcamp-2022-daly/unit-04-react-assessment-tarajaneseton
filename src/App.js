// import "./styles/App.css";
import React, { useState } from "react";
import data from "./models/data.json";
import Product from "./components/Product.js";

//this maps through the data
function App() {
  const [products] = useState(data);

  return (
  <Productlist>
    {products.map((product) => (
    <Product key={product.trackId} trackName={product.trackName} artistName={product.artistName} trackPrice={product.trackPrice}/>
    ))} 
    </Productlist>
    );
}
    


function Productlist(props) {
  return (
  <div> 
    <h1>Tara's Music Store App</h1>
<div className="productlist-container">
  {props.children}
  </div>
  </div>
  );
}
export default App;

// usestate is used to store the tracks in the state. This is the code i've created based on lecture .doesnt work. Change Product to Music in the import
// const App = (props) => {
// const [musics] = useState(data);

// return musics.map(music => <Music key={music.id} music={music}/>);
// }
// export default App;

//the below function works to display the books in the browser. In order for it to work you need to rename the json import as musicdata instead of data
// function App() {      
// return (
//       <div className="App">
// <header className="App-header">
// <a className="App-link"
// href="https://imusicstore.netlify.app/"
//  target="_blank"
// rel="noopener noreferrer"
//         >
//          View Example Mediastore App
//         </a>
//       </header>
//       {/* <Product /> */}
//       {
// musicdata.map( data => {
//     return(
//       <div className="box" key={ data.trackId }> <br />
//            <strong> { data.trackName }</strong><br />
//            { data.artistName } <br />
//            { data.currency } { data.trackPrice } <br />
//            { data.artworkUrl100 }

//       </div>
//     )  
// })
// }
// </div>
// );
// }
// export default App;


