import CardContainer from "../../components/CardContainer/CardContainer";
import Carrusel from "../../components/Carrusel/Carrusel";
import Filters from "../../components/Filters/Filters";
import style from "./Home.module.css";
import React from 'react';



const Home: React.FC = () => {



  return (
    <div className={style.container}>
      <Carrusel/>
      <br />
      <div className={style.postsSection}>
        <Filters />
        <CardContainer />
      </div>      
    </div>
  );
};

export default Home;