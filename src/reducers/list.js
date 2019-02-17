const defaultState = { driverList: [] };

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'IMPORT_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                driverList: action.payload
            }
        default:
            return state
    }
}