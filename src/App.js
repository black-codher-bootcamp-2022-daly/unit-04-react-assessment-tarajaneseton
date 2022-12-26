import "./styles/App.css";
import {Productlist, Product} from "./components/Product";
import data from "./models/data.json";

function App() {
  const [products] = useState(data);
  return ( <ul>
    {products.map((product)=><Product product={product}/>)}
  </ul>
// // {/* <div className="App">
//       <header className="App-header"> */}
        // <Productlist products= {Product}/>;
//         // <p>
//         //   Edit <code>src/App.js</code> and save to reload.
//         // </p>
//         // <a
//         //   className="App-link"
//         //   href="https://imusicstore.netlify.app/"
//         //   target="_blank"
//         //   rel="noopener noreferrer"
//         // >
//         //  View Example Mediastore App
//         // </a>
//     //   </header>
//     // </div>
  );
}

export default App;
