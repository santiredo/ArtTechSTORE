import googleIcon from "../../assets/googleIcon.png";
import faceIcon from "../../assets/facebookIcon.png";
import React, {useState} from "react";
import style from "./register.module.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const RegisterModal = ({ isOpen, onRequestClose, onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
        // Handle registration logic here
        // You can use registrationData to get user input
        // Call onRegister when registration is successful
        onRegister();
        onRequestClose(); // Close the registration modal
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
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Address"/>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                    <input type="text" placeholder="Repeat your password"/>
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