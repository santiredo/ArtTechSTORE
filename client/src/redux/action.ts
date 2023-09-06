import axios from "axios";
import { Dispatch } from 'redux';
const URL='http://localhost:3001'

export type Action = {
  type: string;
  payload : any;
};

export function resetFilter(){
  return{
    type:'RESET',
  }
}
export function allProducts(){
  return async function allPaintings(dispatch: Dispatch<Action>){
    try {
      const response = await axios.get(`${URL}/products`);
        const actionProduct={
          type: 'GET_ALL_POST',
          payload: response.data,
        };
        dispatch(actionProduct);
    } catch (error) {
      console.log(error);
      alert('Hubo un error al obtener los post');
    }
  }
}

export function searchArtist(name:string) {
  return async function search(dispatch: Dispatch<Action>) {
    try {
      const response = await axios.get(`${URL}/user?name=${name}`);
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


export function displayArtist(name:string) {
  return async function display(dispatch: Dispatch<Action>) {
    try {
      const response = await axios.get(`${URL}/user?name=${name}`);
        dispatch({
          type: 'DISPLAY_ARTIST',
          payload: response.data,
        });
    } catch (error) {
      console.log(error);
    }
  }
}




//PHOTO ARTISTA

export function actionProfilePhoto(artistName: string) {
  return async function display(dispatch: Dispatch<Action>) {
    try {
      const response = await axios.get<string>(`https://localhost/profile/${artistName}/photo`);
      const photo = response.data;

      dispatch({
        type: 'FETCH_PROFILE_PHOTO',
        payload: photo,
      });
    } catch (error) {
      console.error("Error fetching profile photo:", error);
    }
  };
}

export function allArtist(){
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.get(`${URL}/artist`);
      
      const action = {
        type: 'GET_ALL_ARTISTS',
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
      alert('Hubo un error al obtener los artistas');
    }
    return Promise.resolve();
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
        const response = await axios.post(`${URL}/products`, {title, price, type, technique, image, description})
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


export const filterByType = (value:string) => {
  return {
    type: 'FILTER_TYPE',
    payload: value
  }
}

export const filterByTechnique = (value:string) => {
  return {
    type: 'FILTER_TECHNIQUE',
    payload: value
  }
}

export const filterByPayment = (value:string) => {
  return {
    type: 'FILTER_PAYMENT',
    payload: value
  }
}

export const filterByPrice = (value:string) => {
  return {
    type: 'FILTER_PRICE',
    payload: value
  }
}
export const addFavorite = (artGallery: string) => {
  const endpoint = "http://localhost:3001/favorites/";
  return async (dispatch:any) => {
    try {
      const response = await axios.post(endpoint, artGallery); 
      const { data } = response;
      return dispatch({
        type: 'ADD_FAVORITE',
        payload: data,
      });
    } catch (error:any) {
      alert(error.message);
    }
  };
};


export const deleteFavorite = (id: string) => {
  const endpoint = "http://localhost:3001/favorites/" + id;
    
    return async (dispatch:any) => {
      try {
        const response = await axios.delete(endpoint);
        const { data } = response;
        return dispatch({
          type: 'DELETE_FAVORITE',
          payload: data,
        });
      } catch (error:any) {
        alert(error.message);
      }
  };
};