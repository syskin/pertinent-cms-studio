export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const ADD_PAGE = 'ADD_PAGE'
export const DELETE_PAGE = 'DELETE_PAGE'
export const EDIT_SITE = 'EDIT_SITE'

type formTypes = typeof ADD_PAGE | typeof DELETE_PAGE | typeof EDIT_SITE | null

export interface DefaultState {
  isOpen: boolean
  type: formTypes
}

interface Open {
  type: typeof OPEN_MODAL
  form_type: formTypes
}

interface Close {
  type: typeof CLOSE_MODAL
}

export type DefaultAction = Open | Close
export type FormTypes = formTypes
