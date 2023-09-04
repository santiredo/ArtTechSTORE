import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { displayArtist, searchArtist } from '../../redux/action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './SearchBar.module.css'


const SearchBar = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate()
  const [artistState, setArtistState] = useState('');
  let possibleArtists:any = useSelector<any>((state)=>state.artists);
  const hasta:number=8


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
    if (possibleArtists.length <= 0) {
      return null;
    }
    if (possibleArtists.length<=hasta) {
      possibleArtists=possibleArtists.slice(0,possibleArtists.length);
    } else {
      possibleArtists=possibleArtists.slice(0,hasta);
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
    <div className={style.container}>
      <input
        value={artistState}
        onChange={handleChange}
        type='search'
        placeholder="Search an Artist"
      />
      {renderPossibleArtists()}
      <button className={style.button} onClick={() => onSearch(artistState)}>Search</button>
    </div>
  );
};

export default SearchBar;