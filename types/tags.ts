export const TAG_COMPONENT = 'COMPONENT'
export const TAG_PAGE = 'PAGE'

export const TAG_DIV = 'DIV'
export const TAG_SPAN = 'SPAN'

export const EDIT_TAG = 'EDIT_TAG'
export const ADD_TAG = 'ADD_TAG'
export const ADD_CHILD_TAG = 'ADD_CHILD_TAG'

interface BreakPointStyle {
  xs: { [key: string]: string }
  sm: { [key: string]: string }
  md: { [key: string]: string }
  lg: { [key: string]: string }
  xl: { [key: string]: string }
}

export interface Tag {
  id?: number
  wrapper_type: typeof TAG_COMPONENT | typeof TAG_PAGE
  wrapper_id: string
  parent_id?: number | null
  content?: string
  style?: BreakPointStyle
  order: number
  depth: number
  type: typeof TAG_DIV | typeof TAG_SPAN
  children?: Tag[]
}
