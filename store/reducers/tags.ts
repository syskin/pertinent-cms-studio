import {
  DefaultAction,
  DefaultState,
  UPDATE_ONE_TAG_BY_ID,
  CREATE_TAG,
  DELETE_ONE_TAG_BY_ID,
  SET_ERROR_TAGS,
  SET_LOADING_TAGS,
  SET_SUCCESS_TAGS,
} from '../types/tags'

const initialState: DefaultState = {
  tags: [],
  loading: false,
  error: '',
  success: '',
}

const defaultReducer = (state = initialState, action: DefaultAction): DefaultState => {
  if (!action || !action.type) return state
  switch (action.type) {
    case UPDATE_ONE_TAG_BY_ID:
      return {
        ...state,
      }
    case CREATE_TAG:
      return {
        ...state,
      }
    case DELETE_ONE_TAG_BY_ID:
      return {
        ...state,
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
