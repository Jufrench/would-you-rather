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
            console.log('save question:', action)
            return {
                ...state,
                ...action.questions,
                [question.id]: question
            }
        case SAVE_ANSWER :
            // console.log('action:', action)
            // console.log('action answer:', action.answer)
            // console.log('action question:', action.question.id)
            // console.log('state:', state)
            
            // console.log('test2:', state[action.question.id][action.answer].votes.concat(action.authedUser))

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