import { sortArray } from "../../utils/sortArray";

const GET_POSTS = "GET_POSTS";
const FIND_TEXT = "FIND_TEXT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SORT_BY_ID = "SORT_BY_ID"
const SORT_BY_TITLE = "SORT_BY_TITLE"
const SORT_BY_TEXT = "SORT_BY_TEXT"

const initialState = {
  posts: [],
  searchResult: [],
  isSearching: false,
  currentPage: 1,
  perPage: 10,
  totalCount: 100,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: [...action.payload]};
    case FIND_TEXT:
      return { ...state,  searchResult: state.posts.filter(post => post.title.includes(action.payload.text) || post.body.includes(action.payload.text)), isSearching: action.payload.isSearching};
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload};
    // case CURRENT_PAGE_NEXT:
    //   return { ...state, currentPage: state.currentPage + 1};
    // case CURRENT_PAGE_PREV:
    //   return { ...state, currentPage: state.currentPage - 1};
    case SORT_BY_ID:
      return {...state, posts: [...state.posts.sort(sortArray("id"))]}
    case SORT_BY_TITLE:
      return {...state, posts: [...state.posts.sort(sortArray("title"))]}
    case SORT_BY_TEXT:
      return {...state, posts: [...state.posts.sort(sortArray("body"))]}
    default:
      return state;
  }
};

export const postsAC = (payload) => ({ type: GET_POSTS, payload });
export const searchAC = (text, isSearching) => ({ type: FIND_TEXT, payload: {text, isSearching} });
export const setCurrentPageAC = (payload) => ({ type: SET_CURRENT_PAGE, payload });
export const sortByIdAC = () => ({ type: SORT_BY_ID })
export const sortByTitleAC = () => ({ type: SORT_BY_TITLE })
export const sortByTextAC = () => ({ type: SORT_BY_TEXT })

