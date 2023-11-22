
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Detail from './views/Detail/Detail';
import Admin from './components/Admin/Admin';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import Navbar from './components/Nav/Nav';
import Success from './views/SuccessMP/Success';
import './App.css'
import ProfileView from './views/Profile/ProfileView';
import Favorites from './components/Favorites/Favorites';
import Wrong from './views/WrongURL/WrongURL';
import Hall from './views/Hall/Hall';

export default function App() {

  const location = useLocation()
  
  if(location.pathname === '/admin'){
    return(
      <>
        <Routes>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </>
    )
  }
  if(location.pathname === '/hall'){
    return(
      <>
        <Routes>
          <Route path='/hall' element={<Hall/>}/>
        </Routes>
      </>
    )
  }
  if(location.pathname.includes('success')){
    return (
      <>
        <Routes>
        <Route path='/success/:id/:productId' element={<Success />}/>
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
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/profile/:id' element={<ProfileView/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/form/:id' element={<Form/>}/>
          <Route path='*' element={<Wrong/>}/>
        </Routes>
      </>
    )
  }
 
  
}
