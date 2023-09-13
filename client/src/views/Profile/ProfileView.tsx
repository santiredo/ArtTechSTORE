import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getArtistById } from '../../redux/action';
import { InitialState } from "../../redux/reducer";
import { useParams } from "react-router-dom";
import RatingStars from "../../components/RatingStars/RatingStars";
import profilePhoto from '../../assets/usuario.png'
import styles from './ProfileView.module.css'
import { Artist } from '../../redux/reducer';
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

export default function ProfileView() {

  const artist = useSelector((state: InitialState) => state.artist);

  const {id} = useParams()

  const dispatch = useDispatch()

  const [soldOut, setSoldOut] = useState(false)
  const [onSale, setOnSale] = useState(false)

  const soldOutHandler = () => {
    setSoldOut(!soldOut)

    if(onSale){
      setOnSale(false);
    }
    if(items.length === 0){
      swal('There are no products sold yet','','error');
    }
  }

  const onSaleHandler = () => {
    setOnSale(!onSale)

    if(soldOut){
      setSoldOut(false);
    }
    if(items.length === 0){
      swal('There are no products for sale yet','','error');
    } 
  }
  
  useEffect(() => {

    getArtistById(id, dispatch)
    
  }, [id, dispatch]);

  const [items, setItems] = useState<Artist[]>([]);
  
  const URL='http://localhost:3001'
  
  useEffect(() => {
    fetch(`${URL}/artist/${id}`)
    .then(response => response.json())
    .then(data => {
      setItems(data.products);
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
            <button onClick={onSaleHandler}>ON SALE</button>
            <button onClick={soldOutHandler}>SOLD OUT</button>
          </div>
          <div className={soldOut ? styles.showSoldOut : styles.hideSoldOut}>
            
          </div>
          <div className={onSale ? styles.showOnSale : styles.hideOnSale}>
            {items.map((card:Artist)=>
              (<div className={styles.cardComponent1}>
                <img className={styles.img} src={card.image} alt="" />
                <div className={styles.cardInfo}>
                  <NavLink to={`/detail/${card.id}`}>
                    <button className={styles.btn}>More Information</button>
                  </NavLink>
                </div>
              </div>)
            )}
          </div>
          <br />
          <div className={styles.lastCreation}>
            <h2>Last post</h2>
            <br />
            {items.slice(-1).map((card:Artist) =>
              (<div className={styles.cardComponent2}>
                <img className={styles.img} key={card.id} src={card.image} alt="" />
                <div className={styles.cardInfo2}>
                  <NavLink to={`/detail/${card.id}`} >
                    <button className={styles.btn2}>More Information</button>
                  </NavLink>
                </div>
              </div>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
