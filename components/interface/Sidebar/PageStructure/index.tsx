import AddNewTag from '../../../form/AddNewTag'
import { Tag, TAG_DIV, TAG_PAGE, TAG_SPAN } from '../../../../types/tags'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'

const PageStructure: React.FC = () => {
  const { tree } = useSelector((state: RootState) => state.tags)
  return (
    <div>
      <div>Component tags structure</div>

      <TagsLoop tags={tree} />

      <AddNewTag wrapperType={TAG_PAGE} />
    </div>
  )
}

interface TagsLoopProps {
  tags: Tag[] | undefined
}

const TagsLoop: React.FC<TagsLoopProps> = ({ tags }) => {
  return (
    <div className="flex flex-col ml-2">
      {tags?.map((tag, index) => {
        switch (tag.type) {
          case TAG_DIV:
            return <div key={`${index}_div_${tag.depth}_${tag.order}`}>Div{getChildren(tag)}</div>
          case TAG_SPAN:
            return (
              <span key={`${index}_span_${tag.depth}_${tag.order}`}>Span{getChildren(tag)}</span>
            )
        }
      })}
    </div>
  )
}

function getChildren(tag: Tag) {
  if (tag && tag.children && tag.children.length > 0) return <TagsLoop tags={tag.children} />
}

export default PageStructure
