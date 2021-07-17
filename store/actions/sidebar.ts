import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { DefaultAction, OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../types/sidebar'

// Open sidebar
export const updateState = (state: boolean): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    if (state === false) dispatch({ type: CLOSE_SIDEBAR })
    else dispatch({ type: OPEN_SIDEBAR })
  }
}
