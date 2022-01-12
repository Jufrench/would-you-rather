import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

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

function saveQuestionAnswer(question, authedUser, answer) {
    return {
        type: SAVE_ANSWER,
        question,
        authedUser,
        answer
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser, questions } = getState()
        const question = questions[qid]

        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(() => {
            dispatch(saveQuestionAnswer(question, authedUser, answer))
        })
    }
}