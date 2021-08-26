import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { closeModal } from '../../../store/actions/modal'
import { createTag, updateTag } from '../../../store/actions/tags'
import { Tag, TAG_COMPONENT, TAG_DIV, TAG_SPAN, TAG_PAGE } from '../../../types/tags'

interface TagConfigurationFormProps {
  type: string
  wrapper_type: typeof TAG_COMPONENT | typeof TAG_PAGE
  wrapper_id: string
}

const TagConfiguration: React.FC<TagConfigurationFormProps> = ({
  type,
  wrapper_type,
  wrapper_id,
}) => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    order: 0,
    type: TAG_DIV,
  })
  const [hasBeenSubmit, setHasBeenSubmit] = useState(false)

  const { activeTag, loading } = useSelector((state: RootState) => state.tags)

  useEffect(() => {
    setFormData({
      order: 0,
      type: TAG_DIV,
    })
    if (type !== 'create' && activeTag) {
      setFormData({ ...activeTag })
    }
  }, [activeTag, type])

  useEffect(() => {
    if (hasBeenSubmit && !loading) {
      dispatch(closeModal())
      setHasBeenSubmit(false)
    }
  }, [dispatch, loading, hasBeenSubmit])

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      order: { value: number }
      type: { value: typeof TAG_DIV | typeof TAG_SPAN }
    }

    const order = target.order.value
    const tag_type = target.type.value

    const payload: Tag = { order, depth: 0, wrapper_id, wrapper_type, type: tag_type }
    if (activeTag) payload.depth = activeTag.depth

    if (type !== 'create' && activeTag) {
      dispatch(updateTag(activeTag.id, payload))
    } else {
      dispatch(createTag(payload))
    }

    setHasBeenSubmit(true)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Order:
        <input
          type="number"
          name="order"
          disabled={loading}
          value={formData.order}
          min="0"
          onChange={handleOnChange}
        />
      </label>
      <label>
        Type:
        <select name="type" onChange={handleOnChange} onBlur={handleOnChange} value={formData.type}>
          <option value={TAG_DIV}>div</option>
          <option value={TAG_SPAN}>span</option>
        </select>
      </label>
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  )
}

export default TagConfiguration
