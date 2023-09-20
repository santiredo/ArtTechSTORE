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
          <div className={style.artistDiv}>
            <div className={style.imgDiv}>
              <img src={props.artistPhoto ? props.artistPhoto : user} alt="" />
            </div>
             <h5>{props.artistName}</h5>
          </div>
          <h4>${props.price}</h4>
          <NavLink className={style.buyButton} to={`/detail/${props.id}`}>Buy</NavLink>
      </div>
    </div>
  )
};

export default Card;
