import { Page } from '../../types/pages'

export const SET_LOADING = 'SET_LOADING_PAGES'
export const SET_ERROR = 'SET_ERROR_PAGES'
export const SET_SUCCESS = 'SET_SUCCESS_PAGES'
export const GET_ALL = 'GET_ALL_PAGES'
export const GET_ONE_BY_ID = 'GET_ONE_PAGE_BY_ID'
export const UPDATE_ONE_BY_ID = 'UPDATE_ONE_PAGE_BY_ID'
export const DELETE_ONE_BY_ID = 'DELETE_ONE_PAGE_BY_ID'

export interface DefaultState {
  pages: Page[]
  activePage: Page
  loading?: boolean
  error?: string
  success?: string
}

interface getAllPages {
  type: typeof GET_ALL
  pages: Page[]
}

interface getOnePageById {
  type: typeof GET_ONE_BY_ID
  page: Page
}

interface updateOnePageById {
  type: typeof UPDATE_ONE_BY_ID
  page: Page
}

interface deleteOnePageById {
  type: typeof DELETE_ONE_BY_ID
  page: Page
}

interface SetLoading {
  type: typeof SET_LOADING
  loading: boolean
}

interface SetError {
  type: typeof SET_ERROR
  error: string
}

interface SetSuccess {
  type: typeof SET_SUCCESS
  success: string
}

export type DefaultAction =
  | getAllPages
  | getOnePageById
  | updateOnePageById
  | deleteOnePageById
  | SetLoading
  | SetError
  | SetSuccess
