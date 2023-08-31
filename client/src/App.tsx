import { useLocation, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from "./components/Register/Register";
import Detail from './components/Detail/Detail';
import Card from './Card/Card';

function App() {
  
    const location = useLocation()
    if (location.pathname === '/') {
        const cardProps = {
          id: '1',  // Agrega el id deseado aquí
          imageURL: 'arte.jpg',
          type: 'Type',
          name: 'Name',
          artistName: 'Artist Name',
          cost: '$'
        };
    {location.pathname === '/' ? undefined : <Detail />}
      return (
        <>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path="/" element={<Card {...cardProps} />} />
        </Routes>
        </>
      )
    
}

export default App
