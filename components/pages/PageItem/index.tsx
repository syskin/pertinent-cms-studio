import Link from 'next/link'
import { Page } from '../../../types/pages'

interface PagesItemProps {
  page: Page
}

const MenuHeader: React.FC<PagesItemProps> = ({ page }) => {
  return (
    <div className="flex flex-row flex-no-wrap rounded-lg bg-gray-100 px-4 py-2 shadow-md hover:shadow-lg transform duration-300 my-4">
      <div className="flex flex-col w-4/5">
        <span>{page.name}</span>
        <p>{page.description}</p>
      </div>
      <div className="flex flex-col w-1/5">
        <Link href={`/studio/page/${page.id}`}>
          <a className="btn btn-edit">Edit</a>
        </Link>
        <span className="btn btn-delete">Delete</span>
      </div>
    </div>
  )
}

export default MenuHeader
