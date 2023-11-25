import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getArtistById } from '../../redux/action';
import { ArtGalleryItem, InitialState } from "../../redux/reducer";
import { useParams } from "react-router-dom";
import profilePhoto from '../../assets/usuario.png'
import { NavLink } from "react-router-dom";
import loadingGIF from '../../assets/loading.gif'
import styles from './ProfileView.module.css'


export default function ProfileView() {

  const {id} = useParams()

  const dispatch = useDispatch()

  const [soldOut, setSoldOut] = useState(false)
  const [onSale, setOnSale] = useState(false)
  const [loading, setLoading] = useState(true);

  const artist = useSelector((state: InitialState) => state.artist);

  const productsOnSale = artist.products.filter((product) => product.posted === true)
  const soldOutProducts = artist.products.filter((product) => product.posted === false)

  const [artistProfile, setArtistProfile] = useState(false)

  const soldOutHandler = () => {
    setSoldOut(!soldOut)
  }

  const onSaleHandler = () => {
    setOnSale(!onSale)
  }

  const isArtistProfile = () => {

    const userId = JSON.parse(localStorage.getItem('userData')!).id

    Number(userId) === Number(artist.id) && setArtistProfile(true)

  }


  useEffect(() => {

    isArtistProfile()

    artist.id === Number(id) && setLoading(false)

    return (() => {
      setLoading(true)
    }) 

  }, [artist])
  
  useEffect(() => {

    getArtistById(id, dispatch)
    
  }, [id, dispatch]);


  return (
    <div className={styles.profilePage}>
      {
        loading ? (
          <div>
            <img className={styles.loading} src={loadingGIF} alt="" />
          </div>
        ) : (
          <>
            <div className={styles.profileContainer}>
              <div className={styles.photoDiv}>
                <div className={styles.profilePhoto}>
                  <img src={profilePhoto} alt="" />
                </div>
                <div>
                  <div>
                    {
                      artistProfile && (
                        <NavLink to={`/form/${id}`}>
                            <button className={styles.btn}>Add Product</button>
                        </NavLink>
                      )
                    }
                  </div>
                </div>
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
                  {
                    soldOutProducts.map((product: ArtGalleryItem) => (
                      <div className={styles.cardComponent1}>
                        <img className={styles.img} key={product.id} src={product.image} alt="" />
                        <div className={styles.cardInfo}>
                          <NavLink to={`/detail/${product.id}`} >
                            <button className={styles.btn}>More Information</button>
                          </NavLink>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className={onSale ? styles.showOnSale : styles.hideOnSale}>
                  {
                    productsOnSale.map((product: ArtGalleryItem)=> (
                      <div key={product.id} className={styles.cardComponent1}>
                        <img className={styles.img} src={product.image} alt="" />
                        <div className={styles.cardInfo}>
                          <NavLink to={`/detail/${product.id}`}>
                            <button className={styles.btn}>More Information</button>
                          </NavLink>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <br />
                {
                  productsOnSale[0] && (
                    <div className={styles.lastCreation}>
                      <h2>Last post</h2>
                      <br />
                        <div className={styles.cardComponent2}>
                          <img className={styles.img} key={productsOnSale[0].id || null} src={productsOnSale[0].image || ''} alt="" />
                          <div className={styles.cardInfo2}>
                            <NavLink to={`/detail/${productsOnSale[0].id}`} >
                              <button className={styles.btn2}>More Information</button>
                            </NavLink>
                          </div>
                        </div>
                    </div>
                  )
                }
                
              </div>
            </div>
          </>
        )
      }
      
    </div>
  );
}
