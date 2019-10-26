import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_ERROR} from '../actions/smurf';

const initialState = {
    smurfs: '',
    loading: false,
    err: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case POST_SMURF_START:
            return {
                ...state,
                loading: true
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                loading: false,
                smurfs: action.payload
            }
        case POST_SMURF_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

