import style from "./TableHeader.module.css"

export const TableHeader = () => {
  return (
    <div className={style.container}>
      <div className={style.index}>ID</div>
      <div className={style.title}>Заголовок</div>
      <div className={style.text}>Описание</div>
    </div>
  )
}