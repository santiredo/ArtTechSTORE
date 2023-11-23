
import { initializeApp } from "firebase/app";
import { sendEmailVerification, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from 'react'

import style from './signup.module.css'
import validation, { validateSubmit } from "./signUpValidation";


interface SignUpProps {
    onClose: () => void;
}

export default function SignUp({onClose}: SignUpProps) {

    //CONFIGURACION PARA AUTENTICACION CON FIREBASE

    const firebaseConfig = {
        apiKey: "AIzaSyC4zq8o7z0NbobyIqxx7hOEAODA2O9rOYU",
        authDomain: "arttechstore-7e85b.firebaseapp.com",
        projectId: "arttechstore-7e85b",
        storageBucket: "arttechstore-7e85b.appspot.com",
        messagingSenderId: "991803634669",
        appId: "1:991803634669:web:5667abb3016b765b392de4"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)


    // CREAMOS EL ESTADO PARA EL FORMULARIO DE REGISTRO
    const [registerForm, setRegisterForm] = useState({
        name:'',
        email: '',
        password:'',
        confirmedPassword:'',
    })

    //CREAMOS UN ESTADO PARA SETEAR EN VERDADERO O FALSO DEPENDIENDO SI ES ARTISTA O NO
    const [isArtist, setIsArtist] = useState(false)

    // MANEJAMOS EL CHECKBOX PARA LA VERIFICACION DEL ARTISTA O USUARIO NORMAL
    const handleCheckboxChange = () => {
        setIsArtist(!isArtist)
    }

    // MANEJADOR DE LOS CAMBIOS DE LOS INPUTS
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value
        

        setRegisterForm({
            ...registerForm,
            [event.target.name]: value
        })

    }

    //CREAMOS UN ESTADO PARA SETEAR LOS ERRORES DEL FORMULARIO
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    })

    //ACA INVOCAMOS UN HOOK PARA QUE SE ESTEN VALIDANDO AUTOMATICAMENTE LOS INPUTS CADA VEZ QUE EL USUARIO ESCRIBE

    useEffect(() => {
        setErrors(validation(registerForm))
    }, [registerForm])

    // EVENTO PARA EL SUBMIT
    const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if(validateSubmit(registerForm)){
            setErrors(validation(registerForm))
        } else{

            console.log(registerForm)
            
            /* isArtist ? postArtist() : postUser() */

            setRegisterForm({
                name:'',
                email: '',
                password:'',
                confirmedPassword:'',
            })
            
        }

        
    }

    return (

        <div className={style.backgroundShadow}>
        <div className={style.signUpContainer}>
            <h2 onClick={onClose}>✖</h2>
            <h1>Create your account</h1>
            <form>
                <input  className={style.signUpFields} type="text" name="name" id="" placeholder="Username" onChange={handleChange}/>
                <br />
                <input  className={style.signUpFields} type="text" name="email" id="" placeholder="E-mail" onChange={handleChange}/>
                <br />
                <input  className={style.signUpFields} type="password" name="password" id="" placeholder="Password" onChange={handleChange}/>
                <br />
                <input  className={style.signUpFields} type="password" name="confirmedPassword" id="" placeholder="Confirm password"  onChange={handleChange}/>
                <br />
                <div className={style.checkboxField}>
                    <label>Are you an artist?</label>
                    <input type="checkbox" checked={isArtist} onChange={handleCheckboxChange} />
                </div>
                <br />
                <button onClick={handleRegister}>Register</button>
                <br />
            </form>
        </div>
        </div>
    )
}