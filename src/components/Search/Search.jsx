import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAC } from "../../redux/reducers/posts";
import style from "./Search.module.css"

export const Search = () => {
  const dispatch = useDispatch();
  const isSearching = useSelector((state) => state.posts.isSearching);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchingValue, setIsSearchingValue] = useState(isSearching);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsSearchingValue(true)
  };

  const handleInputBlur = () => {
    setIsSearchingValue(false)
  };


  useEffect(() => {
    dispatch(searchAC(searchValue, isSearchingValue));
  }, [searchValue, isSearchingValue, dispatch]);

  return (
    <div className={style.inner}>
      <input
        className={style.input}
        placeholder="Поиск"
        onChange={(event) => handleInputChange(event)}
        onFocus={() => handleInputFocus()}
        onBlur={() => handleInputBlur()}
      />
      <button className={style.btn}></button>
    </div>
  );
};
