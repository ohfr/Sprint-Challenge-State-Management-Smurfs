import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as fetchReducer} from './reducers/fetchSmurf';
import { reducer as postReducer } from './reducers/postSmurf';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    fetch: fetchReducer,
    post: postReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
 document.getElementById("root"));
