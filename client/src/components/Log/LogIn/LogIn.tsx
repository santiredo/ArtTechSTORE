


import style from './login.module.css'

interface SignUpProps {
    onClose: () => void;
}


export default function LogIn({onClose}: SignUpProps) {

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
                <button>Enter</button>
                <br />
            </form>
        </div>
        </div>
    )
}