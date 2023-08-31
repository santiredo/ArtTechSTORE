import { useLocation, Route, Routes } from 'react-router-dom';
import Card from './Card/Card';
import './App.css';

const App: React.FC = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    const cardProps = {
      id: '1',  // Agrega el id deseado aquí
      imageURL: 'arte.jpg',
      type: 'Type',
      name: 'Name',
      artistName: 'Artist Name',
      cost: '$'
    };

    return (
      <>
        <Routes>
          <Route path="/" element={<Card {...cardProps} />} />
        </Routes>
      </>
    );
  }
};

export default App;
