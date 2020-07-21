
export default function(state={}, action) {
    switch(action.type){
        case 'GET_COINS':
            return {
                ...state,
                coin: action.payload
            }
        case 'GET_RATE':
            return {
                ...state,
                rate: action.payload
            }
        default:
            return state;
    }
}