import { DefaultAction, DefaultState, SET_ERROR, SET_LOADING, SET_SUCCESS } from '../types/tags'

const initialState: DefaultState = {
  loading: false,
  error: '',
  success: '',
}

const defaultReducer = (state = initialState, action: DefaultAction): DefaultState => {
  if (!action || !action.type) return state
  switch (action.type) {
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

export default defaultReducer
