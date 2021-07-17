export const OPEN = 'OPEN'
export const CLOSE = 'CLOSE'

export const ADD_PAGE = 'ADD_PAGE'
export const DELETE_PAGE = 'DELETE_PAGE'
export const EDIT_SITE = 'EDIT_SITE'

export interface DefaultState {
  isOpen: boolean
  type: typeof ADD_PAGE | typeof DELETE_PAGE | typeof EDIT_SITE | null
}

interface Open {
  type: typeof OPEN
  form_type: typeof ADD_PAGE | typeof DELETE_PAGE | typeof EDIT_SITE
}

interface Close {
  type: typeof CLOSE
}

export type DefaultAction = Open | Close
