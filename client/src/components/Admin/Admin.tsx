import { useNavigate } from "react-router-dom";
import AdminBarChart from "./AdminBarChart";
import AdminDonutChart from "./AdminDonutChart";
import AdminList from "./AdminList";
import letter from "../../assets/letra2.png";
import AdminArtistsList from "./AdminArtistsList";

export default function Admin(){
    //!aca vienen los estados y los dispatch
    const navigation=useNavigate()
    
    
  
    function handleClick(){
    navigation('/home');
   }
    return(
    <>
    <div className="bg-neutral-400 space-y-10">
        <button className="h-25 w-20 bg-neutral-400 rounded-lg" onClick={handleClick}>{<img className="h-20 w-32" src={letter} alt="logo" />}</button>
        
        <AdminBarChart/>
        <AdminDonutChart/>
        <AdminList/>
        <AdminArtistsList/>
    </div>
    </>
    )
}