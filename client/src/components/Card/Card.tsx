import React, { useState } from 'react';
import style from './Card.module.css';

interface CardProps {
  id: string;
  imageURL: string;
  type: string;
  name: string;
  artistName: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ id, imageURL, type, name, artistName, cost }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const cardStyle = {
    backgroundImage: `url(${imageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handleFavoriteClick = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <div
      key={id}
      className={`${style.card} ${isHovered ? style.hovered : ''}`}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.cardContent}>
        <h1 className={style.cardType}>{type}</h1>
        <h2 className={style.cardName}>{name}</h2>
        <p className={style.cardArtistName}>{artistName}</p>
        <p className={style.cardCost}>{cost}</p>
        <button className={style.viewMoreButton}>➕</button>
        <button
          type="button"
          className={`${style.favoriteButton} ${style.cardButton} ${isFavorite ? style.favoriteActive : ''}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? '❤️' : '🖤'}
        </button>
      </div>
    </div>
  );
};

export default Card;
