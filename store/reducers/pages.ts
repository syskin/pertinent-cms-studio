import {
  DefaultAction,
  DefaultState,
  DELETE_ONE_BY_ID,
  GET_ALL,
  GET_ONE_BY_ID,
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
  UPDATE_ONE_BY_ID,
} from '../types/pages'

const initialState: DefaultState = {
  activePage: {
    name: '',
    id: '',
    slug: '',
    description: '',
    root: [],
  },
  pages: [],
}

const pagesReducer = (state = initialState, action: DefaultAction): DefaultState => {
  if (!action || !action.type) return state
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        pages: action.pages,
      }
    case GET_ONE_BY_ID:
      return {
        ...state,
      }
    case UPDATE_ONE_BY_ID:
      return {
        ...state,
      }
    case DELETE_ONE_BY_ID:
      return {
        ...state,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case SET_SUCCESS:
      return {
        ...state,
        success: action.success,
      }
    default:
      return state
  }
}

export default pagesReducer
