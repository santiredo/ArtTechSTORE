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


export async function searchArtist(name:string, dispatch: Dispatch<Action>) {
    try {
      const response = await axios.get(`${URL}/artist/artist/name?name=${name}`);

      console.log(name)
      console.log('Los artistas: ', response.data)

      return dispatch({
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
    
    return dispatch(
      {
        type: 'GET_ALL_ARTISTS',
        payload: response.data,
      }
     )
  } catch (error) {
    alert('Hubo un error al obtener los artistas');
  }

}

export async function getAllUsers(dispatch:Dispatch<Action>){
  
  try {
    const response = await axios.get(`${URL}/user`);
    
    return dispatch(
      {
        type: 'GET_ALL_USERS',
        payload: response.data,
      }
     )
  } catch (error) {
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

export const postCreation = async(form: {
  title:string,
  price: string,
  type: string,
  technique: string[],
  description: string,
  ArtistId: string | undefined
}, image:string, dispatch:Dispatch<Action>) => {


  try {

    const response = await axios.post(`http://localhost:3001/products`, {...form, image})


    return dispatch({
      type: 'CREATE_POST',
      payload: response.data
    })
    
  } catch (error) {
    alert(error)
  }
}

export const getProductById = async (id: string | undefined, dispatch:Dispatch<Action>) => {
 
  try {
    const response = await axios(`http://localhost:3001/products/${id}`);
    console.log(response.data)

    dispatch({
      type: 'SET_PRODUCT_INFO',
      payload: response.data
    });
  } catch (error) {
    alert(error);
  }
};
  
export const createArtist = async(registerForm: {
  name:string,
  mail: string | undefined,
  birthDate: string,
  location:string
}, dispatch:Dispatch<Action>) => {

  try {
    const response = await axios.post(`http://localhost:3001/artist`, registerForm)

    return dispatch({
      type: 'CREATE_ARTIST',
      payload: response.data
    })
    
  } catch (error) {
    
  }
}

export const getFavsById = async (userId:number, dispatch:Dispatch<Action>) => {
  try {

    const response = await axios.get('http://localhost:3001/favourites', { [userId]: userId })

    return dispatch({
      type: 'SET_FAVS',
      payload: response.data
    })
   
  } catch (error) {
    alert(error)
  }
}

export const setToFav = async(userId:number, productId: number, dispatch:Dispatch<Action>) => {
  return dispatch({
    type: 'IS_FAV',
    payload: {userId, productId}
  })
}