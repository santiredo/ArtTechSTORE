
import {useState, useEffect} from 'react'
import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from "react-router-dom";
import letter from "../../assets/letra2.png";
import { useAuth0 } from '@auth0/auth0-react';
import userPhoto from '../../assets/usuario.png'
import config from '../../assets/configuracion.png'
import DashboardButton from '../Admin/DashBoardButton/DashboardButton';
import style from "./Nav.module.css";


const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const [artist, setArtist] = useState(false)
  const [userName, setUsername] = useState(false)
  const [admin, setAdmin] = useState(false)

  console.log(artist)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const {user} = useAuth0()

  const userData = JSON.parse(localStorage.getItem('userData')!)

  const typeOfUser = async() => {

    if(userData.admin === true){
      return setAdmin(true)
    }else if(userData.location){
      console.log('soy artista')
      return setArtist(true)
    } else{
      return setUsername(true)
    }
  }

  useEffect(() => {
    typeOfUser()
  }, [])

  const handleScroll = () => {

    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);

    setPrevScrollPos(currentScrollPos);
  };

  const navbarClass = visible ? style.navBar : `${style.navBar} ${style.hiddenNavBar}`;
 
  const [userConfig, setUserConfig] = useState(false)
  const [beforeMount, setBeforeMount] = useState(false)

  const showArtistConfig = () => {
    setBeforeMount(true)

    setUserConfig(!userConfig)
  }

  const visibleUser = userConfig ? style.showUser :  style.hideUser;

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
        {artist && (
          <div className={style.config} onClick={showArtistConfig}>
            <img src={config} alt="" />
            {
              beforeMount && (
                <div className={visibleUser}>
                  <NavLink key={userData.id} to={`/profile/${userData.id}`} className={style.artistsDiv}>
                    <div className={style.imgDiv}>
                        <img src={user ? user.picture : userPhoto} alt="" />
                    </div>
                  </NavLink>
                  {/* <LogoutButton/> */}
                </div>
              )
            }
          </div>
        )}
        {/* {userName && <LogoutButton/>} */}
        {admin && (
          <div className={style.config} onClick={showArtistConfig}>
            <img src={config} alt="" />
            {
              beforeMount && (
                <div className={visibleUser}>
                  <DashboardButton/>
                  {/* <LogoutButton/> */}
                </div>
              )
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;