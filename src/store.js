import {createStore} from 'redux'
//change exampleReducer and path to what it is changed to
import exampleReducer from './reducers/exampleReducer'

const store = createStore(exampleReducer)

export default store