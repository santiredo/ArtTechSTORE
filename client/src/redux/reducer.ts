export interface ArtGalleryItem {
    id: string;
    title:string;
    price: number;
    published:string;
    posted: boolean;
    type: string;
    technique: string;
    description: string;
    image: string;
    artistName: string;
    artistPhoto: string;
}

export interface Artist{
  id:number,
  name:string,
  mail:string,
  birthDate:string,
  location:string,
  image:string,
  products:ArtGalleryItem[]
}

export interface User{
  id:number,
  name:string,
  mail:string,
  birthDate:string,
  image:string
}

export interface Favourite{
  id:number,
  UserId: number,
  ProductId:number,
  fav: true
}

export type InitialState = {
    artist: Artist,
    artists: Artist[],
    searchBarArtists: Artist[],
    allPosts: ArtGalleryItem[],
    allPostsSelled: ArtGalleryItem[],
    artGallery: ArtGalleryItem[],
    typeFilter: ArtGalleryItem[],
    techniqueFilter: ArtGalleryItem[],
    allPostFilter: ArtGalleryItem[],
    user: User,
    users:User[],
    loadingHome: boolean,
    productDetail: ArtGalleryItem,
    favourites: Favourite[],
    detailedFavourites: ArtGalleryItem[],
    activeFilters: string[];
}


type Action<T> = {
    type:string;
    payload: T
}


const initialState: InitialState = {
    allPosts: [],
    allPostsSelled:[],
    artGallery:[],
    artist: {
      id:0,
      name:'',
      mail:'',
      birthDate:'',
      location:'',
      image:'',
      products: []
    },
    artists:[],
    searchBarArtists: [],
    user: {
      id:0,
      name:'string',
      mail:'string',
      birthDate:'string',
      image:'string'
    },
    users:[],
    typeFilter: [],
    techniqueFilter: [],
    allPostFilter: [],
    loadingHome: true,
    productDetail: {
      id: '',
      title:'',
      price: 0,
      published: '',
      posted: true,
      type: '',
      technique: '',
      description: '',
      image: '',
      artistName: '',
      artistPhoto: ''
    },
    favourites:[],
    detailedFavourites: [],
    activeFilters: [],

}


export default function rootReducer(state = initialState, action:Action<any>){
    switch(action.type){
        case 'ALL_PRODUCTS':
          {
            return{
              ...state,
              allPosts: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              artGallery: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              typeFilter: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              techniqueFilter: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              allPostFilter: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              loadingHome: false
            }
          }
        case 'ALL_PRODUCTS_SELLED':
          {
            return{
              ...state,
              allPostsSelled:action.payload.filter((post:ArtGalleryItem) => post.posted === false).reverse(),
            }
          }
        case 'RESET':
          return{
            ...state,
            artGallery: state.allPosts,
            typeFilter: state.allPosts,
            techniqueFilter: state.allPosts,
            paymentFilter: state.allPosts,
          }
        case 'GET_ALL_ARTISTS':
          
          return{
            ...state,
            artists: action.payload,
          }
        case 'DELETE_ARTIST':
            {const updatedArtists = state.artists.filter(artist => artist.id !== action.payload);
            return {
              ...state,
              artists: updatedArtists,
            };}
        case 'GET_ALL_USERS':
          
          return{
            ...state,
            users:action.payload,
          }
        case 'CREATE_POST':
              return {
                ...state,
                allPosts: [action.payload, ...state.allPosts],
              }

        case 'FETCH_PROFILE_PHOTO':
              return{
                ...state,
                artists: action.payload,
              }
        case 'SEARCH_ARTIST':
              return {
                ...state,
                searchBarArtists: action.payload,
              }
        case 'FILTER_TYPE':
          {let updatedTypeFilters = [...state.activeFilters];
          if (updatedTypeFilters.includes(action.payload)) {
            updatedTypeFilters = updatedTypeFilters.filter(filter => filter !== action.payload);
          } else {
            updatedTypeFilters.push(action.payload);
          }
          const filteredByType = state.allPosts.filter(post => updatedTypeFilters.includes(post.type));

          return {
            ...state,
            activeFilters: updatedTypeFilters,
            artGallery: filteredByType,
          }}
        case 'FILTER_TECHNIQUE':
          {let updatedTechniqueFilters = [...state.activeFilters];
          if (updatedTechniqueFilters.includes(action.payload)) {
            updatedTechniqueFilters = updatedTechniqueFilters.filter(filter => filter !== action.payload);
          } else {
            updatedTechniqueFilters.push(action.payload);
          }
          const filteredByTechnique = state.allPosts.filter(post => updatedTechniqueFilters.includes(post.technique));
        
          return {
            ...state,
            activeFilters: updatedTechniqueFilters,
            artGallery: filteredByTechnique,
          }}
        case 'FILTER_PRICE':
          {const sortedArtGallery = [...state.artGallery];
          if (action.payload === 'Higher') {
            sortedArtGallery.sort((a, b) => b.price - a.price);
          } else if (action.payload === 'Lower') {
            sortedArtGallery.sort((a, b) => a.price - b.price);
          }
          
          return {
            ...state,
            artGallery: sortedArtGallery,
            
          }}
          case 'GET_ARTIST':
                return {
                  ...state,
                  artist: action.payload
                }

          case 'SET_PRODUCT_INFO':
             return {
                ...state,
                productDetail: action.payload
                }
          case 'SET_FAV':
            return {
              ...state,
              favourites: action.payload
            }

          default:
              return {...state};
    }
}