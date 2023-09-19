import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Favourite, InitialState } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getFavsById, getProductById } from "../../redux/action";
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

    const [isFav, setIsFav] = useState(false)

    const favourites = useSelector((state: InitialState) => state.favourites)

    const [loading, setLoading] = useState(true)

    const userId = JSON.parse(localStorage.getItem('userData')!).id;

    const handleFav = async() => {

        setIsFav(!isFav)

        if(isFav) {

            const fav = favourites.find((fav: Favourite) => {
                return fav.UserId === userId && fav.ProductId === Number(id)
            })

            await axios.delete(`/favourites/${fav?.id}`)
            await getFavsById(userId, dispatch)


        } else {
            
            await axios.post('/favourites', {productId:Number(id), userId:Number(userId)})
            await getFavsById(userId, dispatch)


        }
    }
    
    const findFav = async () => {

        const favs = await getFavsById(userId, dispatch)
        
        if (userId && favs) {

            const fav = favourites.find((fav: Favourite) => {
                return fav.UserId === userId && fav.ProductId === Number(id);
            });
            
            fav && setIsFav(true);
            
            setLoading(false);

        } else {
            setTimeout(findFav, 1000);
        }
    };


    useEffect(() => {

        findFav()
        getProductById(id, dispatch)

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
                            <NavLink to={`/artist/${product.artistName}`}>
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