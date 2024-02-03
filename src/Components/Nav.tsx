import React from "react";

import "../Nav.scss";
import Main2 from "./Main2";
import Fotter from "./Fotter";

function Nav() {
  return (
    <>
      <nav className="nav-for-static">
        <div id="navbar">
          <img id="logo" src="src/assets/Images/myntralogo.jpg" />
          <a className="navhover">MEN</a>
          <a className="navhover">WOMEN</a>
          <a className="navhover">KIDS</a>
          <a className="navhover">HOME & lIVING</a>
          <a className="navhover">BEAUTY</a>
          <a className="navhover">STUDIO</a>

          <input id="s" placeholder="search for product"></input>

          <div>
            {" "}
            <a>
              <h3 className="navhover">order</h3>
              <h3 className="navhover">return</h3>
            </a>
          </div>
          
          <div>
            {" "}
            <a>
              <img id="cart" className="navhover" src="src/assets/Images/carticon.jpg"></img>
            </a>
            <p className="navhover">cart</p>{" "}
          </div>
          <div>
            {" "}
            <a>
              <img id="profile" className="navhover" src="src/assets/Images/profileicon.jpg"></img>
              <p className="navhover">profile</p>
            </a>
          </div>
        </div>
      </nav>
      <Main2 />
      <Fotter />
    </>
  );
}

export default Nav;
