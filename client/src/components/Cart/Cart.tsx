import { useSelector} from "react-redux";
import Card from "../Card/Card";
import style from "./Cart.module.css";

interface ArtGallery {
    id: string;
    imageURL: string;
    type: string;
    name: string;
    artistName: string;
    price: number;
  }

interface RootState {
    cart: ArtGallery[]; 
  }

export default function Cart (){

    const cart = useSelector((state:RootState)=> state.cart);
   
    return(
        <div className={style.container}>
            <h1>My cart</h1>
            {
            cart?.map((artGallery) => (
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