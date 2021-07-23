import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import {
  DefaultAction,
  GET_ALL,
  GET_ONE_BY_ID,
  DELETE_ONE_BY_ID,
  SET_ERROR,
  SET_LOADING,
} from '../types/pages'
import { getAll, getOneById, deleteOneById } from '../../api/pages'
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

// Set active page Id
export const getActivePage = (id: string): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch) => {
    try {
      const page = await getOneById(id)
      dispatch({ type: GET_ONE_BY_ID, page: page.data })
    } catch (error) {
      toast.error(error.message)
      dispatch({ type: SET_ERROR, error: error.message })
    }
  }
}

// Delete a page
export const deletePage = (): ThunkAction<void, RootState, null, DefaultAction> => {
  return async (dispatch, getState) => {
    try {
      const activePageId = getState().pages?.activePage?.id
      await deleteOneById(activePageId)
      dispatch({ type: DELETE_ONE_BY_ID })
    } catch (error) {
      toast.error(error.message)
      dispatch({ type: SET_ERROR, error: error.message })
    }
  }
}
