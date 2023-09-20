import { Carousel } from 'react-bootstrap';
import { useEffect } from 'react';
import { InitialState } from '../../redux/reducer';
import user from '../../assets/usuario.png'
import style from './carrusel.module.css'
import { NavLink } from 'react-router-dom';
import { getAllProducts } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



export default function Carrusel() {

  const products = useSelector((state: InitialState) => state.allPosts)

  const dispatch = useDispatch()

  useEffect(() => {

    getAllProducts(dispatch)

  }, []);


  return (
    <div className={style.subcontainer}>
      <h1>Latest posts</h1>
      <Carousel className={style.carouselComponent} interval={null}>
        {
          products.slice(-3).map((card) => (
            <Carousel.Item key={card.id}>
              <div className={style.cardComponent}>
                <div className={style.cardInfo}>
                  <div className={style.artistData}>
                    <div className={style.imgDiv}>
                      <img src={card.artistPhoto ? card.artistPhoto : user} alt="" />
                    </div>
                    <h3>{card.artistName}</h3>
                  </div>
                  <h3>${card.price}</h3>
                  <NavLink className={style.button}to={`/detail/${card.id}`}>Buy</NavLink>
                </div>
                <div className={style.divImage}>
                  <img className={style.postImg} src={card.image} alt="" />
                </div>
              </div>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}