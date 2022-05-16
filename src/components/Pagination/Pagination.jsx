import { useDispatch, useSelector } from "react-redux";
import style from "./Pagination.module.css";
import { setCurrentPageAC } from "../../redux/reducers/posts";
import { useEffect } from "react";
import { fetchPosts } from "../../api/fetchPosts";
import { pagesCreator } from "../../utils/pagesCreator";
import { Outlet, Link } from "react-router-dom";

export const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.posts.currentPage);
  const totalCount = useSelector((state) => state.posts.totalCount);
  const perPage = useSelector((state) => state.posts.perPage);
  const pagesCount = Math.ceil(totalCount/perPage)

  const pages = pagesCreator(pagesCount, currentPage)

  useEffect(() => {
    dispatch(fetchPosts(currentPage, perPage));
  }, [currentPage, perPage, dispatch]);

  return (
    <div className={style.wrapper}>
       <Link to={`/pages/${currentPage - 1}`}>
        <button className={style.btn} disabled={currentPage === 1} onClick={() => dispatch(setCurrentPageAC(currentPage - 1))}>Назад</button>
      </Link>
      <div className={style.pages}>
        {pages.map((page, index) => {
          return (
            <Link
              to={`/pages/${page}`}
              className={`${style.number} ${
                currentPage === page ? style.current : null
              }`}
              key={index}
              onClick={(e) => dispatch(setCurrentPageAC(+(e.target.textContent)))}
            >
              {page}
            </Link>
          );
        })}
      </div>
      <Link to={`/pages/${currentPage + 1}`}>
        <button className={style.btn} disabled={currentPage === pagesCount} onClick={() => dispatch(setCurrentPageAC(currentPage + 1))}>Далее</button>
      </Link>
      <Outlet />
    </div>
  );
};
