
import {useState, useEffect} from 'react'

import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from "react-router-dom";
import letter from "../../assets/letra2.png";
import style from "./Nav.module.css";


const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [prevScrollPos, visible]);



  const handleScroll = () => {

    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);

    setPrevScrollPos(currentScrollPos);
  };

  const navbarClass = visible ? style.navBar : `${style.navBar} ${style.hiddenNavBar}`;
      
  return(
    <div className={navbarClass}>
      <NavLink to='/home' className={style.homeLink}>
        <img src={letter} alt="logo" />
        <h1>ArtTechStore</h1>
      </NavLink>
      <NavLink to="/favorites" className={style.navLink}>Favourites</NavLink>
      <NavLink to="/favorites" className={style.navLink}>Home</NavLink>
      <SearchBar /> 
    </div>
  );
};

export default Navbar;