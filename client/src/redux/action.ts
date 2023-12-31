import axios from "axios";
import { Dispatch } from 'redux';

export type Action = {
  type: string;
  payload : any;
};

export const getAllProducts = async(dispatch:Dispatch<Action>) => {
  try {

    const response = await axios('/products')

    return dispatch({
      type: 'ALL_PRODUCTS',
      payload: response.data
    })
    
  } catch (error) {
    alert(error)
  }
}

export const getAllProductsAdmin = async(dispatch:Dispatch<Action>) => {
  try {

    const response = await axios('/admin/products')

    return dispatch({
      type: 'ALL_PRODUCTS_SELLED',
      payload: response.data
    })
    
  } catch (error) {
    alert(error)
  }
}


export async function searchArtist(name:string, dispatch: Dispatch<Action>) {
    try {
      const response = await axios.get(`/artist/artist/name?name=${name}`);


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
    const response = await axios.get(`/artist`);
    
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

export async function deleteArtist(dispatch: Dispatch<Action>, artistId: number) {
  try {
    await axios.delete(`/artist/${artistId}`);
    
    dispatch({
      type: 'DELETE_ARTIST',
      payload: artistId,
    });
  } catch (error) {
    alert('Hubo un error al eliminar el artista');
  }
}

export async function getAllUsers(dispatch:Dispatch<Action>){
  
  try {
    const response = await axios.get(`/user`);
    
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
      
      const response = await axios(`/artist/${id}`)

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
  technique: string,
  description: string,
  ArtistId: string | undefined
}, image:string, dispatch:Dispatch<Action>) => {


  try {

    console.log(form, image)

    const response = await axios.post(`/products`, {...form, image})


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
    const response = await axios(`/products/${id}`);

    dispatch({
      type: 'SET_PRODUCT_INFO',
      payload: response.data
    });
  } catch (error) {
    alert(error);
  }
}

export const getFavsById = async (userId:number, dispatch:Dispatch<Action>) => {


  try {
    const response = await axios(`/favourites/${userId}`)

    return dispatch ({
      type: 'SET_FAV',
      payload: response.data
    })
    
  } catch (error) {
    alert(error)
  }
}
