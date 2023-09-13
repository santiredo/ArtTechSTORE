import { useState } from "react";
import emptyStar from "../../assets/emptyStar.png";
import fullyStar from "../../assets/fullyStar.png";
import style from "./rating.module.css";

// Importa useDispatch desde react-redux
import { useDispatch } from "react-redux";
import { updateRating } from "../../redux/action";

interface RatingStarsProps {
  idProducto: number;
  idUser: number;
}

export default function RatingStars({ idProducto, idUser }: RatingStarsProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  let ratingValues = [1, 2, 3, 4, 5];

  const dispatch = useDispatch();
  
  const handleRating = (value: number) => {
    dispatch(updateRating(value, idProducto, idUser));
  };

  return (
    <div className={style.ratingStarsComponent}>
      {ratingValues.map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="rating"
            value={value}
            onClick={() => {
              setRating(value);
              handleRating(value);
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
  );
}