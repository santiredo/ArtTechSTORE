import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { allArtist, allProducts } from "../../redux/action";
import { Action } from "../../redux/action";
import { Dispatch } from 'redux';
import Filters from "../Filters/Filters";


export default function Display(){
    const dispatch:Dispatch<Action> = useDispatch();

    
    useEffect(()=>{
        dispatch(allArtist() as any);
        dispatch(allProducts() as any);
    },[]);
    
    const allmy=useSelector((state:any)=>state.artists)
    const myProducts=useSelector((state:any)=>state.artGallery);
    console.log(allmy);
    
    return(
        <div>
        <div>
            <Filters></Filters>
        </div>
        <div>
            {myProducts?.map((all:any)=>{
                
                return (<div key={all.id}>
                    <h3>{all.id}</h3>
                    <h3>{all.title}</h3>
                    <h3>{all.price}</h3>
                    <h3>{all.published}</h3>
                    <h3>{all.type}</h3>
                    <h3>{all.technique}</h3>
                    <h3>{all.description}</h3>
                </div> )
                })}
        </div>
        </div>
    )
}