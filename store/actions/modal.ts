import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { DefaultAction, OPEN, CLOSE, DELETE_PAGE, ADD_PAGE, EDIT_SITE } from '../types/modal'

// Set open modal
export const open = (
  form_type: typeof DELETE_PAGE | typeof ADD_PAGE | typeof EDIT_SITE
): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    dispatch({
      type: OPEN,
      form_type,
    })
  }
}

// Set close modal
export const close = (): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    dispatch({
      type: CLOSE,
    })
  }
}
