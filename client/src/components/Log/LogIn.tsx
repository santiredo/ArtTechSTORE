
import React from 'react';
import googleIcon from '../../assets/googleIcon.png'
import facebookIcon from '../../assets/facebookIcon.png'
import style from './login.module.css'

interface LogInProps {
    onRegister: () => void;
}

export const LogIn: React.FC<LogInProps> = ({onRegister}) => {

    return (
        <div className={style.loginComponent}>
            <h1>DO YOU HAVE AN ACCOUNT?</h1>
            <div className={style.loginInputs}>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>Log In</button>
            </div>
            <div className={style.fastLogin}>
                <p>- Or -</p>
                <button className={style.fastLoginButton}><img src={googleIcon} alt=""/> Continue with google</button>
                <button className={style.fastLoginButton}><img src={facebookIcon} alt=""/> Continue with facebook</button>
            </div>
            <h4 onClick={onRegister}>Register now</h4>
        </div>
    )
}

