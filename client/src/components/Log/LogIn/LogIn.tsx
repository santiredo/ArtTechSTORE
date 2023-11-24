
import { signInWithPopup } from "firebase/auth";
import { auth,  provider } from '../googleAuth'

import googleIcon from '../../../assets/googleIcon.png'
import style from './login.module.css'

interface SignUpProps {
    onClose: () => void;
}


export default function LogIn({onClose}: SignUpProps) {

    // MANEJAMOS EL LOGIN DE GOOGLE
    const googleLogin = async() => {

        try {
            const user = await signInWithPopup(auth, provider)

            // Aca usamos la data del usuario logeado para guardarla en el storage

        } catch (error) {
            alert('Some error has occured')
            console.log(error)
        }

    }

    //MANEJAMOS EL LOGIN MANUAL

    const handleLogin = () => {
        // ACA LLAMAMOS A LA BASE DE DATOS A VERIFICAR SI EL USUARIO ESTA CREADO
    }

    return (
        <div className={style.backgroundShadow}>
        <div className={style.logInContainer}>
            <h2 onClick={onClose}>✖</h2>
            <h1>Log In</h1>
            <form action="">
                <input type="text" name="" id="" placeholder='E-mail'/>
                <br />
                <input type="text" name="" id="" placeholder='Password'/>
                <br />
                <button onClick={handleLogin}>Enter</button>
                <br />
                <p>- Or -</p>
                <br />
                <button className={style.googleAuthButton} onClick={googleLogin}>
                    <img src={googleIcon} alt="" />
                    Log in with Google
                </button>
            </form>
        </div>
        </div>
    )
}