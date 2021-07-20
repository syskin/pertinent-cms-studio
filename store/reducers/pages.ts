import {
  DefaultAction,
  DefaultState,
  DELETE_ONE_BY_ID,
  GET_ALL,
  GET_ONE_BY_ID,
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
    default:
      return state
  }
}

export default pagesReducer
