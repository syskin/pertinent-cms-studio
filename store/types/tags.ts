export const SET_LOADING = 'SET_TAGS_LOADING'
export const SET_ERROR = 'SET_TAGS_ERROR'
export const SET_SUCCESS = 'SET_TAGS_SUCCESS'

export interface DefaultState {
  loading: boolean
  error: string
  success: string
}

interface SetLoading {
  type: typeof SET_LOADING
  loading: boolean
}

interface SetError {
  type: typeof SET_ERROR
  error: string
}

interface SetSuccess {
  type: typeof SET_SUCCESS
  success: string
}

export type DefaultAction = SetLoading | SetError | SetSuccess
