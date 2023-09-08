import CardContainer from "../../components/CardContainer/CardContainer";
import Filters from "../../components/Filters/Filters";
import style from "./Home.module.css";
import { Carousel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';


interface ArtGalleryItem {
  id: number;
  image: string;
  type: string;
  title: string;
  technique: string;
  price: number;
  posted: boolean;
}

const URL='http://localhost:3001'

const Home: React.FC = () => {
  const [items, setItems] = useState<ArtGalleryItem[]>([]);

  useEffect(() => {
    fetch(`${URL}/products`).then(response => response.json()).then(data => setItems(data));
    
  }, []);

  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <h1>Latest posts</h1>
        <Carousel interval={5000}>
          {items.slice(-4).map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className={style.img}
                src={item.image}
                alt={item.title}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <br />
      <div className={style.cards}>
        <CardContainer />
        <Filters />
      </div>      
    </div>
  );
};

export default Home;