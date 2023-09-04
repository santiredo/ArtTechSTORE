import React, { useState } from 'react';
import googleIcon from '../../assets/googleIcon.png'
import facebookIcon from '../../assets/facebookIcon.png'
import style from './login.module.css'
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app root element

const LoginModal = ({ isOpen, onRequestClose, openRegistration }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    // Handle login logic here, e.g., send a request to your authentication API
    // Close the modal after successful login
    onRequestClose();
    };
    
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Login Modal"
        className="custom-modal"
        >
        <div className={style.loginComponent}>
            <form onSubmit={handleLogin}>
                <h1>DO YOU HAVE AN ACCOUNT?</h1>
                <div className={style.loginInputs}>
                    <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div className={style.loginInputs}>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <button className={style.btn} type="submit">Log In</button>
                <br />
                <br />
                <li>
                <button 
                onClick={openRegistration}
                className={style.btn}
                >
                    Register Now
                </button>
                </li>
                <br />
                <div className={style.fastLogin}>
                    <p>- Or -</p>
                    <button className={style.fastLoginButton}><img src={googleIcon} alt=""/> Continue with google</button>
                    <button className={style.fastLoginButton}><img src={facebookIcon} alt=""/> Continue with facebook</button>
                </div>
                
            </form>
        </div>
        </Modal>
    )
}

export default LoginModal;