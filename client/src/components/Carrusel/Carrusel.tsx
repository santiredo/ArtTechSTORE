import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ArtGalleryItem } from '../../redux/reducer';
import user from '../../assets/usuario.png'
import style from './carrusel.module.css'



export default function Carrusel(){

    const [items, setItems] = useState<ArtGalleryItem[]>([]);

    console.log(items)

    const URL='http://localhost:3001'
    useEffect(() => {
        fetch(`${URL}/products`).then(response => response.json()).then(data => setItems(data));
        
      }, []);


    return (
        <div className={style.subcontainer}>
          <h1>Latest posts</h1>
          <Carousel className={style.carouselComponent} interval={null}>
            {
              items.slice(-3).map((card) => (
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
                        <button>Buy</button>
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