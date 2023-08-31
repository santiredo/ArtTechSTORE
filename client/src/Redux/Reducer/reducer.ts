interface ArtGalleryItem {
  id: string;
  imageURL: string;
  type: string;
  name: string;
  artistName: string;
  cost: string;
}

export type InitialState = {
  numPage: number,
  artGallery:ArtGalleryItem[],
};

type Action={
  type:string;
}

const initialState: InitialState = {
  artGallery:[],
  numPage: 1,
};

export default function rootReducer(state = initialState, action:Action){
  switch(action.type){
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

