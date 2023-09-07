import CardContainer from "../../components/CardContainer/CardContainer";
import Filters from "../../components/Filters/Filters";
import style from "./Home.module.css";
import { Carousel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';


interface ArtGalleryItem {
  id: number;
  imageURL: string;
  type: string;
  name: string;
  artistName: string;
  technique: string;
  price: number;
  bet: boolean;
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
      <div>
        <h1>Latest posts</h1>
        <Carousel interval={5000}>
          {items.slice(-4).map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 carousel-img"
                src={item.imageURL}
                alt={item.name}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <br />
      <CardContainer />
      <Filters />
    </div>
  );
};

export default Home;