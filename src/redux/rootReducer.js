import { combineReducers } from 'redux'
import todos from './reducers/todos'
import user from './reducers/user'
import Albums from './reducers/albums'

const rootReducer = combineReducers({
  todos,
  user,
  Albums,
})

export default rootReducer
