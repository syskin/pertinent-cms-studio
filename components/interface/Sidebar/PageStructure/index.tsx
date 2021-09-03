import { EDIT_TAG, Tag, TAG_PAGE } from '../../../../types/tags'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { deleteTag, setActiveTag } from '../../../../store/actions/tags'
import TagConfiguration from '../../../form/TagConfiguration'
import { openModal } from '../../../../store/actions/modal'
import { ADD_TAG_PAGE, ADD_CHILD_TAG_PAGE } from '../../../../store/types/modal'

const PageStructure: React.FC = () => {
  const dispatch = useDispatch()
  const { tree, activeTag } = useSelector((state: RootState) => state.tags)

  const handleModalAddTag = (): void => {
    dispatch(openModal(ADD_TAG_PAGE))
  }

  return (
    <div>
      <div>Component tags structure</div>

      <div className="h-72">
        <TagsLoop tags={tree} />
      </div>

      <button onClick={handleModalAddTag}>Add new tag</button>
      <AddChild activeTag={activeTag} />
    </div>
  )
}

interface TagsLoopProps {
  tags: Tag[] | undefined
}

const TagsLoop: React.FC<TagsLoopProps> = ({ tags }) => {
  const dispatch = useDispatch()
  const { activeTag } = useSelector((state: RootState) => state.tags)
  const handleSelect = (tagId: number | undefined): void => {
    if (tagId) {
      dispatch(setActiveTag(tagId))
    }
  }
  const handleDelete = (tagId: number | undefined): void => {
    if (tagId) {
      dispatch(deleteTag(tagId))
    }
  }
  const baseButtonStyle = ``
  return (
    <div className="flex flex-col ml-2">
      {tags?.map((tag, index) => {
        return (
          <div
            className={
              tag.id === activeTag?.id
                ? `bg-green-500 ${baseButtonStyle}`
                : `bg-gray-100 ${baseButtonStyle}`
            }
            key={`tag_${index}`}
          >
            <button onClick={() => handleSelect(tag?.id)}>Select {tag.id}</button>
            <button onClick={() => handleDelete(tag?.id)}>Delete</button>
            {getChildren(tag)}
          </div>
        )
      })}
    </div>
  )
}

function getChildren(tag: Tag): JSX.Element | undefined {
  if (tag && tag.children && tag.children.length > 0) return <TagsLoop tags={tag.children} />
}

interface AddChildProps {
  activeTag: Tag | undefined
}

const AddChild: React.FC<AddChildProps> = ({ activeTag }) => {
  const dispatch = useDispatch()
  if (activeTag && activeTag.id) {
    const handleModalAddTag = (): void => {
      dispatch(openModal(ADD_CHILD_TAG_PAGE))
    }
    return (
      <div>
        <p>Configure current tag</p>
        <TagConfiguration type={EDIT_TAG} wrapper_type={TAG_PAGE} />
        <button onClick={handleModalAddTag}>Add child tag</button>
      </div>
    )
  }
  return null
}

export default PageStructure
