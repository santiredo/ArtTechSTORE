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

const llamadoAlBackend = async( creation: {
  title: string;
  price: string;
  type: string;
  technique: string[];
  image: string;
  description: string;
}) => {
  try {
      const {title, price, type, technique, image, description} = creation

      const response = await axios.post('hhtp://localhost:3001/createPost', {title, price, type, technique, image, description})
      const dbCreation = response.data

      return dbCreation
  } catch (error) {
      error instanceof Error && alert(`Error: ${error.message}`);

  }
}

export const postCreation = (creation: {
  title: string;
  price:string;
  type: string;
  technique: string[];
  image: string;
  description: string;
}) => {
  const dbCreation = llamadoAlBackend(creation)

  return {
      type: 'CREATE_POST',
      payload: dbCreation
  }
}