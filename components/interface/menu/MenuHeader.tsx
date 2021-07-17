import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import Link from 'next/link'

import { openModal } from '../../../store/actions/modal'
import { EDIT_SITE } from '../../../store/types/modal'

const MenuHeader: React.FC = () => {
  const dispatch = useDispatch()

  const { isSidebarOpen } = useSelector((state: RootState) => state.sidebar)
  const baseMenuHeaderWrapper = `transform duration-300 bg-gray-100 w-full h-12 fixed top-0 z-10`

  type Links = Link[]

  interface Link {
    uri: string
    text: string
  }

  const linksMenu: Links = [
    {
      uri: '/',
      text: 'Your Website home page',
    },
    {
      uri: '/studio',
      text: 'Studio',
    },
  ]

  const handleModalConfiguration = (): void => {
    dispatch(openModal(EDIT_SITE))
  }

  return (
    <div className={isSidebarOpen ? `${baseMenuHeaderWrapper} pr-72` : `${baseMenuHeaderWrapper}`}>
      <ul className="flex flex-row justify-start items-center h-full">
        {linksMenu.map((link: Link, index: number) => {
          return (
            <li className="mx-2" key={`menu_link_${index}`}>
              <Link href={link.uri}>
                <a>{link.text}</a>
              </Link>
            </li>
          )
        })}
        <li className="ml-auto mr-2">
          <button onClick={handleModalConfiguration}>Configure</button>
        </li>
      </ul>
    </div>
  )
}

export default MenuHeader
