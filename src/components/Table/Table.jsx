import { TableHeader } from "../TableHeader/TableHeader"
import { TableList } from "../TableList/TableList"

export const Table = ({posts, searchResult}) => {
  return (
    <div>
      <TableHeader />
      <TableList posts={posts} searchResult={searchResult}/>
    </div>
  )
}