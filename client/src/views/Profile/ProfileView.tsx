import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getArtistById } from '../../redux/action';
import { ArtGalleryItem, InitialState } from "../../redux/reducer";
import { useParams } from "react-router-dom";
import RatingStars from "../../components/RatingStars/RatingStars";
import profilePhoto from '../../assets/usuario.png'
//import ultimaCreacion from '../../assets/fotoLanding4.jpg'
import styles from './ProfileView.module.css'
import { Artist } from '../../redux/reducer';



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
    
  }, [id, dispatch]);

  const [items, setItems] = useState<Artist[]>([]);
  const [items2, setItems2] = useState<ArtGalleryItem[]>([]);

    const URL='http://localhost:3001'
    useEffect(() => {
        fetch(`${URL}/artist/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setItems(data.products);
          setItems2(data.products);
        });
        
      }, [id]);

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileContainer}>
        <div className={styles.photoDiv}>
          <img className={styles.profilePhoto} src={artist.image ? artist.image : profilePhoto} alt="" />
          <RatingStars/>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileInfoDiv}>
            <h1>{artist.name}</h1>
            <h3>{artist.location}</h3>
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
              {items2.map((card:ArtGalleryItem)=>
              <div className={styles.cardComponent}>
                <img src={card.image} alt="" />
                <div className={styles.cardInfo}>
                  <div className={styles.infoDiv}>
                    <h3>${card.price}</h3>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
              
              )}
            </div>
          <div className={styles.lastCreation}>
            <h2>Last post:</h2>
            {items.slice(-1).map((card:Artist) =>
            (<div className={styles.cardComponent}>
              <img key={card.id} src={card.image} alt="" />
              <div className={styles.cardInfo}>
                <div className={styles.infoDiv}>
                  {items2.slice(-1).map((card:ArtGalleryItem)=>(
                  <h3>${card.price}</h3>
                  ))}
                  <button>Buy</button>
                </div>
              </div>
            </div>)
            
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
