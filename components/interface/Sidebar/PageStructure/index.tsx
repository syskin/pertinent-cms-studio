import AddNewTag from '../../../form/AddNewTag'
import { Tag, TAG_PAGE } from '../../../../types/tags'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { deleteTag, setActiveTag } from '../../../../store/actions/tags'
import { Page } from '../../../../types/pages'
import TagConfiguration from '../../../form/TagConfiguration'

const PageStructure: React.FC = () => {
  const { tree, activeTag } = useSelector((state: RootState) => state.tags)
  const { activePage } = useSelector((state: RootState) => state.pages)
  return (
    <div>
      <div>Component tags structure</div>

      <div className="overflow-y-auto h-72">
        <TagsLoop tags={tree} />
      </div>

      <TagConfiguration type={`create`} wrapper_type={TAG_PAGE} wrapper_id={activePage.id} />
      <AddNewTag wrapperType={TAG_PAGE} wrapperId={activePage.id} depth={-1} />

      {addChild(activeTag, activePage)}
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

function addChild(activeTag: Tag | undefined, activePage: Page): JSX.Element | undefined {
  if (activeTag && activeTag.id)
    return (
      <div>
        <TagConfiguration type={`edit`} wrapper_type={TAG_PAGE} wrapper_id={activePage.id} />
        <AddNewTag
          wrapperType={TAG_PAGE}
          wrapperId={activePage.id}
          depth={activeTag.depth}
          parentId={activeTag.id}
        />
      </div>
    )
}

export default PageStructure
