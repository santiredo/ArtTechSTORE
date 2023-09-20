import axios from "axios"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Success = () => {

  const {id} = useParams()

  const navigate = useNavigate()

    const updateOrder = async () => {
        await axios.put(`/order/${id}`)
    }

    useEffect(() => {
        updateOrder()
        setTimeout(() => {navigate('/home')}, 3000);
    }, []);

  return (
    <div>
        <h2>Tu compra fue realizada con exito!</h2>
    </div>
  )
}

export default Success