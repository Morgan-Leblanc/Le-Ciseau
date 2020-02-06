import { createStore, combineReducers } from 'redux'
import storeHaircut from "./Reducers/propsReducers"

// combining two reducers into a single reducer
const reducer = combineReducers({
    storeHaircut,

})
const store = createStore(reducer)

export default store