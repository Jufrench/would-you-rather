import { _getQuestions, _getUsers } from '../utils/_DATA'
import { getQuestions } from '../actions/questions'
import { getUsers } from '../actions/users'

export default function handleInitialData() {
    return dispatch => {
        return Promise.all([
            _getQuestions(),
            _getUsers(),
        ]).then(([questions, users]) => {
            dispatch(getQuestions(questions))
            dispatch(getUsers(users))
        })
    }
}