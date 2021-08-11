import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { createTag } from '../../../store/actions/tags'
import { Tag, TAG_COMPONENT, TAG_PAGE, TAG_DIV } from '../../../types/tags'

interface AddNewTagProps {
  wrapperType: typeof TAG_PAGE | typeof TAG_COMPONENT
}

const AddNewTag: React.FC<AddNewTagProps> = ({ wrapperType }) => {
  const dispatch = useDispatch()
  const { activePage } = useSelector((state: RootState) => state.pages)

  const onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    const exampleTag: Tag = {
      wrapper_type: wrapperType,
      wrapper_id: activePage.id,
      type: TAG_DIV,
      order: 0,
      depth: 0,
    }
    dispatch(createTag(exampleTag))
  }

  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Add a new tag {wrapperType}</button>
    </form>
  )
}

export default AddNewTag
