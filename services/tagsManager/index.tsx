import { Tag } from '../../types/tags'
import { sortArrayAsc } from '../../utils'

export const buildTagsTree = (tags: Tag[] | []): Tag[] => {
  return iteration(0, tags)
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
