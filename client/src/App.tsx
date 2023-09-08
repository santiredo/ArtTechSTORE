
import { Route, Routes } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import './App.css';
import Display from './components/Display/Display';
import Detail from './views/Detail/Detail';
import Adminnuevo from './components/Admin/Admin+';
import Admin from './components/Admin/Admin';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/adminnuevo' element={<Adminnuevo/>}/>
      </Routes>
    </>
  )
}
