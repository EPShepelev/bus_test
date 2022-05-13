import { useSelector } from "react-redux";
import style from "./Pagination.module.css";
import { useDispatch } from "react-redux";
import { setCurrentPageAC } from "../../redux/reducers/posts";
import { useEffect } from "react";
import { fetchPosts } from "../../api/fetchPosts";
import { pagesCreator } from "../../utils/pagesCreator"

export const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.posts.currentPage);
  const totalCount = useSelector((state) => state.posts.totalCount);
  const perPage = useSelector((state) => state.posts.perPage);
  const pagesCount = Math.ceil(totalCount/perPage)

  const pages = pagesCreator(pagesCount, currentPage)

  useEffect(() => {
    dispatch(fetchPosts(currentPage, perPage));
  }, [currentPage]);

  return (
    <div className={style.wrapper}>
      <button className={style.btn} disabled={currentPage === 1} onClick={() => dispatch(setCurrentPageAC(currentPage - 1))}>Назад</button>
      <div className={style.pages}>
        {pages.map((page, index) => {
          return (
            <span
              className={`${style.number} ${
                currentPage === page ? style.current : null
              }`}
              key={index}
              onClick={(e) => dispatch(setCurrentPageAC(+(e.target.textContent)))}
            >
              {page}
            </span>
          );
        })}
      </div>
      <button className={style.btn} disabled={currentPage === pagesCount} onClick={() => dispatch(setCurrentPageAC(currentPage + 1))}>Далее</button>
    </div>
  );
};
