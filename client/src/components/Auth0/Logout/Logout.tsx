import { useAuth0 } from "@auth0/auth0-react";
import style from './logout.module.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className={style.logoutButton} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;