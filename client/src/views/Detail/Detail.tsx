import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { InitialState } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import emptyFav from '../../assets/favEmpty.png'
import filledFav from '../../assets/favFilled.png'
import Viaje from "../../images/Viaje.jpg";
import style from "./Detail.module.css";
import { getProductById } from "../../redux/action";


const Detail = () => {

    const product = useSelector((state: InitialState) => state.productDetail)

    const [isFav, setIsFav] = useState(false)

    const handleFav = () => {
        setIsFav(!isFav)
    }

    const dispatch = useDispatch()
    
    const {id} = useParams()

    useEffect(() => {
        getProductById(id, dispatch)
    
  }, []);


    
    return(
        <div className={style.detailPage}>
            <div className={style.postContainer}>
                <img className={style.postImage} src={Viaje} alt="cuadro" />
                <div className={style.info}>
                    <h1>{product.title}</h1>
                    <h2>{product.price}</h2>
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
                    <p>
                        <NavLink to={`http://localhost:3001/artist/${product.artistName}`} 
                        className={style.ownerLink}>{product.artistName}
                        </NavLink>
                    </p>

                    <h3>Type: Painting</h3>
                    <h3>Technique: </h3>
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
                    
                </div>
            </div>
        </div>
    );
};

export default Detail;