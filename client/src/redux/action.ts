import axios from "axios";
import { Dispatch } from 'redux';
const URL='http://localhost:3001'

export type Action = {
  type: string;
  payload : any;
};

export const getAllProducts = async(dispatch:Dispatch<Action>) => {
  try {

    const response = await axios('http://localhost:3001/products')

    return dispatch({
      type: 'ALL_PRODUCTS',
      payload: response.data
    })
    
  } catch (error) {
    alert(error)
  }
}


export async function searchArtist(name:string) {
    try {
      const response = await axios.get(`${URL}/user?name=${name}`);
      return(
        {
        type: 'SEARCH_ARTIST',
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
      alert('No se encontro el artista con ese nombre');
    }
}




export async function allArtist(dispatch:Dispatch<Action>){
  
  try {
    const response = await axios.get(`${URL}/artist`);
    console.log("En la actionbackend",response);
    
    return dispatch(
      {
        type: 'GET_ALL_ARTISTS',
        payload: response.data,
      }
     )
  } catch (error) {
    console.log(error);
    alert('Hubo un error al obtener los artistas');
  }

}

export async function getAllUsers(dispatch:Dispatch<Action>){
  
  try {
    const response = await axios.get(`${URL}/user`);
    console.log("En la actionbackend",response);
    
    return dispatch(
      {
        type: 'GET_ALL_USERS',
        payload: response.data,
      }
     )
  } catch (error) {
    console.log(error);
    alert('Hubo un error al obtener los usuarios');
  }

}

export const getArtistById = async(id:string | undefined, dispatch:Dispatch<Action>) => {

    try {
      
      const response = await axios(`http://localhost:3001/artist/${id}`)
      console.log(response.data)

      return dispatch( {
        type: 'GET_ARTIST',
        payload: response.data
      })

    } catch (error) {
      
      alert(error);
    }
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

export function resetFilter(){
  return{
    type:'RESET',
  }
}

export const addFavorite = (artGallery: string) => {
  
  return (dispatch: Dispatch) => {
    try {
      const artwork = JSON.parse(artGallery);
      dispatch({
        type: 'ADD_FAVORITE',
        payload: artwork,
      });

    } catch (error) {
      const errorMessage = (error as Error).message;
      alert(errorMessage);
    }
  };
}

export const deleteFavorite = (id: string) => {

    return (dispatch: Dispatch) => {
      try {
        dispatch({
        type: 'DELETE_FAVORITE',
        payload: id,
      });
      } catch (error) {
        const errorMessage = (error as Error).message;
        alert(errorMessage);
      }
  };
};

