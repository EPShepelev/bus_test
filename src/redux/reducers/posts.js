const GET_POSTS = "GET_POSTS";
const FIND_TEXT = "FIND_TEXT";

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: [...action.payload] };
    case FIND_TEXT:
      return { ...state,  posts: state.posts.filter(post => post.title.includes(action.payload))};
    default:
      return state;
  }
};

export const postsAC = (payload) => ({ type: GET_POSTS, payload });
export const searchAC = (payload) => ({ type: FIND_TEXT, payload });
