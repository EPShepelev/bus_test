import style from "./TableHeader.module.css";
import { HeaderItem } from "../HeaderItem/HeaderItem";
import {
  sortByIdAC,
  sortByTitleAC,
  sortByTextAC,
} from "../../redux/reducers/posts";

export const TableHeader = () => {
  return (
    <div className={style.container}>
      <div className={style.index}>
        <HeaderItem name="ID" sortAction={sortByIdAC} />
      </div>
      <div className={style.title}>
        <HeaderItem name="Заголовок" sortAction={sortByTitleAC} />
      </div>
      <div className={style.text}>
        <HeaderItem name="Описание" sortAction={sortByTextAC} />
      </div>
    </div>
  );
};
