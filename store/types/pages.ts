import { Page } from '../../types/pages'

export const SET_LOADING = 'SET_LOADING_PAGES'
export const SET_ERROR = 'SET_ERROR_PAGES'
export const SET_SUCCESS = 'SET_SUCCESS_PAGES'

export const CREATE_PAGE = 'CREATE_PAGE'
export const GET_PAGES = 'GET_ALL_PAGES'
export const GET_ONE_PAGE_BY_ID = 'GET_ONE_PAGE_BY_ID'
export const UPDATE_ONE_PAGE_BY_ID = 'UPDATE_ONE_PAGE_BY_ID'
export const DELETE_ONE_PAGE_BY_ID = 'DELETE_ONE_PAGE_BY_ID'

export interface DefaultState {
  pages: Page[]
  activePage: Page
  loading?: boolean
  error?: string
  success?: string
}

interface getAllPages {
  type: typeof GET_PAGES
  pages: Page[]
}

interface getOnePageById {
  type: typeof GET_ONE_PAGE_BY_ID
  page: Page
}

interface updateOnePageById {
  type: typeof UPDATE_ONE_PAGE_BY_ID
  page: Page
}

interface deleteOnePageById {
  type: typeof DELETE_ONE_PAGE_BY_ID
}

interface createPage {
  type: typeof CREATE_PAGE
  page: Page
}

interface setLoading {
  type: typeof SET_LOADING
  loading: boolean
}

interface setError {
  type: typeof SET_ERROR
  error: string
}

interface setSuccess {
  type: typeof SET_SUCCESS
  success: string
}

export type DefaultAction =
  | createPage
  | getAllPages
  | getOnePageById
  | updateOnePageById
  | deleteOnePageById
  | setLoading
  | setError
  | setSuccess
