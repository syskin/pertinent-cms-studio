import { DefaultAction, DefaultState, OPEN_MODAL, CLOSE_MODAL } from '../types/modal'

const initialState: DefaultState = {
  isOpen: false,
  type: null,
}

const modalReducer = (state = initialState, action: DefaultAction): DefaultState => {
  if (!action || !action.type) return state
  switch (action.type) {
    case OPEN_MODAL:
      return {
        type: action.form_type,
        isOpen: true,
      }
    case CLOSE_MODAL:
      return {
        isOpen: false,
        type: null,
      }
    default:
      return state
  }
}

export default modalReducer
