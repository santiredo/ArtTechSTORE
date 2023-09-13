import { useSelector} from "react-redux";
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
    favorites: ArtGallery[]; 
  }

export default function Favorites (){

    const favorites = useSelector((state:RootState)=> state.favorites);
   
    return(
        <div className={style.container}>
            <h1>My favorite products</h1>
            {
            favorites?.map((artGallery) => (
            <Card
            key={artGallery.id}
            id={artGallery.id}
            imageURL={artGallery.imageURL}
            type={artGallery.type}
            name={artGallery.name}
            artistName={artGallery.artistName}
            price={artGallery.price}
            />
            ))
            }
        </div>
    );
}