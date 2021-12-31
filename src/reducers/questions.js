import { GET_QUESTIONS, SAVE_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type) {
        case GET_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION :
            console.log('%cquestion', 'text-decoration: underline', action)
            const { question } = action
            return {
                ...state,
                ...action.questions,
                [question.id]: question
            }
        default :
            return state
    }

}