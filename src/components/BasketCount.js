import React from "react";

function BasketCount(props) {
    console.log(props.basketCount);
    return (
<div className="basket-count">
    {props.basketCount} 
</div>
    );
}


export default BasketCount;