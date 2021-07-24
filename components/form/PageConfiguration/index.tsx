import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { createPage, updatePage } from '../../../store/actions/pages'

interface PageConfigurationFormProps {
  type: string
}

const PageConfiguration: React.FC<PageConfigurationFormProps> = ({ type }) => {
  const dispatch = useDispatch()

  const { activePage, loading } = useSelector((state: RootState) => state.pages)

  const onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      name: { value: string }
      slug: { value: string }
      description: { value: string }
    }

    const name = target.name.value
    const slug = target.slug.value
    const description = target.description.value

    const payload = { id: activePage.id, name, slug, description }

    type === 'create' ? dispatch(createPage(payload)) : dispatch(updatePage(payload))
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Page name:
        <input type="text" name="name" disabled={loading} />
      </label>
      <label>
        Slug:
        <input type="text" name="slug" disabled={loading} />
      </label>
      <label>
        Description:
        <textarea disabled={loading} name="description" />
      </label>
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  )
}

export default PageConfiguration
