import React from "react";
import "../Main3.scss";

function Cart() {
  return (
    <>
      <h1>My Wishlist</h1>
      <div className="product-container">
        <div className="product-card">
          <img
            src="src/assets/images/Im3.jpg"
            alt="hummel Men Navy Blue & White Sport Shoes"
          />
          <h2>hummel Men Navy Blue & White Sport Shoes</h2>
          <p className="price-strikethrough">Rs.1,699</p>
          <p className="price">
            Rs.1,325 <span className="discount">(22% OFF)</span>
          </p>
          <button className="add-to-bag">MOVE TO CART</button>
        </div>
        <div className="product-card">
          <img
            src="src/assets/images/Im12.jpg"
            alt="Roadster Men Black Solid Biker Jacket"
          />
          <h2>Roadster Men Black Solid Biker Jacket</h2>
          <p className="price-strikethrough">Rs.1,899</p>
          <p className="price">
            Rs.987 <span className="discount">(48% OFF)</span>
          </p>
          <button className="add-to-bag">MOVE TO CART</button>
        </div>
        <div className="product-card">
          <img src="src/assets/images/Im5.jpg" alt="Out of Stock" />
          <h2>Bewakoof Men Blue Solid Sport Shoes</h2>
          <p className="price">Rs.1,599</p>
          <button className="add-to-bag" disabled>
            MOVE TO CART
          </button>
        </div>
        <div className="product-card">
          <img src="src/assets/images/Im6.jpg" alt="Out of Stock" />
          <h2>HPS Sports Men White Solid Sport Shoes</h2>
          <p className="price">Rs.899</p>
          <button className="add-to-bag" disabled>
            MOVE TO CART
          </button>
        </div>
        <div className="product-card">
          <img src="src/assets/images/Im7.jpg" alt="Out of Stock" />
          <h2>HPS Sports Men Blue Stripe Sport Shoes</h2>
          <p className="price">Rs.899</p>
          <button className="add-to-bag" disabled>
            MOVE TO CART
          </button>
        </div>
      </div>
     
    </>
  );
}

export default Cart;
