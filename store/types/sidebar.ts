export const OPEN = 'OPEN'
export const CLOSE = 'CLOSE'

export interface DefaultState {
  state: boolean
}

interface Open {
  type: typeof OPEN
}

interface Close {
  type: typeof CLOSE
}

export type DefaultAction = Open | Close
