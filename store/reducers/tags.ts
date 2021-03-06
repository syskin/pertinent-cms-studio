import { buildTagsTree } from '../../services/tagsManager'
import {
  DefaultAction,
  DefaultState,
  UPDATE_ONE_TAG_BY_ID,
  SET_TAGS,
  CREATE_TAG,
  DELETE_ONE_TAG_BY_ID,
  SET_ERROR_TAGS,
  SET_LOADING_TAGS,
  SET_SUCCESS_TAGS,
  SET_ACTIVE_TAG,
} from '../types/tags'

const initialState: DefaultState = {
  flat: [],
  loading: false,
  error: '',
  success: '',
}

const defaultReducer = (state = initialState, action: DefaultAction): DefaultState => {
  if (!action || !action.type) return state
  switch (action.type) {
    case UPDATE_ONE_TAG_BY_ID:
    case DELETE_ONE_TAG_BY_ID:
    case CREATE_TAG:
    case SET_TAGS:
      return {
        ...state,
        tree: buildTagsTree(action.flat),
        flat: action.flat,
      }
    case SET_ACTIVE_TAG:
      return {
        ...state,
        activeTag: action.tag,
      }
    case SET_LOADING_TAGS:
      return {
        ...state,
        loading: action.loading,
      }
    case SET_ERROR_TAGS:
      return {
        ...state,
        error: action.error,
      }
    case SET_SUCCESS_TAGS:
      return {
        ...state,
        success: action.success,
      }
    default:
      return state
  }
}

export default defaultReducer
