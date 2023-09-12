
import {useState, useEffect} from 'react'
import validation, { validateSubmit } from "./validation";
import { useAuth0 } from '@auth0/auth0-react';
import style from "./register.module.css";
import { useDispatch } from 'react-redux';
import { createArtist } from '../../redux/action';
import axios from 'axios';


interface RegisterProps {
    onRegister: (userExistence: boolean) => void;
}

export default function Register({onRegister}: RegisterProps)  {

    const {user} = useAuth0()

    const [registerForm, setRegisterForm] = useState({
        name:'',
        mail: user?.email?.toString(),
        birthDate:'',
        location:'',
        image: ''
    })

    const [isArtist, setIsArtist] = useState(false)

    const handleCheckboxChange = () => {
        setIsArtist(!isArtist)
    }
    
    const[errors, setErrors] = useState({
        name:'',
        birthDate:'',
        image:''
    });

    useEffect(() => {
        setErrors(validation(registerForm))
    }, [registerForm])


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

    const dispatch = useDispatch()

    const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if(validateSubmit(registerForm)){
            setErrors(validation(registerForm))
            alert('You must fill the inputs correctly')
        } else{

            console.log(registerForm)
            
            isArtist ? createArtist(registerForm, dispatch) : ( async() => {
                console.log(registerForm)
                const response = await axios.post(`http://localhost:3001/user`, registerForm)
                console.log(response)
            })

            setRegisterForm({
                name:'',
                mail: '',
                birthDate:'',
                location:'',
                image: ''
            })
            
            onRegister(true)
            alert('Registered successfully')
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
};
