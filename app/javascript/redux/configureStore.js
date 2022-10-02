import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import greetings from "./greetings/greetings";

const rootReducer = combineReducers({ greetings });

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}
