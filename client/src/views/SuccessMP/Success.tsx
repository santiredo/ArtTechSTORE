import axios from "axios";
import { useEffect, useState } from "react"; // Importa useState
import { useNavigate, useParams } from "react-router-dom";
import RatingStars from "../../components/RatingStars/RatingStars";
import style from './Success.module.css'

const Success = () => {
  const { id, idProducto } = useParams();
  const idP = Number(idProducto);
  const navigate = useNavigate();
  const [artistId, setArtistId] = useState(0); // Agrega un estado para artistId

  const updateOrder = async () => {
    await axios.put(`/order/${id}`);
    await axios.delete(`/products/${idProducto}`)
  };

  const findIdArtist = async () => {
    try {
      const { data } = await axios.get(`/products/${idProducto}`);
      const artistId = data.ArtistId;
      setArtistId(artistId); // Actualiza el estado con el valor
    } catch (error) {
      console.error("Error al obtener el ID del artista:", error);
    }
  };

  useEffect(() => {
    updateOrder();
    findIdArtist(); // Llama a la función para obtener el ID del artista
  }, []);

  const handleSendRating = async () => {
    setTimeout(() => {
      navigate('/home')
    }, 2000);
  }

  return (
    <div className={style.container}>
      <h2>Tu compra fue realizada con éxito!</h2>
      <RatingStars idProducto={idP} idUser={artistId}/>
      <button onClick={handleSendRating}>Send Rating!</button>
    </div>
  );
};

export default Success;