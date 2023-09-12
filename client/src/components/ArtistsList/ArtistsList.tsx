
import { useSelector } from 'react-redux'
import { Artist, InitialState } from '../../redux/reducer'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { allArtist } from '../../redux/action'
import { useDispatch } from 'react-redux'
import user from '../../assets/usuario.png'
import style from './artistsList.module.css'



export default function ArtistsList() {

    const artists = useSelector((state: InitialState) => state.artists)
    const dispatch = useDispatch()

    useEffect(() => {
        allArtist(dispatch)
    },[])

    return (
        <div className={style.artistsListComponent}>
            <h1>Our artists</h1>
            <div className={style.list}>
                {
                    artists.map((artist:Artist) => (
                        <NavLink key={artist.id} to={`/profile/${artist.id}`} className={style.artistsDiv}>
                            <img src={artist.image ? artist.image : user} alt="" />
                            <h3>{artist.name}</h3>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}