import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Tag, TAG_SPAN } from '../../types/tags'

interface TagsTreeProps {
  isStudio?: boolean
}

const TagsTree: React.FC<TagsTreeProps> = () => {
  const { tree, loading } = useSelector((state: RootState) => state.tags)

  if (loading) {
    return <div>It is loading...</div>
  }

  return (
    <div className="flex flex-col mt-6">
      <TagsManager tags={tree} />
    </div>
  )
}

interface TagsManagerProps {
  tags: Tag[] | undefined
}
const TagsManager: React.FC<TagsManagerProps> = ({ tags }) => {
  if (!tags) return <div>No tags</div>

  return (
    <>
      {tags?.map((tag, index) => {
        const key = `key_${index}_${tag.id}_${tag.type}`
        switch (tag?.type) {
          case TAG_SPAN:
            return (
              <span key={key}>
                <TagContent tag={tag} />
              </span>
            )
          default:
            return (
              <div key={key}>
                <TagContent tag={tag} />
              </div>
            )
        }
      })}
    </>
  )
}

interface TagContentProps {
  tag: Tag
}
const TagContent: React.FC<TagContentProps> = ({ tag }) => {
  if (tag.children && tag.children.length > 0) {
    return <TagsManager tags={tag.children} />
  }

  return <>{tag.type}</>
}

export default TagsTree
