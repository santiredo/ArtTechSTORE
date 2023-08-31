import axios from 'axios'
import { Dispatch } from 'redux';

export type Action = {
    type: string;
    payload?: any;
  };

export function searchArtist(name:string) {
  return async function search(dispatch: Dispatch<Action>) {
    try {
      const response = await axios.get(`http://localhost/getPosts?name=${name}`);
        dispatch({
          type: 'SEARCH_ARTIST',
          payload: response.data,
        });
    } catch (error) {
      console.log(error);
      alert('No se encontro el artista con ese nombre');
    }
  }
}

export function prev() {
  return {
    type: 'PREV',
  };
}
export function next() {
  return {
    type: 'NEXT',
  };
}
export function resetPage() {
  return {
    type: 'RESET_PAGE',
  };
}