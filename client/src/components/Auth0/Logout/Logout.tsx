import { useAuth0 } from "@auth0/auth0-react";
import style from './logout.module.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogOut = () => {
    const userDataJSON = localStorage.getItem('userData')

    let userData = userDataJSON ? JSON.parse(userDataJSON) : [];

    const deleteUserData = userData.pop()
    
    localStorage.setItem('userData', JSON.stringify(deleteUserData))
  }

  return (
    <button className={style.logoutButton} onClick={() => {logout({ logoutParams: { returnTo: window.location.origin } }), handleLogOut()} }>
      Log Out
    </button>
  );
};

export default LogoutButton;