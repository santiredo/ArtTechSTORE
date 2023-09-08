//import  { ReactNode } from 'react'
import { useSelector } from "react-redux";
import { InitialState } from '../../redux/reducer';
import Card from '../Card/Card';



const CardContainer=()=>{
    const artGallery = useSelector((state:InitialState)=>state.artGallery);
    const numPage:number=useSelector((state:InitialState)=>state.numPage);
    const cantPerPage = 20;
    const desde = (numPage - 1) * cantPerPage; 
    const hasta = numPage * cantPerPage;       


  const viewArt = artGallery?.slice(desde, hasta);

  console.log("#####num page", numPage) 
    return(
        <div>
        <div>
            {viewArt?.map((artGallery:any)=>{
                return <Card
                    id={artGallery.id}
                    imageURL={artGallery.imageURL}
                    type={artGallery.type}
                    name={artGallery.name}
                    artistName={artGallery.artistName}
                    price={artGallery.price}
                />
            })}
        </div>
        <div>

        </div>

    </div>
    )
}

export default CardContainer;