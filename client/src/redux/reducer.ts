export interface ArtGalleryItem {
    id: string;
    title:string;
    price: number;
    published:string;
    posted: boolean;
    auction: boolean;
    type: string;
    technique: string;
    description: string;
    image: string;
    artistName: string
    artistPhoto: string
}

export interface Artist{
  id:number,
  name:string,
  mail:string,
  birthDate:string,
  location:string,
  image:string
}

export interface User{
  id:number,
  name:string,
  mail:string,
  birthDate:string,
  image:string
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
    productDetail: ArtGalleryItem
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
      name:'string',
      mail:'string',
      birthDate:'string',
      location:'string',
      image:'string'
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
      auction: false,
      type: '',
      technique: '',
      description: '',
      image: '',
      artistName: '',
      artistPhoto: ''
    }
}


export default function rootReducer(state = initialState, action:Action<any>){
    switch(action.type){
        case 'ALL_PRODUCTS':
          {
            return{
              ...state,
              allPostsSelled:action.payload.filter((post:ArtGalleryItem) => post.posted === false).reverse(),
              allPosts: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              artGallery: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              typeFilter: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              techniqueFilter: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              allPostFilter: action.payload.filter((post:ArtGalleryItem) => post.posted === true).reverse(),
              loadingHome: false
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
                {let filterType=state.typeFilter.filter((post: ArtGalleryItem) => {
                  return post.type === action.payload
                })
                const filterTechnique=state.typeFilter.filter((post: ArtGalleryItem) => {
                  return post.type === action.payload
                })
                if(filterType.length===0){
                  filterType=state.allPosts.filter((post: ArtGalleryItem) => {
                    return post.type === action.payload
                  })
                }
              return {
                ...state,
                artGallery: filterType,
                techniqueFilter:filterTechnique ,
              }}
        case 'FILTER_TECHNIQUE':
              {let filterTechnique=state.techniqueFilter.filter((post: ArtGalleryItem) => {
                return post.technique === action.payload
              })
              const filterType=state.techniqueFilter.filter((post: ArtGalleryItem) => {
                return post.technique === action.payload
              })
              if(filterTechnique.length===0){
                filterTechnique=state.allPosts.filter((post: ArtGalleryItem) => {
                  return post.technique === action.payload
                })
              }
              return {
                ...state,
                artGallery:filterTechnique ,
                typeFilter:filterType,
              }}
        case 'FILTER_PRICE':
              return {
                ...state,
                artGallery: [...state.artGallery].sort((a: ArtGalleryItem, b: ArtGalleryItem) => {
                  if (action.payload === 'Higher') return b.price - a.price
                  if (action.payload === 'Lower') return a.price - b.price
                  return 0
                }),
                typeFilter: [...state.typeFilter].sort((a: ArtGalleryItem, b: ArtGalleryItem) => {
                  if (action.payload === 'Higher') return b.price - a.price
                  if (action.payload === 'Lower') return a.price - b.price
                  return 0
                }),
                techniqueFilter: [...state.techniqueFilter].sort((a: ArtGalleryItem, b: ArtGalleryItem) => {
                  if (action.payload === 'Higher') return b.price - a.price
                  if (action.payload === 'Lower') return a.price - b.price
                  return 0
                }),
              }

          case 'ADD_FAVORITE':
                
                if (!state.artGallery.some((artGallery) => artGallery.id === action.payload.id)) {
                  return {
                    ...state,
                    artGallery: [...state.artGallery, action.payload],
                  };
                }
                return state; 
          
          case 'DELETE_FAVORITE':
                return {
                  ...state,
                  artGallery: state.artGallery.filter((artGallery) => artGallery.id !== action.payload),
                };
          case 'GET_ARTIST':
                return {
                  ...state,
                  artist: action.payload
                }
          case 'CREATE_ARTIST':
            return {
              ...state,
              artists: [...state.artists, action.payload]
            }
              
        
          default:
              return {...state};
    }
}