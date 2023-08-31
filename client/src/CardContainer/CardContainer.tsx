import  { ReactNode } from 'react'
import { useSelector } from "react-redux";
import Paginate from '../Paginado/Paginado';
import { InitialState } from '../Redux/Reducer/reducer';
import Card from '../Card/Card';



const CardContainer=()=>{
    const artGallery = useSelector((state:InitialState)=>state.artGallery);
    const numPage:number=useSelector((state:InitialState)=>state.numPage);
    const cantPerPage = 20;
    const desde = (numPage - 1) * cantPerPage; 
    const hasta = numPage * cantPerPage;       

    const cantPage = Math.floor(artGallery.length / cantPerPage);


  // 0,1,2,3    4,5,6,7   8,9,10,11
  const viewArt = artGallery?.slice(desde, hasta);

  console.log("#####num page", numPage) 
    return(
        <div>
        <div>
            {viewArt?.map((artGallery):ReactNode=>{
                return <Card
                    id={artGallery.id}
                    imageURL={artGallery.imageURL}
                    type={artGallery.type}
                    name={artGallery.name}
                    artistName={artGallery.artistName}
                    cost={artGallery.cost}
                />
            })}
        </div>
        <div>

        </div>
        <Paginate numPage={numPage} cantPage={cantPage} />
    </div>
    )
}

export default CardContainer;