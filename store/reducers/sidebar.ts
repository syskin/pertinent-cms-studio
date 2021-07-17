import { OPEN_SIDEBAR, CLOSE_SIDEBAR, DefaultState, DefaultAction } from '../types/sidebar'

const initialState: DefaultState = {
  isSidebarOpen: false,
}

const defaultReducer = (state = initialState, action: DefaultAction): DefaultState => {
  if (!action || !action.type) return state
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        isSidebarOpen: true,
      }
    case CLOSE_SIDEBAR:
      return {
        isSidebarOpen: false,
      }
    default:
      return state
  }
}

export default defaultReducer
