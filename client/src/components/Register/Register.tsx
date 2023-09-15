import swal from 'sweetalert';
import {useState, useEffect} from 'react'
import validation, { validateSubmit } from "./validation";
import { useAuth0 } from '@auth0/auth0-react';
import style from "./register.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register({onRegister}: {onRegister: (userExistence: boolean) => void})  {

    const {user} = useAuth0()

    const [registerForm, setRegisterForm] = useState({
        name:'',
        mail: user?.email,
        birthDate:'',
        location:'',
        image: ''
    })

    // ACA LOS HANDLECHANGE

    const [isArtist, setIsArtist] = useState(false)
    const handleCheckboxChange = () => {
        setIsArtist(!isArtist)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value

        console.log(event.target.name)
        if(event.target.name === 'birthDate'){
            value = value.replace(/-/g, '')

            if(value.length > 4){
                value = value.slice(0, 4)+'-'+value.slice(4)
                console.log(value)
            }
            if(value.length > 7){
                value = value.slice(0, 7)+'-'+value.slice(7)
                console.log(value)
            }
        }

        setRegisterForm({
            ...registerForm,
            [event.target.name]: value
        })

    }
    
    const[errors, setErrors] = useState({
        name:'',
        birthDate:'',
        image:''
    });

    useEffect(() => {
        setErrors(validation(registerForm))
    }, [registerForm])



    // ACA EL SUBMIT DE REGISTRO

    const navigate = useNavigate()

    const postUser = async() => {
        const response = await axios.post(`http://localhost:3001/user`, registerForm)

        localStorage.setItem('userData', JSON.stringify(response.data));
    }

    const postArtist = async() => {
        const response = await axios.post(`http://localhost:3001/artist`, registerForm)

        localStorage.setItem('userData', JSON.stringify(response.data));
    }

    const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if(validateSubmit(registerForm)){
            setErrors(validation(registerForm))
            swal('You must fill the inputs correctly');
        } else{

            console.log(registerForm)
            
            isArtist ? postArtist() : postUser()

            setRegisterForm({
                name:'',
                mail: '',
                birthDate:'',
                location:'',
                image: ''
            })
            
            onRegister(true)
            swal('Registered successfully');
            navigate('/home')
        }

        
    }

    return (
      
        <div className={style.registerPage}>
            <form className={style.registerComponent}>
                <h1>CREATE YOUR ACCOUNT</h1>
                <div className={style.registerInputs}>
                    {<span>{errors.name}</span>}
                    <input type="text" name='name' value={registerForm.name} placeholder="Username" onChange={handleChange}/>
                </div>
                <div className={style.registerInputs}>
                    <input readOnly type="text" name='mail' value={registerForm.mail} placeholder="example@gmail.com" onChange={handleChange}/>
                </div>
                <div className={style.registerInputs}>
                    {<span>{errors.birthDate}</span>}
                    <input type="text" name='birthDate' maxLength={10} value={registerForm.birthDate} placeholder="YYYY-MM-DD" onChange={handleChange}/>
                </div>
                <div className={style.registerCheckbox}>
                    <label>Are you an artist?</label>
                    <input type="checkbox" checked={isArtist} onChange={handleCheckboxChange} />
                </div>
                {
                    isArtist && (
                        <>
                        <div className={style.registerInputs}>
                            <input type="text" name='location' value={registerForm.location} placeholder="Here goes your location" onChange={handleChange}/>
                        </div>
                        <div className={style.registerInputs}>
                            <input type="text" name='image' value={registerForm.image} placeholder="Profile photo" onChange={handleChange}/>
                        </div>
                        </>
                        
                    )
                }
                <button onClick={handleRegister} className={style.registerButton}>Register</button>
            </form>
            <button className={style.quitRegisterButton}></button>
        </div>
    );
}
