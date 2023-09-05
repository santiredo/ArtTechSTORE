
import {useState} from 'react'
import googleIcon from "../../assets/googleIcon.png";
import facebookIcon from "../../assets/facebookIcon.png";
import style from "./register.module.css";


export default function Register({onRegister} : {onRegister: () => void})  {

    const [registerForm, setRegisterForm] = useState({
        name:'',
        mail:'',
        password:'',
        birthDate:'',
        address:''
    })

    const [isArtist, setIsArtist] = useState(false)

    const handleCheckboxChange = () => {
        setIsArtist(!isArtist)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm({
            ...registerForm,
            [event.target.name]: event.target.value
        })
    }

    return (

        <div className={style.registerPage}>
            <form className={style.registerComponent}>
                <h1>CREATE YOUR ACOUNT</h1>
                <div className={style.registerInputs}>
                    <input type="text" name='name' placeholder="Username" onChange={handleChange}/>
                </div>
                <div className={style.registerInputs}>
                    <input type="text" name='mail' placeholder="example@gmail.com" onChange={handleChange}/>
                </div>
                <div className={style.registerInputs}>
                    <input type="pasword" name='password' placeholder="password" onChange={handleChange}/>
                </div>
                <div className={style.registerInputs}>
                    <input type="text" name='repeatedPassword' placeholder="repeat your password" onChange={handleChange}/>
                </div>
                <div className={style.registerInputs}>
                    <input type="text" name='birthDate' placeholder="YYYY-MM-DD" onChange={handleChange}/>
                </div>
                <div className={style.registerCheckbox}>
                    <label>Are you an artist?</label>
                    <input type="checkbox" checked={isArtist} onChange={handleCheckboxChange} />
                </div>
                {
                    isArtist && (
                        <div className={style.registerInputs}>
                            <input type="text" name='address' placeholder="Here goes your address" onChange={handleChange}/>
                        </div>
                    )
                }
                    <button className={style.registerButton}>REGISTER</button>
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

