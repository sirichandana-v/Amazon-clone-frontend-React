import React from "react";
import "./Product.css";

function Product({id,title,price,rating,image}) {
    return (
        <div className="product">
            <div className="product_info">
                <p className="product_title">{title}</p>
                <p className="product_price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p key={i}>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="alexa" />
            <button>Add to basket</button>
            
        </div>
    )
}

export default Product
