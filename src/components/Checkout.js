import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css"
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
console.log("in checkout")
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
          alt="ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping Basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="checkout_right">
          {
              basket.length>0 && (
                  <div className="checkout_right">
                      <h1>Subtotal</h1>
                      <Subtotal/>
                  </div>
              ) 
          }
      </div>
    </div>
  );
}

export default Checkout;
