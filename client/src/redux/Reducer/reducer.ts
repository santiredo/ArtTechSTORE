
export type InitialState<T> = {
    allPosts: T,
}

type Action<T> = {
    type:string;
    payload: T
}

const initialState: InitialState<any> = {
    allPosts: [],
}


export default function rootReducer(state = initialState, action:Action<any>){
    switch(action.type){
      case 'CREATE_POST':
              return {
                ...state,
                allPosts: [action.payload, ...state.allPosts],
              };
          default:
              return {...state};
    }
  }