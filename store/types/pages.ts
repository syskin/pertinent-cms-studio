import { Page } from '../../types/pages'

export const GET_ALL = 'GET_ALL_PAGES'
export const GET_ONE_BY_ID = 'GET_ONE_PAGE_BY_ID'
export const UPDATE_ONE_BY_ID = 'UPDATE_ONE_PAGE_BY_ID'
export const DELETE_ONE_BY_ID = 'DELETE_ONE_PAGE_BY_ID'

export interface DefaultState {
  pages: Page[]
  activePage: Page
}

interface getAllPages {
  type: typeof GET_ALL
}

interface getOnePageById {
  type: typeof GET_ONE_BY_ID
  id: string
}

interface updateOnePageById {
  type: typeof UPDATE_ONE_BY_ID
  page: Page
}

interface deleteOnePageById {
  type: typeof DELETE_ONE_BY_ID
  id: string
}

export type DefaultAction = getAllPages | getOnePageById | updateOnePageById | deleteOnePageById
