import { combineReducers } from "redux"
import questions from "./questions"
import users from "./users"
import authedUser from "./authedUser"
import activeQuestion from "./activeQuestion"
import preAuthedDest from "./preAuthedDest"

export default combineReducers({
    questions,
    users,
    authedUser,
    activeQuestion,
    // preAuthedDest
})