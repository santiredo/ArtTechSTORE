import React, { useEffect, useState } from "react";
import styles from "./ProfileView.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { actionProfilePhoto, displayArtist } from '../../redux/action';

interface Artist {
  artistName: string;
  location: string;
}

interface ProfileState {
  artistName: string;
  photo: string | null;
}

const ProfileView: React.FC<Artist> = (props) => {
  const dispatch = useDispatch();
  const { artistName, photo } = useSelector((state: { artist: ProfileState }) => state.artist);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch<any>(displayArtist(props.artistName)),
          dispatch<any>(actionProfilePhoto(props.artistName))
        ]);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchData();
  }, [dispatch, props.artistName]);


  return (
    <div className={styles["profile-container"]}>
      <div className={styles["p-container"]}>
        {photo && <img className={styles["artist-photo"]} src={photo} alt="Artist photo" />}
        
        <div className={styles["stars-ranking"]}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              className={star <= rating ? styles["filled"] : ""}
              key={star}
              onClick={() => setRating(star)}>
              {star <= rating ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>
     
      <div className={styles["artist-info"]}>
        <h1 className={styles["artist-name"]}>{artistName}</h1>
        <p className={styles["artist-location"]}>{props.location}</p>
      </div>
    
      <div className={styles["button-container"]}>
        <button className={styles.CreateButton}>Creaciones en venta</button>
        <button className={styles.SaleButton}>Vendidos</button>
      </div>
    
    </div>
  );
};

export default ProfileView;





