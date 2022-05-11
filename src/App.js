import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./api/fetchPosts";
import { searchAC } from "./redux/reducers/posts";
import "./App.css";
import { NoPosts } from "./components/NoPosts/NoPosts";
import { Table } from "./components/Table/Table"
import { Search } from "./components/Search/Search"
import { Pagination } from "./components/Pagination/Pagination"

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="App">
      <button onClick={()=>dispatch(searchAC("ne"))}>Filter! </button>
      < Search/>
      {posts.posts.length ? <Table posts={posts.posts}/> : <NoPosts></NoPosts>}
      <Pagination />
    </div>
  );
}

export default App;
