import { useSelector} from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";


interface RootState {
    favorites: ArtGalleryItem[]; 
  }

export default function Favorites (){

    const favorites = useSelector((state:RootState)=> state.favorites);
   
    return(
        <div className={style.container}>
            {
            favorites?.map((artGallery) => (
            <Card
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