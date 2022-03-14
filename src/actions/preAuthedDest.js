export const GET_PRE_AUTHED_DEST = 'GET_PRE_AUTHED_DEST'

export function getPreAuthedDest(destination) {
    return {
        type: GET_PRE_AUTHED_DEST,
        destination
    }
}