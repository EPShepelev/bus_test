import { TableHeader } from "../TableHeader/TableHeader";
import { TableList } from "../TableList/TableList";
import { useSelector } from "react-redux";
import { Routes, Route} from "react-router-dom";


export const Table = () => {
  const currentPage = useSelector((state) => state.posts.currentPage);

  return (
    <div>
      <TableHeader />
      <Routes>
        <Route path={`:${currentPage}`} element={ <TableList /> } />
      </Routes>
    </div>
  )
}