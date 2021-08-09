import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { DefaultAction, SET_ERROR_TAGS, SET_LOADING_TAGS } from '../types/tags'
import { toast } from 'react-toastify'
import { Tag } from '../../types/tags'
import { create, updateOneById, getByFilter } from '../../api/tags'

// setActiveTag
export const setActiveTag = (filter: Tag): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING_TAGS, loading: true })
      const tags = await getByFilter(filter)
      console.log(tags)
      // get tag config through api call
    } catch (e) {
      toast.error(e.message)
      dispatch({
        type: SET_ERROR_TAGS,
        error: e.message,
      })
    } finally {
      dispatch({ type: SET_LOADING_TAGS, loading: false })
    }
  }
}

// Add a new tag
export const createTag = (payload: Tag): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING_TAGS, loading: true })

      const result = await create(payload)
      toast.success(result.data.message)
    } catch (e) {
      toast.error(e.message)
      dispatch({
        type: SET_ERROR_TAGS,
        error: e.message,
      })
    } finally {
      dispatch({ type: SET_LOADING_TAGS, loading: false })
    }
  }
}

// Update a tag with API call
export const updateTag = (
  id: string,
  payload: Tag
): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING_TAGS, loading: true })

      const result = await updateOneById(id, payload)
      toast.success(result.data.message)
    } catch (e) {
      toast.error(e.message)
      dispatch({
        type: SET_ERROR_TAGS,
        error: e.message,
      })
    } finally {
      dispatch({ type: SET_LOADING_TAGS, loading: false })
    }
  }
}
