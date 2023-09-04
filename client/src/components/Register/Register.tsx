import googleIcon from "../../assets/googleIcon.png";
import faceIcon from "../../assets/facebookIcon.png";
import React, {useState} from "react";
import style from "./register.module.css";
import Modal from 'react-modal';
import validation from "./validation";

Modal.setAppElement('#root');

const RegisterModal = ({ isOpen, onRequestClose, onRegister }) => {
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })
  
    const[errors, setErrors] = useState({});

    const handleRegister = () => {
        // Handle registration logic here
        // You can use registrationData to get user input
        // Call onRegister when registration is successful
        onRegister();
        onRequestClose(); // Close the registration modal
    };

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        );
    };

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Login Modal"
        className="custom-modal"
        >
        <div className={style.container}>
            <form onSubmit={handleRegister}>
                <h1>REGISTER</h1>
                <div className={style.regisInputs}>
                    <input 
                    type="text" 
                    autoComplete="off" 
                    placeholder="Name"
                    onChange={handleChange}
                    />
                    <input 
                    type="text" 
                    autoComplete="off" 
                    placeholder="Username"
                    onChange={handleChange}
                    />
                    <input 
                    type="text" 
                    autoComplete="off" 
                    placeholder="Address"
                    onChange={handleChange}
                    />
                    <input 
                    type="text"
                    name="email" 
                    autoComplete="off" 
                    value={userData.email} 
                    onChange={handleChange} 
                    placeholder="Email"
                    />
                    <p className={style.error}>
                    {errors.email && errors.email}
                    </p>
                    <input 
                    type="text"
                    name="password" 
                    autoComplete="off" 
                    value={userData.password} 
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    <p className={style.error}>
                    {errors.password && errors.password}
                    </p>
                    <input 
                    type="text" 
                    autoComplete="off" 
                    placeholder="Repeat your password"
                    />
                    <select className={style.list}>
                    <option value="option" disabled selected hidden>
                        Choose an option
                    </option>
                    <option value="seller">Seller</option>
                    <option value="customer">Customer</option>
                    </select>
                    <hr />
                    <button type="submit">REGISTER</button>                
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
                
            </form>
        </div>
        </Modal>
    );
};

export default RegisterModal;