import { useSelector } from 'react-redux'
import 'tailwindcss/tailwind.css'
import MenuHeader from '../../../components/interface/menu/MenuHeader'
import Sidebar from '../../../components/interface/sidebar'
import { RootState } from '../../../store'

export default function Page() {
  const { state } = useSelector((state: RootState) => state.sidebar)
  const baseMainContentWrapper = `flex-1 min-h-screen bg-gray-500 transform duration-300 mb-52 pt-12`
  return (
    <div className="flex">
      <MenuHeader />
      <div className={state ? `${baseMainContentWrapper} pr-72` : `${baseMainContentWrapper}`}>
        Main content
      </div>
      <Sidebar />
    </div>
  )
}
