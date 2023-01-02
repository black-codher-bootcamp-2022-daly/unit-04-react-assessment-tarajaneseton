import "./styles/App.css";
import React, { useState } from "react";
import { Track }  from "./components/Product";
import data from "./models/data.json";
import Help from "./components/Product";

export default function App() {
  return (
    <div className="App">
      <Car />
    </div>
  );
}
//usestate is used to store the tracks in the state.
// const App = (props) => {
// const [tracks] = useState(data);
// return tracks.map(track => <Track key={track.id} track={track}/>);
// // }
// export default App;


<div className="App">
      <header className="App-header">
      <Productlist products= {Product}/>;
 <p>Edit <code>src/App.js</code> and save to reload.
        </p>
<a className="App-link"
href="https://imusicstore.netlify.app/"
 target="_blank"
rel="noopener noreferrer"
        >
         View Example Mediastore App
        </a>
      </header>
</div>