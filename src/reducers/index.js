import { combineReducers } from "redux"
import questions from "./questions"
import users from "./users"
import authedUser from "./authedUser"
import activeQuestion from "./activeQuestion"

export default combineReducers({
    questions,
    users,
    authedUser,
    activeQuestion
})