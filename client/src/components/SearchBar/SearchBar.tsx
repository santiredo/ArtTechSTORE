import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { displayArtist, searchArtist } from '../../redux/action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { InitialState } from '../../redux/reducer';


export const SearchBar = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate()
  const [artistState, setArtistState] = useState('');
  const possibleArtists:any = useSelector<any>((state)=>state.artists);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setArtistState(event.target.value);
    dispatch(displayArtist(event.target.value))//*Show possible artist using the filter
  };

  const onSearch = (nombre: string) => {
    dispatch(searchArtist(nombre));//*dispatch the action
    navigate('/perfil');//*Go directly to the artist profile
  };

  const renderPossibleArtists = () => {
    if (possibleArtists.length === 0) {
      return null;
    }

    return (
      <ul>
        {possibleArtists.map((artist:any) => (
          <li key={artist.id}>{artist.name}</li>//*O capaz usando option en vez de li
        ))}
      </ul>
    );
  };

  return (
    <div>
      <input
        value={artistState}
        onChange={handleChange}
        type='search'
        placeholder="Search an Artist"
      />
      {renderPossibleArtists()}
      <button onClick={() => onSearch(artistState)}>Search</button>
    </div>
  );
};
