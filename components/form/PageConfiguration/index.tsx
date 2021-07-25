import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { closeModal } from '../../../store/actions/modal'
import { createPage, updatePage } from '../../../store/actions/pages'

interface PageConfigurationFormProps {
  type: string
}

const PageConfiguration: React.FC<PageConfigurationFormProps> = ({ type }) => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
  })
  const [hasBeenSubmit, setHasBeenSubmit] = useState(false)

  const { activePage, loading } = useSelector((state: RootState) => state.pages)

  useEffect(() => {
    setFormData({
      name: '',
      slug: '',
      description: '',
    })
    if (type !== 'create') {
      setFormData({ ...activePage })
    }
  }, [activePage, type])

  useEffect(() => {
    if (hasBeenSubmit && !loading) {
      dispatch(closeModal())
      setHasBeenSubmit(false)
    }
  }, [dispatch, loading, hasBeenSubmit])

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

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
    setHasBeenSubmit(true)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Page name:
        <input
          type="text"
          name="name"
          disabled={loading}
          value={formData.name}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Slug:
        <input
          type="text"
          name="slug"
          disabled={loading}
          value={formData.slug}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Description:
        <textarea
          disabled={loading}
          name="description"
          value={formData.description}
          onChange={handleOnChange}
        />
      </label>
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  )
}

export default PageConfiguration
