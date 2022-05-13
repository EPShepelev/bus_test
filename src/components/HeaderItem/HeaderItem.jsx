import style from "./HeaderItem.module.css";
import { useDispatch } from "react-redux";


export const HeaderItem = ({name, sortAction}) => {
  const dispatch = useDispatch();

  return (
    <div className={style.block}>
        <span onClick={() => dispatch(sortAction())}>{name}</span>
    </div>
  );
};