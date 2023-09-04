import React, { useEffect, useState } from "react";
import styles from "./ProfileView.module.css";
import axios from "axios";

interface Artist {
  artistName: string;
  location: string;
}

const ProfileView: React.FC<Artist> = (props) => {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const response = await axios.get<string>(`https://api.example.com/profiles/${props.artistName}/photo`);
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching profile photo:", error);
      }
    };

    fetchProfilePhoto();
  }, [props.artistName]);

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["p-container"]}>
        {photo && <img className={styles["artist-photo"]} src={photo} alt="Artist's photo" />}
        <div className={styles["stars-ranking"]}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span className="filled" key={star}>
              ✩
            </span>
          ))}
        </div>
      </div>
      <div className={styles["artist-info"]}>
        <h1 className={styles["artist-name"]}>{props.artistName}</h1>
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





