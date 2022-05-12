import { postsAC } from "../redux/reducers/posts";

export const fetchPosts = (currentPage, perPage) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${perPage}`)
      .then((response) => response.json())
      .then((data) => dispatch( postsAC(data)));
  };
};
