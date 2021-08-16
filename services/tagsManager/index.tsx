import { Tag } from '../../types/tags'
import { sortArrayAsc } from '../../utils'

export const buildTagsTree = (tags: Tag[] | []): Tag[] => {
  return iteration(0, tags)
}

export const updateOneTag = (tag: Tag, tags: Tag[]): Tag[] => {
  // check order and depth for this parentId here
  // Update the tag correctly
  return tags
}

export const addNewTag = (tag: Tag, tags: Tag[]): Tag[] => {
  // check order and depth for this parentId here
  tags.push(tag)
  return tags
}

function iteration(depth = 0, tags: Tag[]) {
  const orderedTags: Tag[] = sortArrayAsc(
    tags.filter((tag) => tag.depth === depth),
    'order'
  )

  orderedTags.map((tag) => {
    if (hasChild(tag.id, tags)) {
      tag.children = iteration(depth + 1, tags)
    }
  })
  return orderedTags
}

function hasChild(parentId: number | undefined, tags: Tag[]) {
  const hasChild = tags.filter((tag) => tag.parent_id && tag.parent_id === parentId)
  return hasChild.length > 0
}
