import axios from 'axios';
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_ERROR = "POST_SMURF_ERROR";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_ERROR = "DELETE_SMURF_ERROR";

export const EDIT_SMURF_START = "EDIT_SMURF_START";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_ERROR = "EDIT_SMURF_ERROR";
export const EDIT_SMURF_CANCEL = "EDIT_SMURF_CANCEL";



export const fetchSmurf = () => dispatch => {
    dispatch({type: FETCH_SMURF_START});

    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_SMURF_ERROR, payload: err }))
}

export const postSmurf = (smurf) => dispatch => {
    dispatch({type: POST_SMURF_START})

    axios.post(`http://localhost:3333/smurfs`, smurf)
        .then(res => dispatch({ type:POST_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_SMURF_ERROR, payload: err }))
}

export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_SMURF_ERROR, payload: err}))
}

export const editSmurf = (id, smurf) => dispatch => {

    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
        .then(res => dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: EDIT_SMURF_ERROR, payload: err }))
}

export const setEdit = (smurf) => dispatch => {
    dispatch({ type: EDIT_SMURF_START, payload: smurf })
}

export const cancelEdit = () => dispatch => {
    dispatch({ type: EDIT_SMURF_CANCEL })
}