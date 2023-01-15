import React from "react";
import Product from "./Product";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";


export default function Basket({
    removeFromBasket,
    basket,
    basketTotal,
    basketCount,
  }) {
    console.log(basket);
    const count = basket.length;
    return (
      <div>
        <h1>Basket</h1>
  
        <BasketCount BasketCount={basketCount} count={count} />
{/* item={product} might need to be product={product} but im not destructuring */}
        {basket.length > 0 ? (
          basket.map((product) => (
            <div className="product" key={product.trackId}>
              <Product
                product={product}
                key={product.trackId}
                inBasket={product.inBasket}
                removeFromBasket={removeFromBasket}
              />
            </div>
          ))
        ) : (
          <div className="empty-basket">Sorry, no items in basket...</div>
        )}
  
        <h2 className="basket-total">
          Total: £
          {basketTotal === 0 ? `0:00` : <BasketTotal basketTotal={basketTotal} />}
        </h2>
      </div>
    );
  }


  //***Basket(props or product) useReducer(BasketReducer or Basketcount)
// export default function Basket({}) {

//     return(
//         <div className="wrapper">
//           <div>
//             Basket: {basket.length} total items.
//           </div>
//           <div>Total: {getTotal(basket)}</div>
//             <div>
//             {basket.map(product => (
//               <div key={product.trackId}>
//                 <div className="basketproduct">
//                     <Product 
//                     product={product}
//                     key={product.trackId}
//                     removeFromBasket={product.removeFromBasket}
//                     inBasket={product.inBasket} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )

    //    function getTotal(total) {
    //   return total.toLocaleString(undefined, currencyOptions)
    // }
//     function getTotal(cart) {
//         const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
//     }
    

    
// }

//        
//                 {basket.map((product) => (
//                     <div className="basketproduct" key={product.trackId}>
//                         <Product
//                         product={product}
//                         key={product.trackId}
//                         removeFromBasket={product.removeFromBasket}
//                         inBasket={product.inBasket}
//                 ))}
//                 </div>
//                 </div>
// )
//                 }



// 



// ({removeFromBasket, basket, basketTotal, basketCount}) {
//     console.log(basket)
//    const count = basket.length;
//        return (
//            <div>
//                <h1>Basket</h1>
               
//                <BasketCount BasketCount={basketCount} count={count}/>
   
//                {basket.length > 0 ? (
//                basket.map((product) => (
//                    <div className="product" key={product.trackId}>
//                  <Product item={product} key={product.trackId} inBasket={product.inBasket} removeFromBasket={removeFromBasket} />
//                  </div>
//                ))
            
//            ) : (
//              <div>Sorry, no items in basket...</div>
//            ) }
   
//    <h2 className="basket-total">Total: £{basketTotal === 0 ? `0:00` : <BasketTotal basketTotal={basketTotal}/>}
//          </h2>
//          </div>
//        );
//    }


// const Basket = ({products}) => {

//     return (
//         <div>
//             {products[0] ? (
//                 <div>
//                     <h1>Basket</h1>
//                     <h2>{products.length}</h2>
//                     {products.map((item) => (
//                         <Product product={product} key={product.id} isInTheBasket={true} />
//                     ))}
//                     </div>
//             ) : (
//                 <h2>no books yet</h2>
//             )}
//         </div>
//     );
// }
