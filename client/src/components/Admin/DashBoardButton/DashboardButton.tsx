import { useNavigate } from 'react-router-dom'
import style from './DashboardButton.module.css'

export default function DashboardButton(){

    const navigate=useNavigate()
    function handleDash(){
        navigate('/admin');
    }
    return(
        <button className={style.DashButton} onClick={()=>handleDash()}>
            Go to Dashboard
        </button>
    )
}