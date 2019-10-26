import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_ERROR, DELETE_SMURF_ERROR, DELETE_SMURF_START, DELETE_SMURF_SUCCESS, POST_SMURF_ERROR, POST_SMURF_START, POST_SMURF_SUCCESS, EDIT_SMURF_START, EDIT_SMURF_SUCCESS, EDIT_SMURF_ERROR} from '../actions/smurf';

const initialState = {
    smurfs: [],
    loading: false,
    err: '',
    editing: false,
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_START: 
            return {
                ...state,
                loading: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                loading: false
            }
        case FETCH_SMURF_ERROR:
            return {
                ...state,
                err: action.payload,
                loading: false
            }
        case POST_SMURF_START:
            return {
                ...state,
                loading: true
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        case POST_SMURF_ERROR:
            return {
                ...state,
                err: action.payload
            }
        case DELETE_SMURF_START:
            return {
                ...state,
                loading: true
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        case DELETE_SMURF_ERROR:
            return {
                ...state,
                err: action.payload
            }
        case EDIT_SMURF_START:
            return {
                ...state,
                editing: !state.editing
            }
        case EDIT_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        case EDIT_SMURF_ERROR:
            return {
                ...state,
                err: action.payload
            }
        default:
            return state;
    }
}