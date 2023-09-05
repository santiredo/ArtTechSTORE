import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import cart from "../../assets/cart.png";
import letter from "../../assets/letra2.png";

const Navbar = () => {
      
  return(
    <div className={style.container}>
      <div className={style.subcontainer}>
        <Link to="/"><img src={letter} alt="logo" className={style.art}/></Link>
        <Link to="/" className={style.log}>ArtTechStore</Link>
      </div>
      <Link to="/home" className={style.link}>Home</Link>
      <SearchBar />   
      <Link to="/favorites" className={style.link}>Favorites</Link>
      <Link to="/cart"><img src={cart} alt="ShoppingCart" className={style.carrito}/></Link>
    </div>
  );
};

export default Navbar;