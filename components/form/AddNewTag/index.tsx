import { useDispatch } from 'react-redux'
import { createTag } from '../../../store/actions/tags'
import { Tag, TAG_COMPONENT, TAG_PAGE, TAG_DIV } from '../../../types/tags'

interface AddNewTagProps {
  wrapperType: typeof TAG_PAGE | typeof TAG_COMPONENT
  wrapperId: string
  depth: number
  parentId?: number
}

const AddNewTag: React.FC<AddNewTagProps> = ({ wrapperType, wrapperId, depth, parentId }) => {
  const dispatch = useDispatch()

  const onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    const exampleTag: Tag = {
      wrapper_type: wrapperType,
      wrapper_id: wrapperId,
      parent_id: parentId || null,
      type: TAG_DIV,
      order: 0,
      depth: depth + 1,
    }
    dispatch(createTag(exampleTag))
  }

  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Add a new tag</button>
    </form>
  )
}

export default AddNewTag
