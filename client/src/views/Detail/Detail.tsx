import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ArtGalleryItem, InitialState } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getProductById, setFav } from "../../redux/action";
import emptyFav from '../../assets/favEmpty.png'
import filledFav from '../../assets/favFilled.png'
import loadingGif from '../../assets/loading.gif'
import user from '../../assets/usuario.png'
import style from "./Detail.module.css";


const Detail = () => {

    const {id} = useParams()

    const dispatch = useDispatch()

    const product = useSelector((state: InitialState) => state.productDetail)

    const isFav = useSelector((state:InitialState) => state.productDetail.isFav)

    const [loading, setLoading] = useState(true)

    const handleFav = () => {

        const localFavouritesJSON = localStorage.getItem('favourites')
        let localFavourites = localFavouritesJSON ? JSON.parse(localFavouritesJSON) : [];

        if(!isFav){

            localFavourites.unshift(product)
            localStorage.setItem('favourites', JSON.stringify(localFavourites))

        } else {
            const updatedFavourites = localFavourites.filter((item:ArtGalleryItem) => item.id !== product.id);
            localStorage.setItem('favourites', JSON.stringify(updatedFavourites))

        }

        setFav(id!, !isFav, dispatch)
    }

    useEffect(() => {
        getProductById(id, dispatch)        

        product && setLoading(false)
    }, []);

    
    return(
        <>
        {
            loading ? (
                <div className={style.loadingDiv}>
                    <img src={loadingGif} alt="" />
                </div>

            ) : (
                <div className={style.detailPage}>
                    <div className={style.postContainer}>
                        <img className={style.postImage} src={product.image} alt="cuadro" />
                        <div className={style.info}>
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
                            <h2>{product.title}</h2>
                            <h3>{product.price}</h3>
                            <NavLink to={`http://localhost:3001/artist/${product.artistName}`}>
                            <div className={style.imgDiv}>
                                <img src={product.artistPhoto ? product.artistPhoto : user} alt="" />
                            </div>
                            {product.artistName}
                            </NavLink>
                            <h3>{product.type}</h3>
                            <h3>{product.technique}</h3>
                            <button className={style.buyPostButton}>Buy now</button>
                        </div>
                    </div>
                    <div className={style.descriptionDiv}>
                        <div>
                            <h2>Description</h2>
                            <h4>{product.description}</h4>
                        </div>
                        <hr />
                        <div>
                            
                        </div>
                    </div>
                </div>
            )
        }
        </>
    );
};

export default Detail