import { OPEN, CLOSE, DefaultState, DefaultAction } from '../types/sidebar'

const initialState: DefaultState = {
  state: false,
}

const defaultReducer = (state = initialState, action: DefaultAction): DefaultState => {
  if (!action || !action.type) return state
  switch (action.type) {
    case OPEN:
      return {
        state: true,
      }
    case CLOSE:
      return {
        state: false,
      }
    default:
      return state
  }
}

export default defaultReducer
