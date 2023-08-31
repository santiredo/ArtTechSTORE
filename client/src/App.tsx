
import { useLocation, Route, Routes } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import './App.css';


export default function App() {
  const location = useLocation();

  if(location.pathname === '/'){
    return (
      <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </>
    )
  }
};
