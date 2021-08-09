export const TAG_COMPONENT = 'COMPONENT'
export const TAG_PAGE = 'PAGE'

export const TAG_DIV = 'DIV'
export const TAG_SPAN = 'SPAN'

export interface Tag {
  id?: string
  wrapperType: typeof TAG_COMPONENT | typeof TAG_PAGE
  wrapperId: string
  parentId?: string
  content?: string
  order: number
  depth: number
  type: typeof TAG_DIV | typeof TAG_SPAN
}
