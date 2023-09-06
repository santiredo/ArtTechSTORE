import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllArtist } from '../../redux/action';
import { InitialState } from "../../redux/reducer";
import { useParams } from "react-router-dom";
import RatingStars from "../../components/RatingStars/RatingStars";
import foto from '../../assets/fotoLanding3.png'
import ultimaCreacion from '../../assets/fotoLanding4.jpg'
import styles from './ProfileView.module.css'



export default function ProfileView() {

  const artist = useSelector((state: InitialState) => state.artist);

  const {id} = useParams()

  const dispatch = useDispatch()

  const [soldOut, setSoldOut] = useState(false)

  const soldOutHandler = () => {
    setSoldOut(!soldOut)
  }
  
  useEffect(() => {

    getAllArtist(id, dispatch)
    
  }, []);


  return (
    <div className={styles["profile-page"]}>
      <div className={styles.profileContainer}>
        <div className={styles["foto-rating-div"]}>
          <img src={foto} alt="" />
          <RatingStars/>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileInfoDiv}>
            <h1>{artist.name}</h1>
            <h3>{artist.location}Argentina</h3>
          </div>
          <hr />
          <div className={styles.profileInfoDiv}>
            <button>On sale</button>
            <button onClick={soldOutHandler}>Sold out</button>
          </div>
            <div className={soldOut ? styles.showSoldOut : styles.hideSoldOut}>
              <p>Aqui van las creaciones vendidas</p>
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
