import {
  CREATE_PAGE,
  DefaultAction,
  DefaultState,
  DELETE_ONE_PAGE_BY_ID,
  GET_PAGES,
  GET_ONE_PAGE_BY_ID,
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
  UPDATE_ONE_PAGE_BY_ID,
} from '../types/pages'

const initialState: DefaultState = {
  activePage: {
    name: '',
    id: '',
    slug: '',
    description: '',
  },
  pages: [],
}

const pagesReducer = (state = initialState, action: DefaultAction): DefaultState => {
  if (!action || !action.type) return state
  switch (action.type) {
    case GET_PAGES:
      return {
        ...state,
        pages: action.pages,
      }
    case GET_ONE_PAGE_BY_ID:
      return {
        ...state,
        activePage: action.page,
      }
    case UPDATE_ONE_PAGE_BY_ID:
      return {
        ...state,
        activePage: action.page,
      }
    case CREATE_PAGE:
      state.pages.push(action.page)
      return {
        ...state,
      }
    case DELETE_ONE_PAGE_BY_ID:
      state.pages = state.pages.filter((page) => page.id !== state.activePage.id)
      return {
        ...state,
        activePage: initialState.activePage,
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
