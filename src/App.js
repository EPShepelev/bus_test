import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./api/fetchPosts";
import "./App.css";
import { NoPosts } from "./components/NoPosts/NoPosts";
import { Table } from "./components/Table/Table"
import { Search } from "./components/Search/Search"
import { Pagination } from "./components/Pagination/Pagination"

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="App">
      < Search/>
      {posts.length ? <Table /> : <NoPosts/>}
      <Pagination />
    </div>
  );
}

export default App;
