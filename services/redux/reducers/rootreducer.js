import { combineReducers } from "redux"
import courseReducers from "../reducers/courseReducers"

export default combineReducers({
    course:courseReducers
})
