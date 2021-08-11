export const TAG_COMPONENT = 'COMPONENT'
export const TAG_PAGE = 'PAGE'

export const TAG_DIV = 'DIV'
export const TAG_SPAN = 'SPAN'

export interface Tag {
  id?: number
  wrapper_type: typeof TAG_COMPONENT | typeof TAG_PAGE
  wrapper_id: string
  parent_id?: number
  content?: string
  order: number
  depth: number
  type: typeof TAG_DIV | typeof TAG_SPAN
  children?: Tag[]
}
