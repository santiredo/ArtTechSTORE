
import {useState, useEffect} from 'react'

import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from "react-router-dom";
import letter from "../../assets/letra2.png";
import style from "./Nav.module.css";
// import LogoutButton from '../Auth0/Logout/Logout';
// import { useAuth0 } from '@auth0/auth0-react';
// import DashboardButton from '../Admin/DashBoardButton/DashboardButton';


const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

/*   const [artist, setArtist] = useState(false)
  const [username, setUsername] = useState(false)
  const [admin, setAdmin] = useState(false) */

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
      
  // const {user} = useAuth0()

/*   const userDataJSON = localStorage.getItem('userData')

  if(JSON.parse(userDataJSON!).admin === true) {
    setAdmin(true);
  }
  else if(JSON.parse(userDataJSON!).location){
    setArtist(true);
  }
  else{
    setUsername(true);
  } */

  return(
    <div className={navbarClass}>
      <NavLink to='/home' className={style.homeLink}>
        <img src={letter} alt="logo" />
        <h1>ArtTechStore</h1>
      </NavLink>
      <NavLink to="/favorites" className={style.navLink}>Favourites</NavLink>
      <NavLink to="/home" className={style.navLink}>Home</NavLink>
      <SearchBar/>
      <div>
{/*         {artist && <img src={user?.picture} alt="" />}
        {username && <LogoutButton/>}
        {admin && <DashboardButton/>} */}
      </div>
    </div>
  );
};

export default Navbar;