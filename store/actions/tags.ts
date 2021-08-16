import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import {
  CREATE_TAG,
  DefaultAction,
  DELETE_ONE_TAG_BY_ID,
  SET_ACTIVE_TAG,
  SET_ERROR_TAGS,
  SET_LOADING_TAGS,
  SET_TAGS,
  UPDATE_ONE_TAG_BY_ID,
} from '../types/tags'
import { toast } from 'react-toastify'
import { Tag } from '../../types/tags'
import { create, updateOneById, getByFilter, deleteOneById } from '../../api/tags'
import { addNewTag, buildTagsTree, updateOneTag } from '../../services/tagsManager'

// Get tags by filter
export const getTags = (filter: any): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING_TAGS, loading: true })

      const result = await getByFilter(filter)
      dispatch({ type: SET_TAGS, flat: result?.data, tree: buildTagsTree(result?.data) })
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

// setActiveTag
export const setActiveTag = (
  tagId: number | undefined
): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_LOADING_TAGS, loading: true })
      const tag = getState().tags?.flat.filter((tag) => tag.id === tagId)
      dispatch({ type: SET_ACTIVE_TAG, tag: tag[0] })
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

// Delete one tag by id
export const deleteTag = (tagId: number): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_LOADING_TAGS, loading: true })
      await deleteOneById(tagId)
      const tags = getState().tags?.flat.filter((tag) => tag.id !== tagId)
      dispatch({ type: DELETE_ONE_TAG_BY_ID, flat: tags, tree: buildTagsTree(tags) })
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
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_LOADING_TAGS, loading: true })

      const result = await create(payload)
      let tags = getState().tags?.flat

      tags = addNewTag(result.data.tag, tags)

      dispatch({ type: CREATE_TAG, flat: tags, tree: buildTagsTree(tags) })
      toast.success(result.data.message)
      console.log(getState().tags)
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

// Update a tag
export const updateTag = (
  id: string,
  payload: Tag
): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_LOADING_TAGS, loading: true })

      /*
        Don't make api call here, just update tag properties and update the tree
        The API call will be done whn the user will click on a button to save
      */

      const result = await updateOneById(id, payload)
      let tags = getState().tags?.flat

      tags = updateOneTag(result.data.tag, tags)

      dispatch({ type: UPDATE_ONE_TAG_BY_ID, flat: tags, tree: buildTagsTree(tags) })
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
