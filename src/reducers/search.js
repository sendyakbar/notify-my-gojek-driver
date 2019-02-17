const defaultState = { search: '' }

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'SEARCHING':
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}