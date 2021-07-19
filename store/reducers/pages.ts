import { DefaultState } from '../types/pages'

const initialState: DefaultState = {
  activePage: {
    name: '',
    id: '',
    slug: '',
    description: '',
  },
  pages: [],
}

const pagesReducer = (state = initialState): DefaultState => {
  return state
}

export default pagesReducer
