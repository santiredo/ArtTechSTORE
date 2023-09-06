
import { Route, Routes } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Detail from './components/Detail/Detail';
import './App.css';
import Display from './components/Display/Display';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/display' element={<Display/>}/>
      </Routes>
    </>
  )
}
