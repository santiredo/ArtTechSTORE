import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getArtistById } from '../../redux/action';
import { InitialState } from "../../redux/reducer";
import { useParams } from "react-router-dom";
import RatingStars from "../../components/RatingStars/RatingStars";
import profilePhoto from '../../assets/usuario.png'
import ultimaCreacion from '../../assets/fotoLanding4.jpg'
import styles from './ProfileView.module.css'



export default function ProfileView() {

  const artist = useSelector((state: InitialState) => state.artist);

  const {id} = useParams()

  const dispatch = useDispatch()

  const [soldOut, setSoldOut] = useState(false)
  const [onSale, setOnSale] = useState(false)

  const soldOutHandler = () => {
    setSoldOut(!soldOut)

    onSale && setOnSale(false)
  }

  const onSaleHandler = () => {
    setOnSale(!onSale)

    soldOut && setSoldOut(false)
  }
  
  useEffect(() => {

    getArtistById(id, dispatch)
    
  }, []);


  return (
    <div className={styles.profilePage}>
      <div className={styles.profileContainer}>
        <div className={styles.photoDiv}>
          <img className={styles.profilePhoto} src={profilePhoto} alt="" />
          <RatingStars/>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileInfoDiv}>
            <h1>{artist.name}</h1>
            <h3>{artist.location}Argentina</h3>
          </div>
          <hr />
          <div className={styles.profileInfoDiv}>
            <button onClick={onSaleHandler}>On sale</button>
            <button onClick={soldOutHandler}>Sold out</button>
          </div>
            <div className={soldOut ? styles.showSoldOut : styles.hideSoldOut}>
              <p>Aqui van las creaciones vendidas</p>
            </div>
            <div className={onSale ? styles.showOnSale : styles.hideOnSale}>
              <p>Aqui van las creaciones en venta</p>
            </div>
          <div className={styles.lastCreation}>
            <h2>Last post:</h2>
            <img src={ultimaCreacion} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
