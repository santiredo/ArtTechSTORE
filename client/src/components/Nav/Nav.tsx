import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import cart from "../../assets/cart.png";

const Navbar = () => {
      
  return(
    <div className={style.container}>
      <Link to="/" className={style.link}>Home</Link>
      <SearchBar />   
      <Link to="/" className={style.link}>Favorites</Link>
      <Link to="/"><img src={cart} alt="ShoppingCart" className={style.carrito}/></Link>
    </div>
  );
};

export default Navbar;