import { useState } from 'react';
import googleIcon from '../../assets/googleIcon.png'
import facebookIcon from '../../assets/facebookIcon.png'
import style from './login.module.css'


export default function Login({onRegister} : {onRegister: () => void})  {

    const [loginHandler, setLoginHandler] = useState(false)
    const [loginForm, setLoginForm] = useState({
        username:'',
        password:''
    })

    const showLogin = () => {
        loginHandler ? setLoginHandler(false) : setLoginHandler(true)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value
        })
    }



    return (

        <>
            <button className={style.loginButtonLanding} onClick={showLogin}>Log In</button>
            {loginHandler && (
                <div className={style.loginPage}>
                    <form className={style.loginComponent}>
                        <h1>DO YOU HAVE AN ACCOUNT?</h1>
                        <div className={style.loginInputs}>
                            <input
                                type="text"
                                name="username"
                                value={loginForm.username}
                                placeholder="Username"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.loginInputs}>
                            <input
                                type="password"
                                name="password"
                                value={loginForm.password}
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                        <button className={style.loginButton}>Log In</button>
                        <div className={style.fastLogin}>
                            <p>- Or -</p>
                            <button className={style.fastLoginButton}><img src={googleIcon} alt=""/> Continue with google</button>
                            <button className={style.fastLoginButton}><img src={facebookIcon} alt=""/> Continue with facebook</button>
                        </div>
                        <h4 onClick={() => { showLogin(); onRegister(); }}>Register Now</h4>
                    </form>
                    <button onClick={showLogin} className={style.quitLoginButton}></button>
                </div>
            )}
        </>        
    )
}

