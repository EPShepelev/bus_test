import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { NoPosts } from "./components/NoPosts/NoPosts";
import { fetchPosts } from "./api/fetchPosts";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="App">
      <button onClick={() => dispatch(fetchPosts())}>получить посты</button>
      {posts.length > 0 ? <div>posts are here</div> : <NoPosts></NoPosts>}
    </div>
  );
}

export default App;
