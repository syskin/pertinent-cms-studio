import { Tag } from './tags'

export interface Page {
  name: string
  id: string
  slug: string
  description: string
  activeTag?: Tag
  tags?: Tag[]
  tagsTree?: Tag[]
}
