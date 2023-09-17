import { useAuth0 } from "@auth0/auth0-react";
import style from './login.module.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={style.loginDiv}>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  )
  
};

export default LoginButton;