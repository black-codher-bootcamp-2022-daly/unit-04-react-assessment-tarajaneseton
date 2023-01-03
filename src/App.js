import "./styles/App.css";
import React from "react";
import musicdata from "./models/data.json";
// import { Product } from "./components/Product.js";

// usestate is used to store the tracks in the state.
// const App = (props) => {
// const [tracks] = useState(data);


function App() {      
return (
      <div className="App">
<header className="App-header">
<a className="App-link"
href="https://imusicstore.netlify.app/"
 target="_blank"
rel="noopener noreferrer"
        >
         View Example Mediastore App
        </a>
      </header>
      {/* <Product /> */}
      {
musicdata.map( data => {
    return(
      <div className="box" key={ data.trackId }> <br />
           <strong> { data.trackName }</strong><br />
           { data.artistName } <br />
           { data.currency } { data.trackPrice } <br />
           { data.artworkUrl100 }

      </div>
    )  
})
}
</div>
);
}
export default App;


