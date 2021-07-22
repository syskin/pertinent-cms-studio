import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const DeletePage: React.FC = () => {
  const { activePage } = useSelector((state: RootState) => state.pages)
  return (
    <div>
      Delete {activePage.name} ({activePage.slug}) page ?
    </div>
  )
}

export default DeletePage
