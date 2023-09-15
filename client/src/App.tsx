
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Detail from './views/Detail/Detail';
import Admin from './components/Admin/Admin';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import Navbar from './components/Nav/Nav';
import './App.css'
import ProfileView from './views/Profile/ProfileView';
import Favorites from './components/Favorites/Favorites';
import Wrong from './views/WrongURL/WrongURL';
import { useEffect, useState } from 'react';

export default function App() {

  const location = useLocation()
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    if(location.pathname==='*'){
      setNavbarVisible(false);
    }
  }, [navbarVisible]);
 
  
  if(location.pathname === '/admin'){
    return(
      <>
        <Routes>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </>
    )
  }
  if(location.pathname === '/'){
    return (
      <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </>
    )
  } else {
    return (
      <>
        {navbarVisible && <Navbar />}
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/profile/:id' element={<ProfileView/>}/>
          <Route path='/favourites' element={<Favorites/>}/>
          <Route path='/form/:id' element={<Form/>}/>
          <Route path='*' element={<Wrong/>}/>
        </Routes>
      </>
    )
  }
 
  
}
