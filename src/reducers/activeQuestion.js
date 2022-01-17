import { SET_ACTIVE_QUESTION } from '../actions/activeQuestion'

export default function questions(state = {}, action) {
    switch(action.type) {
        case SET_ACTIVE_QUESTION :
            console.log('action:', action)
            return action.activeQuestion
        default :
            return state
    }

}