export const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'

export interface DefaultState {
  isSidebarOpen: boolean
}

interface Open {
  type: typeof OPEN_SIDEBAR
}

interface Close {
  type: typeof CLOSE_SIDEBAR
}

export type DefaultAction = Open | Close
