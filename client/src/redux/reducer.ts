interface ArtGalleryItem {
    id: string;
    imageURL: string;
    type: string;
    name: string;
    artistName: string;
    technique: string;
    price: number;
    bet: boolean;
    posted: boolean;
}


interface Artist{
  id:number,
  name:string,
}


export type InitialState<T> = {
    artist: T,
    artists: Artist[],
    allPosts: ArtGalleryItem[],
    numPage: number,
    artGallery: ArtGalleryItem[],
    typeFilter: ArtGalleryItem[],
    techniqueFilter: ArtGalleryItem[],
    paymentFilter: ArtGalleryItem[],
    allPostFilter: ArtGalleryItem[],
}


type Action<T> = {
    type:string;
    payload: T
}


const initialState: InitialState<any> = {
    allPosts: [],
    artGallery:[],
    artist:{},
    artists:[],
    numPage:1,
    typeFilter: [],
    techniqueFilter: [],
    paymentFilter: [],
    allPostFilter: [],
}


export default function rootReducer(state = initialState, action:Action<any>){
    switch(action.type){
        case 'GET_ALL_POST':
          {
            const Products= action.payload
            const allProducts=Products.filter((post:ArtGalleryItem) => post.posted === true)
            return{
              ...state,
              allPosts: allProducts,
              artGallery:allProducts,
              typeFilter:allProducts,
              techniqueFilter:allProducts,
              paymentFilter:allProducts,
              allPostFilter:allProducts,
            }
          }
        case 'RESET':
          return{
            ...state,
            artGallery:state.allPosts,
            typeFilter:state.allPosts,
            techniqueFilter:state.allPosts,
            paymentFilter:state.allPosts,
          }
        case 'GET_ALL_ARTISTS':
          return{
            ...state,
            artists: action.payload,
          }
        case 'CREATE_POST':
              return {
                ...state,
                allPosts: [action.payload, ...state.allPosts],
              }
        case 'DISPLAY_ARTIST':
              return{
                ...state,
                artists: action.payload,
              }
        case 'FETCH_PROFILE_PHOTO':
              return{
                ...state,
                artists: action.payload,
              }
        case 'SEARCH_ARTIST':
              return {
                ...state,
                artist: action.payload,
              }
        case 'RESET_PAGE':
              return {
                ...state,
                numPage: 1,
              };
        case 'PREV':
              return {
                ...state,
                numPage: state.numPage - 1,
              };
        case 'NEXT':
              return {
                ...state,
                numPage: state.numPage + 1,
              };
        case 'FILTER_TYPE':
              return {
                ...state,
                artGallery: state.typeFilter.filter((post: ArtGalleryItem) => {
                  return post.type === action.payload
                }),
                techniqueFilter: state.typeFilter.filter((post: ArtGalleryItem) => {
                  return post.type === action.payload
                }),
                paymentFilter: state.typeFilter.filter((post: ArtGalleryItem) => {
                  return post.type === action.payload
                }),
              }
        case 'FILTER_TECHNIQUE':
              return {
                ...state,
                artGallery: state.techniqueFilter.filter((post: ArtGalleryItem) => {
                  return post.technique === action.payload
                }),
                typeFilter: state.techniqueFilter.filter((post: ArtGalleryItem) => {
                  return post.technique === action.payload
                }),
                paymentFilter: state.techniqueFilter.filter((post: ArtGalleryItem) => {
                  return post.technique === action.payload
                })
              }
        case 'FILTER_PAYMENT':
              return {
                ...state,
                artGallery: state.paymentFilter.filter((post: ArtGalleryItem) => {
                  if(action.payload === 'Auction'){
                    return post.bet === true
                  }else{
                    return post.bet === false
                  }
                }),
                typeFilter: state.paymentFilter.filter((post: ArtGalleryItem) => {
                  if(action.payload === 'Auction'){
                    return post.bet === true
                  }else{
                    return post.bet === false
                  }
                }),
                techniqueFilter: state.paymentFilter.filter((post: ArtGalleryItem) => {
                  if(action.payload === 'Auction'){
                    return post.bet === true
                  }else{
                    return post.bet === false
                  }
                })
              }
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
                paymentFilter: [...state.paymentFilter].sort((a: ArtGalleryItem, b: ArtGalleryItem) => {
                  if (action.payload === 'Higher') return b.price - a.price
                  if (action.payload === 'Lower') return a.price - b.price
                  return 0
                })
              }

            case 'ADD_FAVORITE':
                
                if (!state.artGallery.some((artGallery) => artGallery.id === action.payload.id)) {
                  return {
                    ...state,
                    artGallery: [...state.artGallery, action.payload],
                  };
                }
                return state; 
          
              case 'REMOVE_FAVORITE':
                return {
                  ...state,
                  artGallery: state.artGallery.filter((artGallery) => artGallery.id !== action.payload),
                };
        
          default:
              return {...state};
    }
}