import { _saveQuestion } from '../utils/_DATA'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(question) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return _saveQuestion({
            ...question,
            author: authedUser
        }).then(formattedQuestion => {
            dispatch(saveQuestion(formattedQuestion))
        })
    }
}

// function answerQuestion() {

// }

// export function handleAnswerQuestion() {
//     dispatch(answerQuestion())
// }