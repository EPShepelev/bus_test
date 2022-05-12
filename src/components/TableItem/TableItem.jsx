import style from "./TableItem.module.css"

export const TableItem = ({index, title, text}) => {

  return (
    <div className={style.row}>
     <div className={style.index}>{index}</div>
     <div className={style.title}>{title}</div>
     <div className={style.text}>{text}</div>
    </div>
  )
}