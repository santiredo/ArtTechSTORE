import axios from "axios";
import { useEffect, useState } from "react"; // Importa useState
import { useNavigate, useParams } from "react-router-dom";
import emptyStar from "../../assets/emptyStar.png";
import fullyStar from "../../assets/fullyStar.png";
import loadingGIF from '../../assets/loading.gif'
import style from "./Success.module.css";


const Success = () => {
  const { id, productId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true)

  const updateOrder = async () => {
    const response = await axios.put(`/order/${id}`);

    response.data.id && setLoading(false)
  };

  useEffect(() => {

    updateOrder();

  }, []);

  const handleSendRating = async () => {

    const response = await axios.put(`/products/${productId}`, rating)

    response.data.id && navigate('/home')

  }

  // LOGICA PARA EL RATING DE LOS PRODUCTOS

  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  let ratingValues = [1, 2, 3, 4, 5];

  return (
    <div className={style.successPage}>
      {
        loading ? (
          <>
            <img className={style.loading} src={loadingGIF} alt="" />
          </>
        ) : (
          <div className={style.ratingPopUp}>
              <h2>Your payment was made successfully</h2>
              <h4>You help us by rating the product</h4>
              <div className={style.ratingStarsComponent}>
                {ratingValues.map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="rating"
                      value={value}
                      onClick={() => {
                        setRating(value);
                      }}
                    />
                    {value <= (hover! || rating!) ? (
                      <img
                        className={style.ratingStar}
                        src={fullyStar}
                        onMouseEnter={() => setHover(value)}
                        onMouseLeave={() => setHover(null)}
                      />
                    ) : (
                      <img
                        className={style.ratingStar}
                        src={emptyStar}
                        onMouseEnter={() => setHover(value)}
                        onMouseLeave={() => setHover(null)}
                      />
                    )}
                  </label>
                ))}
              </div>
              <button disabled={rating === null} onClick={handleSendRating}>Finalize purchase</button>
          </div>
        )
      }
    </div>
  )
};

export default Success;