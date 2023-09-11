import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import CardContainer from "../../components/CardContainer/CardContainer";
import Carrusel from "../../components/Carrusel/Carrusel";
import Filters from "../../components/Filters/Filters";
import React from 'react';
import { InitialState } from "../../redux/reducer";
import loadingGif from '../../assets/loading.gif'
import style from "./Home.module.css";
import { getAllProducts } from "../../redux/action";
import ArtistsList from "../../components/ArtistsList/ArtistsList";




const Home: React.FC = () => {

  const loading = useSelector((state:InitialState) => state.loadingHome)

  const dispatch = useDispatch()

    useEffect(() => {
        getAllProducts(dispatch)
    }, [])


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
          </div>
        )
      }
    </>
    
  );
};

export default Home;