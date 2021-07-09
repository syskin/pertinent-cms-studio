import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { DefaultAction, OPEN, CLOSE } from '../types/sidebar'

// Set loading
export const setLoading = (): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    dispatch({
      type: OPEN,
    })
  }
}

// Set error
export const setError = (): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    dispatch({
      type: CLOSE,
    })
  }
}
