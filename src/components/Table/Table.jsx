import { TableHeader } from "../TableHeader/TableHeader"
import { TableList } from "../TableList/TableList"

export const Table = ({posts}) => {
  return (
    <div>
      <TableHeader />
      <TableList posts={posts}/>
    </div>
  )
}