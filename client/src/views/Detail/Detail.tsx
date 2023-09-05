

import { useState } from 'react';
import emptyFav from '../../assets/favEmpty.png'
import filledFav from '../../assets/favFilled.png'
import Viaje from "../../images/Viaje.jpg";
import style from "./Detail.module.css";




const Detail = () => {

    const [isFav, setIsFav] = useState(false)

    const handleFav = () => {
        setIsFav(!isFav)
    }
    
    return(
        <div className={style.detailPage}>
            <div className={style.postContainer}>
                <img className={style.postImage} src={Viaje} alt="cuadro" />
                <div className={style.info}>
                    <h1>El Viaje</h1>
                    <h2>$400</h2>
                    {
                        isFav ? (
                            <div className={style.imgFav}>
                                <img onClick={handleFav} src={filledFav} alt="" />
                                <span>Remove from favs</span>
                            </div>
                            
                        ) : (
                            <div className={style.imgFav}>
                                <img onClick={handleFav} src={emptyFav} alt="" />
                                <span>Add to favs</span>
                            </div>
                        )
                    }
                    <h3>Owner: Henry</h3>
                    <h3>Type: Painting</h3>
                    <h3>Technique: Oil on canvas</h3>
                    <button className={style.buyPostButton}>Add to cart</button>
                </div>
            </div>
            <div className={style.descriptionDiv}>
                <div>
                    <h2>Description</h2>
                    <h4>text...</h4>
                </div>
                <hr />
                <div>
                    <h2>About the seller</h2>
                    <h3>Name: Henry</h3>
                    <h3>Location: Argentina</h3>
                    <button>VIEW PROFILE</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;