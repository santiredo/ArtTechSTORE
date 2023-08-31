import { useLocation, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from "./components/Register/Register";
import Detail from './components/Detail/Detail';

function App() {
  
    const location = useLocation()

    {location.pathname === '/' ? undefined : <Detail />}
      return (
        <>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/detail' element={<Detail/>}/>
        </Routes>
        </>
      )
    
}

export default App
