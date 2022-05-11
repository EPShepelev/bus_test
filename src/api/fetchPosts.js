import { postsAC } from "../redux/reducers/posts";

export const fetchPosts = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => dispatch( postsAC(data)));
  };
};
