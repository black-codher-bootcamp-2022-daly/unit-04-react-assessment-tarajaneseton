import { Link } from "react-router-dom";
import React from "react";

export default function Header(props) {
  return (
    <div id="navigation">
        <div>
        <Link className="Link" to="/" id="homelink">
          {" "}
          <h4>Home</h4>
        </Link>
      </div>
      <div>
        <Link className="Link" to="/about" id="aboutlink">
          <h4>About </h4>
        </Link>
      </div>
      <div>
        <Link className="Link" to="/basket" id="basketlink">
        <h4>Basket:</h4>
          {/* <h4>Basket:{props.itemCount}</h4> */}
        </Link>
      </div>
      </div>
  );
}

