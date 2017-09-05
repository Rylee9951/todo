import {createStore} from 'redux'
//change exampleReducer and path to what it is changed to
import todoReducer from './reducers/todoReducer'

const store = createStore(todoReducer)

export default store