import { TableItem } from "../TableItem/TableItem";
import style from "./TableList.module.css";
import { useSelector } from "react-redux";

export const TableList = () => {

  const posts = useSelector((state) => state.posts.posts);
  const searchResult = useSelector((state) => state.posts.searchResult);
  const isSearching = useSelector((state) => state.posts.isSearching);

  let renderArray = []
  isSearching ? renderArray = [...searchResult] : renderArray = [...posts]

  return (
    <div className={style.wrapper}>
      {renderArray.map(item => {
        return (
          <TableItem
            key={item.id}
            index={item.id}
            title={item.title}
            text={item.body}
          />
        )
      })}
    </div>
  );
};
