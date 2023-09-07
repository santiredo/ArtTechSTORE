import { useState } from 'react';
import search from '../../assets/lupa.png'
import style from './SearchBar.module.css'
import { useSelector } from 'react-redux';
import { Artist, InitialState } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import { displayArtist } from '../../redux/action';
import { NavLink } from 'react-router-dom';


const SearchBar = () => {

  let artists = useSelector((state: InitialState) => state.artists)
  artists = artists.slice(0, 3)

  const [query, setQuery] = useState('')
  
  const dispatch = useDispatch<any>()
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)

    dispatch(displayArtist(query))
  }

  const [searchInput, setSearchInput] = useState(false)

  const showInput = () => {
    setSearchInput(!searchInput)
  }

  return (
    <div className={style.container}>
      {
        searchInput && (
          <>
            <div className={style.searchInput}>
              <input
                type='text'
                value={query}
                onChange={handleInputChange}
                placeholder="Search an Artist"
              />
              <p onClick={showInput}>⨉</p>
            </div>
            {(artists.length > 0) && (
              <div>
                {artists.map((artist:Artist) => (
                  <NavLink to={`/detail/:${artist.id}`} key={artist.id}>{artist.name}</NavLink>
                ))}
              </div>
            )}
          </>
          
        )
      }
      <img src={search} alt="" className={style.button} onClick={() => {showInput()}} />
    </div>
  );
};

export default SearchBar;