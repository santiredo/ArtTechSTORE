
import { useSelector } from 'react-redux'
import { Artist, InitialState } from '../../redux/reducer'
import style from './artistsList.module.css'
import { NavLink } from 'react-router-dom'


export default function ArtistsList() {

    const artists = useSelector((state: InitialState) => state.artists)

    return (
        <div className={style.artistsListComponent}>
            <h1>Our artists</h1>
            <div className={style.list}>
                {
                    artists.map((artist:Artist) => (
                        <NavLink to={`/profile/${artist.id}`} className={style.artistsDiv}>
                            <img src={artist.image} alt="" />
                            <h3>{artist.name}</h3>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}