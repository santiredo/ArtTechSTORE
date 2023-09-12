import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import AdminBarChart from "./AdminBarChart";
import AdminDonutChart from "./AdminDonutChart";
import AdminList from "./AdminList";
import letter from "../../assets/letra2.png";
import axios from 'axios';
const URL='http://localhost:3001';

export default function Admin(){
    //!aca vienen los estados y los dispatch
    const navigation=useNavigate()
    async function  verifyFirstUser(mail:string) {
        try {
          const {data}=await axios.get(`${URL}/user/mail?mail=${mail}`);
          return data;
        } catch (error) {
          console.log("Error message", error);
        }
      }

  // Resolve the Promise.
  useEffect(()=>{
    verifyFirstUser("Felasdsix@mail.com").then((data)=>{return data});
  },[])
    
  console.log("Esto es el data resuelto",verifyFirstUser("Felix@mail.com").then((data)=>{return data}));
  
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
    </div>
    </>
    )
}