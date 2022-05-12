import { TableItem } from "../TableItem/TableItem";
import style from "./TableList.module.css";
import { useSelector } from "react-redux";

export const TableList = () => {

  const posts = useSelector((state) => state.posts.posts);
  const searchResult = useSelector((state) => state.posts.searchResult);
  const isSearching = useSelector((state) => state.posts.isSearching);

  return (
    <div className={style.wrapper}>
      {(searchResult.length || isSearching)
        ? searchResult.map((searchItem) => {
            return (
              <TableItem
                key={searchItem.id}
                index={searchItem.id}
                title={searchItem.title}
                text={searchItem.body}
              />
            );
          })
        : posts.map((post) => {
            return (
              <TableItem
                key={post.id}
                index={post.id}
                title={post.title}
                text={post.body}
              />
            );
          })}
    </div>
  );
};
