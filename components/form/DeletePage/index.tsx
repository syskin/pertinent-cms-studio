import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import { closeModal } from '../../../store/actions/modal'
import { deletePage } from '../../../store/actions/pages'

const DeletePage: React.FC = () => {
  const dispatch = useDispatch()
  const [hasBeenDeleted, setHasBeenDeleted] = useState(false)
  const { activePage, loading } = useSelector((state: RootState) => state.pages)

  useEffect(() => {
    if (hasBeenDeleted && !loading && !activePage.id) {
      dispatch(closeModal())
      setHasBeenDeleted(false)
    }
  }, [dispatch, loading, hasBeenDeleted, activePage.id])

  const handleDelete = (): void => {
    dispatch(deletePage())
    setHasBeenDeleted(true)
  }

  return (
    <div>
      Delete {activePage.name} ({activePage.slug}) page ?
      <button className="btn btn-delete" disabled={loading} onClick={() => handleDelete()}>
        Delete
      </button>
    </div>
  )
}

export default DeletePage
