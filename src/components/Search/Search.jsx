import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchAC } from "../../redux/reducers/posts";
import style from "./Search.module.css"

export const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsSearching(true)
  };

  const handleInputBlur = () => {
    setIsSearching(false)
  };


  useEffect(() => {
    dispatch(searchAC(searchValue, isSearching));
  }, [searchValue, isSearching]);

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
