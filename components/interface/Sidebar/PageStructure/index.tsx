import AddNewTag from '../../../form/AddNewTag'
import { TAG_PAGE } from '../../../../types/tags'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'

const PageStructure: React.FC = () => {
  const { tree } = useSelector((state: RootState) => state.tags)

  return (
    <div>
      <div>Component tags structure</div>
      {tree?.map((tag, index) => {
        return <span key={index}>{tag.type}</span>
      })}
      <AddNewTag wrapperType={TAG_PAGE} />
    </div>
  )
}

export default PageStructure
