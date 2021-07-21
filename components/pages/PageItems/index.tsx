import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { getAllPages } from '../../../store/actions/pages'
import { Page } from '../../../types/pages'
import PageItem from '../PageItem'

const PageItems: React.FC = () => {
  const dispatch = useDispatch()
  const { pages, loading } = useSelector((state: RootState) => state.pages)

  useEffect(() => {
    dispatch(getAllPages())
  }, [dispatch])

  if (loading) {
    return <div>It is loading...</div>
  }

  return (
    <div className="flex flex-col mt-6">
      {pages.map((page: Page) => {
        return <PageItem page={page} key={page.id} />
      })}
    </div>
  )
}

export default PageItems
