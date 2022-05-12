const GET_POSTS = "GET_POSTS";
const FIND_TEXT = "FIND_TEXT";

const initialState = {
  posts: [],
  searchResult: [],
  isSearching: false
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: [...action.payload] };
    case FIND_TEXT:
      return { ...state,  searchResult: state.posts.filter(post => post.title.includes(action.payload.text)), isSearching: action.payload.isSearching};
    default:
      return state;
  }
};

export const postsAC = (payload) => ({ type: GET_POSTS, payload });
export const searchAC = (text, isSearching) => ({ type: FIND_TEXT, payload: {text, isSearching} });
