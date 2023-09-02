interface ArtGalleryItem {
    id: string;
    imageURL: string;
    type: string;
    name: string;
    artistName: string;
    cost: string;
  }
interface Artists{
  id:number,
  name:string,
}

export type InitialState<T> = {
    artist:T,
    artists:Artists[],
    allPosts: T,
    numPage: number,
    artGallery: ArtGalleryItem[],
}

type Action<T> = {
    type:string;
    payload: T
}

const initialState: InitialState<any> = {
    artist:{},
    artists:[],
    allPosts: [],
    numPage:1,
    artGallery:[],
}


export default function rootReducer(state = initialState, action:Action<any>){
    switch(action.type){
        case 'CREATE_POST':
              return {
                ...state,
                allPosts: [action.payload, ...state.allPosts],
              };
        case 'DISPLAY_ARTIST':
              return{
                ...state,
                artists: action.payload,
              }
        case 'SEARCH_ARTIST':
                return {
                    ...state,
                    artist: action.payload,
                  };
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
          default:
              return {...state};
    }
}