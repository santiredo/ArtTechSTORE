import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArtist, allArtist } from '../../redux/action';
import { InitialState } from '../../redux/reducer';
import { useLocation } from 'react-router-dom';
import style from './AdminArtistList.module.css'
import { Artist } from '../../redux/reducer'
import user from '../../assets/usuario.png'
import { NavLink } from 'react-router-dom';

const AdminArtistsList: React.FC = () => {
    const artists = useSelector((state: InitialState) => state.artists);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        allArtist(dispatch)
    }, [])

    const isAdminPage = location.pathname === "/admin";

    const DeleteArtistButton: React.FC<{ artistId: number }> = ({ artistId }) => {
        const handleClick = () => {
            deleteArtist(dispatch, artistId);
        };

        return (
            <button className="buttonWrapper" onClick={handleClick}> 🗑️ </button>
        );
    };

    return (
        <div className={style.artistsListComponent}>
            <h1>Our artists</h1>
            <div className={style.list}>
                {artists.map((artist: Artist) => (
                    <div key={artist.id} className={style.artistWrapper}>
                        <div className={style.artistContainer}>
                            <NavLink to={`/profile/${artist.id}`} className={style.artistLink}>
                                <div className={style.artistsDiv}>
                                    <div className={style.imgDiv}>
                                        <img src={artist.image ? artist.image : user} alt="" />
                                    </div>
                                    <h3>{artist.name}</h3>
                                </div>
                            </NavLink>
                            {isAdminPage && (
                                <div className={style.myButton}>
                                    <DeleteArtistButton artistId={artist.id} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminArtistsList;