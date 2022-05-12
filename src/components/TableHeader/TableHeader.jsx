import style from "./TableHeader.module.css"
import { useDispatch } from "react-redux";
import { sortTitleAC } from "../../redux/reducers/posts";

export const TableHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.index}>ID</div>
      <div className={style.title} onClick={()=>dispatch(sortTitleAC())}>Заголовок</div>
      <div className={style.text}>Описание</div>
    </div>
  )
}