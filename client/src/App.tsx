
import { useLocation, Route, Routes } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Register from "./components/Register/Register";
import Detail from './components/Detail/Detail';
import Card from './Card/Card';
import './App.css';

export default function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </>
  )
};
