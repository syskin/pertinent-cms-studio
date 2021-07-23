import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
// import { closeModal } from '../../../store/actions/modal'
// import { deletePage } from '../../../store/actions/pages'

const DeletePage: React.FC = () => {
  // const dispatch = useDispatch()
  const { activePage } = useSelector((state: RootState) => state.pages)

  const handleDelete = (): void => {
    // console.log(`Click here`)
    // dispatch(closeModal())
  }

  return (
    <div>
      Delete {activePage.name} ({activePage.slug}) page ?
      <button className="btn btn-delete" onClick={() => handleDelete()}>
        Delete
      </button>
    </div>
  )
}

export default DeletePage
