import React from 'react';
import { ArtGalleryItem } from '../../redux/reducer';
import user from '../../assets/usuario.png'
import style from './Card.module.css';
import { NavLink } from 'react-router-dom';



const Card: React.FC<ArtGalleryItem> = (props) => {

  return (
    <div className={style.cardComponent}>
      <img src={props.image} alt="" />
      <div className={style.cardInfo}>
        <div className={style.infoDiv}>
          <div>
            <img src={user} alt="" />
            <h4>Artist</h4>
          </div>
          <h3>${props.price}</h3>
          <NavLink to={`/detail/${props.id}`}>Buy</NavLink>
        </div>
      </div>
    </div>
  )
};

export default Card;
