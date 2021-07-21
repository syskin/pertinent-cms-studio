import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { DefaultAction, GET_ALL, SET_ERROR, SET_LOADING } from '../types/pages'
import { getAll } from '../../api/pages'
import { toast } from 'react-toastify'

// Get all pages
export const getAllPages = (): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING, loading: true })

      const pages = await getAll()
      dispatch({ type: GET_ALL, pages: pages.data })
    } catch (error) {
      toast.error(error.message)
      dispatch({ type: SET_ERROR, error: error.message })
    } finally {
      dispatch({ type: SET_LOADING, loading: false })
    }
  }
}
