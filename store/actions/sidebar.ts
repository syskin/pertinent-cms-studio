import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { DefaultAction, OPEN, CLOSE } from '../types/sidebar'

// Open sidebar
export const updateState = (): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch, getState) => {
    const sidebarState = getState().sidebar.state

    if (sidebarState === true) dispatch({ type: CLOSE })
    else dispatch({ type: OPEN })
  }
}
