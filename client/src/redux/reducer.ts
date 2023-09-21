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
    onlyPrice: ArtGalleryItem[],
    onlyType: ArtGalleryItem[],
    onlyTechnique: ArtGalleryItem[],
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
    onlyPrice: [],
    onlyType: [],
    onlyTechnique:[],
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
            activeFilters: [], // Borra los filtros activos
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
          return {
            ...state,
            artGallery: state.onlyTechnique.filter((product:ArtGalleryItem) => product.type === action.payload),
            onlyType: state.onlyPrice.filter((product:ArtGalleryItem) => product.type === action.payload)
          }

        case 'FILTER_TECHNIQUE':
          return {
            ...state,
            artGallery: state.onlyType.filter((product:ArtGalleryItem) => product.technique === action.payload),
            onlyTechnique: state.onlyPrice.filter((product:ArtGalleryItem) => product.technique === action.payload)
          }

        case 'FILTER_PRICE':
          return{
            ...state,
            artGallery: [...state.artGallery].sort((a: ArtGalleryItem, b: ArtGalleryItem) => {
              if (action.payload === 'Higher') {
                return b.price - a.price;
              } else {
                return a.price - b.price;
              }
            }),
            onlyType: [...state.onlyType].sort((a: ArtGalleryItem, b: ArtGalleryItem) => {
              if (action.payload === 'Higher') {
                return b.price - a.price;
              } else {
                return a.price - b.price;
              }
            }),
            onlyTechnique: [...state.onlyTechnique].sort((a: ArtGalleryItem, b: ArtGalleryItem) => {
              if (action.payload === 'Higher') {
                return b.price - a.price;
              } else {
                return a.price - b.price;
              }
            }),
            onlyPrice: [...state.onlyPrice].sort((a: ArtGalleryItem, b: ArtGalleryItem) => {
              if (action.payload === 'Higher') {
                return b.price - a.price;
              } else {
                return a.price - b.price;
              }
            })
          }

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