import googleIcon from "../../images/google.png";
import faceIcon from "../../images/facebook.png";
import React from "react";
import style from "./register.module.css";

const Register = () => {
    return(
        <>
        <div className={style.container}>
            <div className={style.registerComponent}>
            <h1>REGISTER</h1>
            
            <div
            className={style.regisInputs}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Address"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Password"/>
                <input type="text" placeholder="Repeat your password"/>
                <select className={style.list}>
                <option value="option" disabled selected hidden>
                    Choose an option
                </option>
                    <option value="seller">Seller</option>
                    <option value="customer">Customer</option>
                </select>
                <hr />
                <button>CREATE NOW</button>                
            </div>

            <div className={style.fastLogin}>
                <p>Or Register with: </p>

                <button className={style.fastLoginButton}>
                    <img src={googleIcon} alt="" />
                    GOOGLE</button>
                <button className={style.fastLoginButton}>
                    <img src={faceIcon} alt="" />
                    FACEBOOK</button>
            </div>

        </div>
        </div>
        </>
        
        
    );
};

export default Register;