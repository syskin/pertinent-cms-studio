import { DefaultAction, DefaultState, OPEN, CLOSE } from '../types/modal'

const initialState: DefaultState = {
  isOpen: false,
  type: null,
}

const modalReducer = (state = initialState, action: DefaultAction): DefaultState => {
  if (!action || !action.type) return state
  switch (action.type) {
    case OPEN:
      return {
        type: action.form_type,
        isOpen: true,
      }
    case CLOSE:
      return {
        isOpen: false,
        type: null,
      }
    default:
      return state
  }
}

export default modalReducer
