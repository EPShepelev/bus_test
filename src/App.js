import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { NoPosts } from "./components/NoPosts/NoPosts";
import { fetchPosts } from "./api/fetchPosts";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts);
  }, []);

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchPosts())}>получить посты</button>
      {posts.length > 0 ? <div>posts are here</div> : <NoPosts></NoPosts>}
    </div>
  );
}

export default App;
