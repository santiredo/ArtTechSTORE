import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ArtGalleryItem } from '../../redux/reducer';
import user from '../../assets/usuario.png'
import style from './carrusel.module.css'



export default function Carrusel(){

    const [items, setItems] = useState<ArtGalleryItem[]>([]);

    const URL='http://localhost:3001'
    useEffect(() => {
        fetch(`${URL}/products`).then(response => response.json()).then(data => setItems(data));
        
      }, []);


    return (
        <div className={style.subcontainer}>
          <h1>Latest posts</h1>
          <Carousel className={style.carouselComponent} interval={null}>
            {
              items.slice(-6).map((card) => (
                <Carousel.Item key={card.id}>
                  <div className={style.cardComponent}>
                    <div className={style.cardInfo}>
                        <div>
                          <img src={user} alt="" />
                          <h2>Artist</h2>
                        </div>
                        <h3>${card.price}</h3>
                        <button>Buy</button>
                    </div>
                    <div className={style.divImage}>
                      <img className={style.postImg} src={card.image} alt="" />
                    </div>
                  </div>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            }
          </Carousel>
      </div>
    )
}