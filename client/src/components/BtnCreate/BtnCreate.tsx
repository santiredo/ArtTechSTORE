import { NavLink } from "react-router-dom";
import style from "./BtnCreate.module.css";

const BtnCreate = () => {
    return(
        <div className={style.container}>
            <NavLink to="/form">
                <button className={style.btn}>Add Product</button>
            </NavLink>
        </div>
    );
};

export default BtnCreate;