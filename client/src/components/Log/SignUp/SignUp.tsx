
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import {useState, useEffect} from 'react'
import validation, { validateSubmit } from "./signUpValidation";
import {auth, provider } from '../googleAuth'
import googleIcon from '../../../assets/googleIcon.png'

import style from './signup.module.css'

//CONFIGURACION PARA AUTENTICACION CON FIREBASE



interface SignUpProps {
    onClose: () => void;
}

export default function SignUp({onClose}: SignUpProps) {


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
        password: '',
        confirmedPassword: ''
    })

    //ACA INVOCAMOS UN HOOK PARA QUE SE ESTEN VALIDANDO AUTOMATICAMENTE LOS INPUTS CADA VEZ QUE EL USUARIO ESCRIBE

    useEffect(() => {
        setErrors(validation(registerForm))
    }, [registerForm])

    // EVENTO PARA EL SUBMIT
    const handleRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if(validateSubmit(registerForm)){
            setErrors(validation(registerForm))
        } else{

            try {

                const user = await createUserWithEmailAndPassword(auth, registerForm.email, registerForm.password)

                // Llamamos a la funcion que crea los usuarios en la base de datos
                
            } catch (error) {
                alert('Some error has occured')
                console.log(error)
            }

            setRegisterForm({
                name:'',
                email: '',
                password:'',
                confirmedPassword:'',
            })
            
        }        
    }
        // Aca manejamos el registro con google

        const googleRegistration = async() => {

            try {
                
                const user = await signInWithPopup(auth, provider)

                console.log(user)
            } catch (error) {
                alert('Some error has occured')
                console.log(error)
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
                <button className={style.registerButton} onClick={handleRegister}>Register</button>
                <br />
                <p>- Or -</p>
                <br />
                <button className={style.googleAuthButton} onClick={googleRegistration}>
                    <img src={googleIcon} alt="" />
                    Sign up with Google
                </button>
                
                <br />
            </form>
        </div>
        </div>
    )
}