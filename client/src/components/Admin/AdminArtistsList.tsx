import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArtist, allArtist } from '../../redux/action';
import { InitialState } from '../../redux/reducer';
import { useLocation } from 'react-router-dom';
import style from './artistsList.module.css'
import { Artist } from '../../redux/reducer'
import user from '../../assets/usuario.png'

const AdminArtistsList: React.FC = () => {
    const artists = useSelector((state: InitialState) => state.artists);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        allArtist(dispatch)
    }, [])

    const isAdminPage = location.pathname === "/admin";

    const handleDeleteArtist = (artistId: string) => {
        return async (dispatch: Dispatch) => {
            try {
                await deleteArtist(dispatch, artistId);
            } catch (error) {

            }
        };
    };

    const DeleteArtistButton: React.FC<{ artistId: string }> = ({ artistId }) => {
        const handleClick = () => {
            handleDeleteArtist(artistId);
        };

        return (
            <button onClick={handleClick}>X</button>
        );
    };

    return (
        <div className={style.artistsListComponent}>
            <h1>Our artists</h1>
            <div className={style.list}>
                {artists.map((artist: Artist) => (
                    <div key={artist.id} className={style.artistWrapper}>
                        <div className={style.artistsDiv}>
                            <div className={style.imgDiv}>
                                <img src={artist.image ? artist.image : user} alt="" />
                            </div>
                            <h3>{artist.name}</h3>
                        </div>
                        {isAdminPage && (
                            <DeleteArtistButton artistId={artist.id.toString()} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminArtistsList;