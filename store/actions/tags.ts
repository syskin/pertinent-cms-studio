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
      const tags = getState().tags?.flat
      const filteredTags = tags.filter((tag) => tag.id !== tagId)
      const tree = buildTagsTree(filteredTags)
      dispatch({ type: DELETE_ONE_TAG_BY_ID, flat: filteredTags, tree })
      dispatch({ type: SET_ACTIVE_TAG, tag: undefined })
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
      let tags = getState().tags?.flat

      const currentLength = tags.filter((tag) => tag.depth === payload.depth).length

      payload.order = payload.order < currentLength ? currentLength : payload.order

      const result = await create(payload)

      tags = addNewTag(result.data.tag, tags)

      dispatch({ type: CREATE_TAG, flat: tags, tree: buildTagsTree(tags) })
      dispatch({ type: SET_ACTIVE_TAG, tag: result.data.tag })
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

// Update a tag
export const updateTag = (
  id: number | undefined,
  payload: Tag
): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch, getState) => {
    try {
      if (!id) throw new Error('Tag id is missing')

      dispatch({ type: SET_LOADING_TAGS, loading: true })

      /*
        Don't make api call here, just update tag properties and update the tree
        The API call will be done whn the user will click on a button to save
      */

      const result = await updateOneById(id, payload)
      const tags = getState().tags?.flat
      const tagToUpdate = tags.filter((tag) => tag.id === id)
      const updatedTags = updateOneTag({ ...tagToUpdate[0], ...payload }, tags)

      dispatch({ type: UPDATE_ONE_TAG_BY_ID, flat: updatedTags, tree: buildTagsTree(updatedTags) })
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

// Update a tag without persisting data
export const updateTagPersistless = (
  id: number | undefined,
  payload: Tag
): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch, getState) => {
    try {
      if (!id) throw new Error('Tag id is missing')

      dispatch({ type: SET_LOADING_TAGS, loading: true })
      const tags = getState().tags?.flat
      const tagToUpdate = tags.filter((tag) => tag.id === id)
      const updatedTags = updateOneTag({ ...tagToUpdate[0], ...payload }, tags)

      dispatch({ type: SET_ACTIVE_TAG, tag: tagToUpdate[0] })
      dispatch({ type: UPDATE_ONE_TAG_BY_ID, flat: updatedTags, tree: buildTagsTree(updatedTags) })
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
