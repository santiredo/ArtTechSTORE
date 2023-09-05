import style from "./Detail.module.css";
import Viaje from "../../images/Viaje.jpg";

const Detail = () => {
    
    return(
        <div className={style.all}>
            <h1>El Viaje</h1>
            <div className={style.container}>
                <div>
                    <img 
                    className={style.image}
                    src={Viaje} 
                    alt="cuadro" />
                </div>
                <div className={style.info}>
                    <h1>$400</h1>
                    <br />
                    <button>🤍 Add to Favorites</button>
                    <br />
                    <button>Add to cart</button>
                    <h4>Sold by: Henry</h4>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map(star => (
                        <span
                        key={star}
                    
                        >
                            ★
                        </span>
                        ))}
                    </div>
                    <br />
                    <h4>Measures: 50x50cm</h4>
                    <h4>Technique: Oil on canvas</h4>
                </div>
            </div>
            
            <br />

            <div className={style.text}>
                <div className={style.descrip}>
                    <h2>DESCRIPTION</h2>
                <h4>text...</h4>
                </div>
                <br />
                <hr />
                <div className={style.descrip}>
                    <h2>ABOUT THE SELLER</h2>
                    <h4>Name: HENRY</h4>
                    <h4>Locality: Argentina</h4>
                    <button>VIEW PROFILE</button>
                </div>
                <br />
                <hr />
                <div className={style.descrip}>
                    <h2>COMMENTS</h2>
                    <div className={style.form}>
                        <textarea placeholder="Your comment"></textarea>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        
                        <br />

                        <button>PUBLICATE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;