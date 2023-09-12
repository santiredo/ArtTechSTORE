import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import CardContainer from "../../components/CardContainer/CardContainer";
import Carrusel from "../../components/Carrusel/Carrusel";
import Filters from "../../components/Filters/Filters";
import React from 'react';
import { InitialState } from "../../redux/reducer";
import loadingGif from '../../assets/loading.gif'
import { getAllProducts } from "../../redux/action";
import ArtistsList from "../../components/ArtistsList/ArtistsList";
import { useAuth0 } from '@auth0/auth0-react';
import style from "./Home.module.css";
import axios from "axios";
import Register from "../../components/Register/Register";

const Home: React.FC = () => {


  const loading = useSelector((state:InitialState) => state.loadingHome)

  const dispatch = useDispatch()

  const {user} = useAuth0()

  const [doesUserExists, setUserExistence] = useState(true)

  const isUserRegistered = async() => {

    if(user?.email){
      console.log(user.email)
      const userResponse = await axios(`http://localhost:3001/user/mail?mail=${user!.email}`)

      const artistResponse = await axios(`http://localhost:3001/artist/artist/mail?mail=${user!.email}`)

      console.log(userResponse)
      if(!userResponse.data && !artistResponse.data){
        setUserExistence(false)
      }
    }
  }

  useEffect(() => {

    isUserRegistered()
    getAllProducts(dispatch)

  }, [user?.email])


  return (
    <>
      {
        loading ? (
          <div className={style.loadingDiv}>
          <img src={loadingGif} alt="" />
          </div>
        ) : (
          <div className={style.container}>
            <div className={style.carruselAndArtists}>
              <ArtistsList/>
              <Carrusel/>
            </div>
            <hr />
            <div className={style.postsSection}>
              <Filters />
              <CardContainer />
            </div>
            {
              !doesUserExists && <Register onRegister={(userExistence) => setUserExistence(userExistence)} />
            }
          </div>
        )
      }
    </>
    
  );
};

export default Home;