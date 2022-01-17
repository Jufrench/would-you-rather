export const SET_ACTIVE_QUESTION = 'SET_ACTIVE_QUESTION'

export function setActiveQuestion(activeQuestion) {
    return {
        type: SET_ACTIVE_QUESTION,
        activeQuestion
    }
}