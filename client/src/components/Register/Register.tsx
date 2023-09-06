
import {useState, useEffect} from 'react'
import googleIcon from "../../assets/googleIcon.png";
import facebookIcon from "../../assets/facebookIcon.png";
import style from "./register.module.css";
import validation, { validateSubmit } from "./validation";


export default function Register({onRegister} : {onRegister: () => void})  {

    const [registerForm, setRegisterForm] = useState({
        name:'',
        mail:'',
        password:'',
        repeatedPassword:'',
        birthDate:'',
        address:''
    })

    const [isArtist, setIsArtist] = useState(false)

    const handleCheckboxChange = () => {
        setIsArtist(!isArtist)
    }
    
    const[errors, setErrors] = useState({
        name:'',
        mail:'',
        password:'',
        repeatedPassword:'',
        birthDate:''
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

        console.log(value)

        setRegisterForm({
            ...registerForm,
            [event.target.name]: value
        })

        console.log(registerForm)
    }

    const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if(validateSubmit(registerForm)){
            setErrors(validation(registerForm))
            alert('You must fill the inputs correctly')
        } else{
            // ACA VENDRIA EL DISPATCH

            setRegisterForm({
                name:'',
                mail:'',
                password:'',
                repeatedPassword:'',
                birthDate:'',
                address:''
            })
            alert('Registered successfully')
        }

        
    }

    return (
      
        <div className={style.registerPage}>
            <form className={style.registerComponent}>
                <h1>CREATE YOUR ACOUNT</h1>
                <div className={style.registerInputs}>
                    {<span>{errors.name}</span>}
                    <input type="text" name='name' value={registerForm.name} placeholder="Username" onChange={handleChange}/>
                </div>
                <div className={style.registerInputs}>
                    {<span>{errors.mail}</span>}
                    <input type="text" name='mail' value={registerForm.mail} placeholder="example@gmail.com" onChange={handleChange}/>
                </div>
                <div className={style.registerInputs}>
                    {<span>{errors.password}</span>}
                    <input type="pasword" name='password' value={registerForm.password} placeholder="password" onChange={handleChange}/>
                </div>
                <div className={style.registerInputs}>
                    {<span>{errors.repeatedPassword}</span>}
                    <input type="text" name='repeatedPassword' value={registerForm.repeatedPassword} placeholder="repeat your password" onChange={handleChange}/>
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
                        <div className={style.registerInputs}>
                            <input type="text" name='address' value={registerForm.address} placeholder="Here goes your address" onChange={handleChange}/>
                        </div>
                    )
                }
                <button onClick={handleRegister} className={style.registerButton}>Register</button>
                <div className={style.fastRegister}>
                    <p>- Or -</p>
                    <button className={style.fastRegisterButton}><img src={googleIcon} alt=""/> Continue with google</button>
                    <button className={style.fastRegisterButton}><img src={facebookIcon} alt=""/> Continue with facebook</button>
                </div>
            </form>
            <button onClick={onRegister} className={style.quitRegisterButton}></button>
        </div>
    );
};
