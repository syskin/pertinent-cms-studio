import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { DefaultAction, SET_ERROR, SET_LOADING, SET_SUCCESS } from '../types/default'
import { toast } from 'react-toastify'

// Set loading
export const setLoading = (loading: boolean): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      loading,
    })
  }
}

// Set error
export const setError = (
  errorMessage: string
): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    toast.error(errorMessage)
    dispatch({
      type: SET_ERROR,
      error: errorMessage,
    })
  }
}

// Set success
export const setSuccess = (
  successMessage: string
): ThunkAction<void, RootState, null, DefaultAction> => {
  return (dispatch) => {
    toast.success(successMessage)
    dispatch({
      type: SET_SUCCESS,
      success: successMessage,
    })
  }
}
