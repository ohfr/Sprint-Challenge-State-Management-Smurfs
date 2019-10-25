import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_ERROR } from '../actions/smurf';

const initialState = {
    smurfs: '',
    loading: false,
    err: ''
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
        default:
            return state;
    }
}