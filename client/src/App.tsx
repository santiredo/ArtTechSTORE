
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

export default function App() {


  const location = useLocation()

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
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/profile/:id' element={<ProfileView/>}/>
          <Route path='/favourites' element={<Favorites/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </>
    )
  }

  
}
