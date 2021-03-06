import { Tag } from '../../types/tags'

export const SET_LOADING_TAGS = 'SET_LOADING_TAGS'
export const SET_ERROR_TAGS = 'SET_ERROR_TAGS'
export const SET_SUCCESS_TAGS = 'SET_SUCCESS_TAGS'

export const CREATE_TAG = 'CREATE_TAG'
export const UPDATE_ONE_TAG_BY_ID = 'UPDATE_ONE_TAG_BY_ID'
export const DELETE_ONE_TAG_BY_ID = 'DELETE_ONE_TAG_BY_ID'
export const SET_TAGS = 'SET_TAGS'
export const SET_ACTIVE_TAG = 'SET_ACTIVE_TAG'

export interface DefaultState {
  activeTag?: Tag
  flat: Tag[]
  tree?: Tag[] | undefined
  loading: boolean
  error: string
  success: string
}

interface setActiveTag {
  type: typeof SET_ACTIVE_TAG
  tag: Tag | undefined
}

interface setTags {
  type: typeof SET_TAGS
  tree: Tag[] | undefined
  flat: Tag[] | []
}

interface updateOneTagById {
  type: typeof UPDATE_ONE_TAG_BY_ID
  tree: Tag[] | undefined
  flat: Tag[] | []
}

interface deleteOneTagById {
  type: typeof DELETE_ONE_TAG_BY_ID
  tree: Tag[] | undefined
  flat: Tag[] | []
}

interface createTag {
  type: typeof CREATE_TAG
  tree: Tag[] | undefined
  flat: Tag[] | []
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
  | setActiveTag
  | setTags
  | setLoading
  | setError
  | setSuccess
