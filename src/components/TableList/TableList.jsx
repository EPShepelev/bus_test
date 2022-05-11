import { TableItem } from "../TableItem/TableItem"
import style from "./TableList.module.css"

export const TableList = ({posts}) => {
  return (
    <div className={style.wrapper}>
     {posts.map((post) => {
       return ( <TableItem key={post.id} index={post.id} title={post.title} text={post.body} />)
     })}
    </div>
  )
}