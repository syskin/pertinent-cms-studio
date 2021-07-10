import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import defaultReducer from './reducers/default'
import sidebarReducer from './reducers/sidebar'
// import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
  states: defaultReducer,
  sidebar: sidebarReducer,
})

function configureStore() {
  const store = createStore(reducers, applyMiddleware(thunk))
  return { store }
}

export const { store } = configureStore()

export type RootState = ReturnType<typeof reducers>
export default configureStore
