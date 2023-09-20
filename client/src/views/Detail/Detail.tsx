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
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';


const Detail = () => {

    initMercadoPago('TEST-96ce1060-b631-4a00-b37a-be900591244e');
    
    const {id} = useParams()

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    const product = useSelector((state: InitialState) => state.productDetail)

    const favourites = useSelector((state: InitialState) => state.favourites)

    const userId = JSON.parse(localStorage.getItem('userData')!).id;

    const thisFav = favourites.find((fav: Favourite) => {
        return fav.UserId === userId && fav.ProductId === Number(id)
    })

    const isFav = thisFav?.fav || false

    const handleFav = async() => {

        if(isFav) {

            await axios.delete(`/favourites/${thisFav!.id}`)
            await getFavsById(userId, dispatch)

        } else {
            
            await axios.post('/favourites', {productId:Number(id), userId:Number(userId)})
            await getFavsById(userId, dispatch)

        }
    }

    useEffect(() => {
        getProductById(id, dispatch)

        setTimeout(() => {
            product.title.length > 0 && setLoading(false)
          }, 3000);
    }, []);

    const [preferenceId, setPreferenceId] = useState(null);

    const handleBuy = async() => {
        try {

            const response = await axios.post(`/order/${userId}`, { price: product.price, address: "Address" })

            const {id} = response.data
            const idOrder = id

            if(idOrder){
            
                try {

                const response = await axios.post(`http://localhost:3001/create_preference/${idOrder}`, {
                    description: product.title,
                    price: product.price,
                    quantity: 1,
                    currency_id: "ARS"
                })
    
                const {id} = response.data;

                if(id){
                    setPreferenceId(id)
                } 
                    
                } catch (error) {
                    alert(error)
                }
            }
            
        } catch (error) {
            alert(error)
        }
    }
    
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
                            <button className={style.buyPostButton} onClick={handleBuy}>Buy now</button>
                            {preferenceId && <Wallet initialization={{  preferenceId }}/>}

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