import { createStore, combineReducers } from 'redux'

// reducers
import List from '../reducers/list'
import Search from '../reducers/search'

const reducers = combineReducers({
    List,
    Search
})

const store = createStore(reducers)

export default store