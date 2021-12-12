import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <>
        <div className="home">
            <img className="home_banner"  src="../images/banner.jpg" alt="amazon banner" />
            <div className="home_row">
                <Product id="1" 
                title="product 1" 
                price="3499" 
                rating={5}
                image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"/>
                <Product id="2" 
                title="produce 2" 
                price="3499" 
                rating={5}
                image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"/>
                <Product id="3" 
                title="product 3" 
                price="3499" 
                rating={5}
                image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"/>
                <Product id="4" 
                title="product 4" 
                price="3499" 
                rating={5}
                image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"/>
                
            </div>
        
        </div>
        
        </>
    )
}

export default Home
