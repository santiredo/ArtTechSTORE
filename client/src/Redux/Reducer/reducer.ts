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
  artGallery: ArtGalleryItem[],
};

type Action={
  type:string;
  payload:[];
}

const initialState: InitialState = {
  artGallery: [],
  numPage: 1,
};

export default function rootReducer(state = initialState, action:Action){
  switch(action.type){
    case 'SEARCH_ARTIST':
      let artist: Array<any> = [];

      if (action.payload.length === 0) {
        artist = state.artGallery;
      } else {
        artist = action.payload.map((ele: string) => ele);
      }

      return {
        ...state,
        searchArtist: artist,
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

