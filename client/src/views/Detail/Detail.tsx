import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Favourite, InitialState } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getFavsById, getProductById, setToFav } from "../../redux/action";
import emptyFav from '../../assets/favEmpty.png'
import filledFav from '../../assets/favFilled.png'
import loadingGif from '../../assets/loading.gif'
import user from '../../assets/usuario.png'
import style from "./Detail.module.css";
import axios from 'axios';


const Detail = () => {

    const {id} = useParams()

    const dispatch = useDispatch()

    const product = useSelector((state: InitialState) => state.productDetail)

    const isFav = useSelector((state: InitialState) => state.productDetail.isFav)

    const favourites = useSelector((state: InitialState) => state.favourites)

    const [loading, setLoading] = useState(true)

    const userDataJSON = localStorage.getItem('userData')
    const userId = userDataJSON && JSON.parse(userDataJSON).id

    const handleFav = async() => {

        const fav = favourites.find((fav: Favourite) => {
            return fav.userId === userId && fav.productId === Number(id)
        })

        if(isFav && fav) {
            
            await axios.delete('http://localhost:3001/favourites', {[fav.id]:fav.id})
            await getFavsById(userId, dispatch),

            setToFav(Number(userId), Number(id), dispatch)
        } else {
            await axios.post('http://localhost:3001/favourites', {id:Number(id), userId:Number(userId)}),
            await getFavsById(userId, dispatch),

            setToFav(Number(userId), Number(id), dispatch)
        }
    }

    useEffect(() => {
        setToFav(Number(userId), Number(id), dispatch)

        getProductById(id, dispatch)

        product && setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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