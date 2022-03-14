import { GET_PRE_AUTHED_DEST } from "../actions/preAuthedDest";

export default function preAuthedDest(state = null, action) {
    switch(action.type) {
        case GET_PRE_AUTHED_DEST :
            return action.destination
        default :
            return state
    }
}