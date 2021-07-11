
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const MenuHeader = () => {
    const { state } = useSelector((state: RootState) => state.sidebar)
    const baseMenuHeaderWrapper = `transform duration-300 bg-gray-100 w-full h-12 fixed top-0 z-10 mb-12`
    return (
        <div className={state ? `${baseMenuHeaderWrapper} pr-72` : `${baseMenuHeaderWrapper}`}>
            My menu
        </div>
    )
}

export default MenuHeader