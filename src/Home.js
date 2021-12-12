import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup: how constant innovation creates radically successful business paperback"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product 
          id="49538094"
          title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/Blenders,%20Mixers%20and%20Meat%20Grinders/Hand%20Mixers/HM330/HandMixers-HM330-800x600-1_80x60.jpg"
          rating={4}
          />
        </div>

        <div className="home__row">
        <Product
        id="4903850" 
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter"
        price={199.99}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        rating={3}
        />
        <Product 
        id="23445930"
        title="Amazon Echo (3rd generation) | smart speaker with alexa, charcoal fabric"
        price={98.99}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        rating={5}
        />
        <Product
        id="3254354345" 
        title="New apple iPad pro (12.9 inch, Wi-Fi, 128GB) - silver (4th generation)"
        price={598.99}
        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        rating={4}
        />
        </div>

        <div className="home__row">
        <Product 
        id="908293332"
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter - super ultra wide dual WQHD 5120 x 1440"
        price={1094.98}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
        </div>
      </div>
    </div>
  );
}

export default Home;
