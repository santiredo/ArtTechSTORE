import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchArtist } from '../Redux/Actions/action';




export const SearchBar = () => {
  const dispatch = useDispatch();
  const [artist, setArtist] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setArtist(event.target.value);
  };

  const onSearch = (nombre: string) => {
    dispatch(searchArtist(nombre));
  };

  return (
    <div>
      <input
        value={artist}
        onChange={handleChange}
        type='search'
        placeholder="Busque un artista"
      />
      <button onClick={() => onSearch(artist)}>Buscar</button>
    </div>
  );
};
