import { Tag } from '../../types/tags'

export const SET_LOADING_TAGS = 'SET_LOADING_TAGS'
export const SET_ERROR_TAGS = 'SET_ERROR_TAGS'
export const SET_SUCCESS_TAGS = 'SET_SUCCESS_TAGS'

export const CREATE_TAG = 'CREATE_TAG'
export const UPDATE_ONE_TAG_BY_ID = 'UPDATE_ONE_TAG_BY_ID'
export const DELETE_ONE_TAG_BY_ID = 'DELETE_ONE_TAG_BY_ID'
export const SET_TAGS_TREE = 'SET_TAGS_TREE'

export interface DefaultState {
  tags: Tag[]
  tree?: Tag[] | null
  loading: boolean
  error: string
  success: string
}

interface setTagsTree {
  type: typeof SET_TAGS_TREE
  tree: Tag[] | null
}

interface updateOneTagById {
  type: typeof UPDATE_ONE_TAG_BY_ID
  tag: Tag
}

interface deleteOneTagById {
  type: typeof DELETE_ONE_TAG_BY_ID
}

interface createTag {
  type: typeof CREATE_TAG
  tag: Tag
}

interface setLoading {
  type: typeof SET_LOADING_TAGS
  loading: boolean
}

interface setError {
  type: typeof SET_ERROR_TAGS
  error: string
}

interface setSuccess {
  type: typeof SET_SUCCESS_TAGS
  success: string
}

export type DefaultAction =
  | updateOneTagById
  | deleteOneTagById
  | createTag
  | setTagsTree
  | setLoading
  | setError
  | setSuccess
