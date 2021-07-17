import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { DefaultAction, FormTypes, OPEN_MODAL, CLOSE_MODAL } from '../types/modal'

// Set open modal
export const openModal = (
  form_type: FormTypes
): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    dispatch({
      type: OPEN_MODAL,
      form_type,
    })
  }
}

// Set close modal
export const closeModal = (): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_MODAL,
    })
  }
}
