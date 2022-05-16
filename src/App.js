import { useSelector } from "react-redux";
import "./App.css";
import { NoPosts } from "./components/NoPosts/NoPosts";
import { Table } from "./components/Table/Table";
import { Search } from "./components/Search/Search";
import { Pagination } from "./components/Pagination/Pagination";
import { Routes, Route} from "react-router-dom";

function App() {
  const posts = useSelector((state) => state.posts.posts);

  return (
      <div className="App">
        < Search/>
        {posts.length ?
          <Routes>
            <Route path="/pages/*" element={ <Table /> } />
          </Routes>
        :
          <NoPosts/>}
        <Pagination />
      </div>
  );
}

export default App;


