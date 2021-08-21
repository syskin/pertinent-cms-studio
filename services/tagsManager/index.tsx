import { Tag } from '../../types/tags'
import { sortArrayAsc } from '../../utils'

export const buildTagsTree = (tags: Tag[] | [] | undefined): Tag[] => {
  if (!tags) return []
  return iteration(0, tags)
}

export const updateOneTag = (tag: Tag, tags: Tag[]): Tag[] => {
  const updatedTags = tags.filter((tagElement) => tag.id !== tagElement.id)
  updatedTags.push(tag)
  // check order and depth for this parentId here
  // Update the tag correctly
  return updatedTags
}

export const addNewTag = (tag: Tag, tags: Tag[]): Tag[] => {
  // check order and depth for this parentId here
  tags.push(tag)
  return tags
}

function iteration(depth = 0, tags: Tag[], parentId: number | undefined = undefined) {
  let filteredTags: Tag[] = []

  if (parentId) {
    filteredTags = tags.filter((tag) => tag.parent_id === parentId && tag.depth === depth)
  } else {
    filteredTags = tags.filter((tag) => tag.depth === depth)
  }

  const orderedTags: Tag[] = sortArrayAsc(filteredTags, 'order')

  orderedTags.map((tag) => {
    // Ensure no children has already been declared
    tag.children = []

    if (hasChild(tag.id, tags)) {
      tag.children = iteration(depth + 1, tags, tag.id)
    }
  })
  return orderedTags
}

function hasChild(parentId: number | undefined, tags: Tag[]) {
  const hasChild = tags.filter((tag) => tag.parent_id && tag.parent_id === parentId)
  return hasChild.length > 0
}
