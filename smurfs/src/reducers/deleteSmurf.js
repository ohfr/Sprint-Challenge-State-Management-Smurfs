import { DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_ERROR } from '../actions/smurf';

const initialState = {
    smurfs: [],
    loading: false,
    err: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case DELETE_SMURF_START:
            return {
                ...state,
                loading: true
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
            }
        case DELETE_SMURF_ERROR:
            return {
                ...state,
                err: action.payload
            }
    }
}