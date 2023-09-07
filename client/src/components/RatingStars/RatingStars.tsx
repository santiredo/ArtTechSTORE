import { useState } from 'react'
import blackStar from '../../assets/blackStar.png'
import yellowStar from '../../assets/yellowStar.png'
import style from  './rating.module.css'

export default function RatingStars(){

    const [rating, setRating] = useState<number | null>(null)
    const [hover, setHover] = useState<number | null>(null)

    let ratingValues = [1,2,3,4,5]
    
    return (
        <div className={style.ratingStarsComponent}>
          {ratingValues.map((value) => (
            <div>
                <label>
                <input type="radio" name="rating" value={value} onClick={() => setRating(value)} />
                {
                    value <= (hover! || rating!)
                    ? (
                        <img className={style.ratingStar} src={yellowStar} onMouseEnter={() => setHover(value)} onMouseLeave={() => setHover(null)} />
                    ) : (
                        <img className={style.ratingStar} src={blackStar} onMouseEnter={() => setHover(value)} onMouseLeave={() => setHover(null)} />
                    )
                }
                </label>
            </div>
            
          ))}
        </div>
      );
}


{/*  */}