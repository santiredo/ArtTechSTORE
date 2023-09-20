import { useSelector } from "react-redux";
import { ArtGalleryItem, InitialState } from "../../redux/reducer";
import user from '../../assets/usuario.png'
import { NavLink } from "react-router-dom";
import filledFav from '../../assets/favFilled.png'
import style from "./Favorites.module.css";



export default function Favorites() {

  const favourites = useSelector((state:InitialState) => state.allPosts)

  console.log(favourites)

  return (
    <div className={style.container}>
      <h1>My favorite products</h1>
      <div className={style.itemsContainer}>
        {
        favourites.map((product: ArtGalleryItem) => (
          <div className={style.favouriteComponent}>
            <div className={style.imgFav}>
                <img src={filledFav} alt="" />
                <span>Remove from favs</span>
            </div>
            <h2>{product.title}</h2>
            <div className={style.imageArtist}>
              <img src={product.image} alt="" />
              <NavLink to={`/profile/id`} className={style.artistDiv}>
                <div className={style.imgDiv}>
                  <img src={product.artistPhoto ? product.artistPhoto: user} alt="" />
                </div>
                <h3>{product.artistName}</h3>
              </NavLink>
            </div>              
            <div className={style.favInfo}>
              <br />
              <h2>${product.price}</h2>
              <hr />
              <div><h5>Published on:</h5><h5>{product.published}</h5></div>
                <hr />
                <div className={style.typeTechnique}>
                  <h5>{product.type}</h5>
                  ⇒
                  <h5>{product.technique}</h5>
                </div>
                <hr />
                <NavLink className={style.moreInfo} to={`/detail/${product.id}`}>
                  More info
                </NavLink>
              </div>
            </div>
        ))
        }
      </div>
    </div>
  );
}