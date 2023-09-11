import { useEffect, useState } from 'react';
import search from '../../assets/lupa.png'
import { useSelector } from 'react-redux';
import { Artist, InitialState } from '../../redux/reducer';
import { NavLink, useLocation } from 'react-router-dom';
import { searchArtist } from '../../redux/action';
import { useDispatch } from 'react-redux';
import user from '../../assets/usuario.png'
import style from './SearchBar.module.css'



const SearchBar = () => {

  
  // LLAMAMOS A LOS ARTISTAS QUE VAMOS A RENDERIZAR POR BUSQUEDA
  let artists = useSelector((state: InitialState) => state.searchBarArtists)
  artists = artists.slice(0, 3)
  const dispatch = useDispatch()


  // Estado para manejar el onChange del searchBar
  const [query, setQuery] = useState('')
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)

      console.log(event.target.value)
      if(event.target.value){
        searchArtist(event.target.value, dispatch)
      }
    }

    const location = useLocation()

    useEffect(()=>{
      setSearchInput(false)
    },[location.pathname])

  // RENDERIZADO DE LA SEARCHBAR
  const [searchInput, setSearchInput] = useState(false)

  const showInput = () => {
    setSearchInput(!searchInput)
    setQuery('')
  }

  const visibleInput = searchInput ? style.input :  style.hideInput;


  // LIMPIAR EL onChange

  const cleanOnChange = () => {
    setQuery('')
    searchArtist('', dispatch)
    
  }

  return (
    <div className={style.container}>
    <>
      <div className={visibleInput}>
        <input
          type='text'
          value={query}
          onChange={handleInputChange}
          placeholder="Search an Artist"
        />
        <p onClick={cleanOnChange}>⨉</p>
      </div>
      {(artists.length > 0 && searchInput) && (
        <div className={style.searchBarArtists}>
          {artists.map((artist:Artist) => (
            <NavLink to={`/profile/${artist.id}`} className={style.navlink} key={artist.id}><img src={artist.image ? artist.image : user} alt="" />{artist.name}</NavLink>
          ))}
        </div>
      )}
    </>
    <img src={search} alt="" className={style.button} onClick={() => {showInput()}} />
    </div>
  );
};

export default SearchBar;