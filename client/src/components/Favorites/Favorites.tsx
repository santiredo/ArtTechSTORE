import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";

interface ArtGallery {
  id: string;
  imageURL: string;
  type: string;
  name: string;
  artistName: string;
  price: number;
}

interface RootState {
  favorites: ArtGallery[] | null;
}

export default function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorites);

  // Definir elementos de prueba
  const itemsPrueba: ArtGallery[] = [
    {
      id: "1",
      imageURL:
        "https://bluerhino.art/wp-content/uploads/2021/02/MultiColor-Paint-Sculpture-14x17x33cm-Oil-Paint-Concrete-Steel-2020.jpg",
      type: "Pintura",
      name: "Obra 1",
      artistName: "Artista 1",
      price: 100,
    },
    {
      id: "2",
      imageURL:
        "https://images.squarespace-cdn.com/content/v1/56013c83e4b02285801be760/1584206778606-NOKL8W0JPW0ADUSS8KMX/Crave-Painting-beauty-in-art-van-gogh-Wheat-Field-with-Cypresses.jpg",
      type: "Escultura",
      name: "Obra 2",
      artistName: "Artista 2",
      price: 200,
    },
    {
      id: "3",
      imageURL:
        "https://collectionapi.metmuseum.org/api/collection/v1/iiif/489989/1005214/restricted",
      type: "Tipo ",
      name: "tercera obra",
      artistName: " tercer artista",
      price: 300,
    },
    {
      id: "4",
      imageURL:
        "https://images.saatchiart.com/saatchi/697156/art/3015085/2084978-HSC00001-7.jpg",
      type: "Tipo",
      name: " cuarta obra",
      artistName: "cuarto artista",
      price: 400,
    },
  ];

  return (
    <div className={style.container}>
      <h1>My favorite products</h1>
      <div className={style.itemsContainer}>
        {favorites != undefined
          ? favorites.map((artGallery) => (
              <Card
                key={artGallery.id}
                id={artGallery.id}
                image={artGallery.imageURL}
                type={artGallery.type}
                title={artGallery.name}
                artistName={artGallery.artistName}
                price={artGallery.price}
                published={""}
                posted={false}
                auction={false}
                technique={""}
                description={""}
                artistPhoto={""}
              />
            ))
          : itemsPrueba.map((artGallery) => (
              <div className={style.favoriteCard}>
                <img src={artGallery.imageURL} alt={artGallery.name} />
                <div className={style.data}>
                  <h4>Nombre: {artGallery.name}</h4>
                  <h4>Tipo: {artGallery.type}</h4>
                  <h4>Autor: {artGallery.artistName}</h4>
                  <h4>Precio: ${artGallery.price}</h4>
                  <button>Detalles</button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

// interface ArtGalleryItem {
//     id: string;
//     imageURL: string;
//     type: string;
//     name: string;
//     artistName: string;
//     technique: string;
//     price: number;
//     bet: boolean;
//     posted: boolean;
// }
