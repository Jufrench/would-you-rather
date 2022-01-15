import { GET_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type) {
        case GET_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION :
            const { question } = action
            return {
                ...state,
                ...action.questions,
                [question.id]: question
            }
        case SAVE_ANSWER :
            return {
                ...state,
                [action.question.id]: {
                    ...state[action.question.id],
                    [action.answer]: {
                        ...state[action.answer],
                        votes: state[action.question.id][action.answer].votes.concat(action.authedUser),
                        text: state[action.question.id][action.answer].text
                    }
                }
            }
        default :
            return state
    }

}