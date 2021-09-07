import { Tag } from '../../../../types/tags'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { deleteTag, setActiveTag } from '../../../../store/actions/tags'
import { openModal } from '../../../../store/actions/modal'
import { ADD_TAG_PAGE, ADD_CHILD_TAG_PAGE, EDIT_TAG_PAGE } from '../../../../store/types/modal'

const PageStructure: React.FC = () => {
  const dispatch = useDispatch()
  const { tree, activeTag } = useSelector((state: RootState) => state.tags)

  const handleModalAddTag = (): void => {
    dispatch(openModal(ADD_TAG_PAGE))
  }

  return (
    <div>
      <h2>Component tags structure</h2>
      <div className="my-4">
        <button className="btn btn-add small" onClick={handleModalAddTag}>
          Add new tag
        </button>
        <TagsLoop tags={tree} />
      </div>

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
  const baseButtonStyle = ``
  return (
    <div className="flex flex-col ml-2 max-h-72 overflow-y-auto">
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
            {hasChildren(tag) ? '>' : ''}
            <button className="text-sm text-gray-800" onClick={() => handleSelect(tag?.id)}>
              {tag.type}
            </button>
            {getChildren(tag)}
          </div>
        )
      })}
    </div>
  )
}

function hasChildren(tag: Tag): boolean {
  return !!(tag && tag.children && tag.children.length > 0)
}

function getChildren(tag: Tag): JSX.Element | undefined {
  if (hasChildren(tag)) return <TagsLoop tags={tag.children} />
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
    const handleModalEditTag = (): void => {
      dispatch(openModal(EDIT_TAG_PAGE))
    }
    const handleDelete = (tagId: number | undefined): void => {
      if (tagId) {
        dispatch(deleteTag(tagId))
      }
    }
    return (
      <div>
        <p>Configure current tag</p>
        <button className="btn small" onClick={handleModalEditTag}>
          Configuration
        </button>
        <button className="btn btn-add small" onClick={handleModalAddTag}>
          Add child
        </button>
        <button className="btn btn-delete small" onClick={() => handleDelete(activeTag?.id)}>
          Delete
        </button>
      </div>
    )
  }
  return null
}

export default PageStructure
