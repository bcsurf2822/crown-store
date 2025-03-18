import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// Logger allows us to see what the state looks like before action dispatch what the action is, and what state looks like after

const customLoggerMiddleware = (store) => (next) => (action) => {
  // where we write the code specifiying what we want m.ware to do
  if (!action.type) {
    return next(action);
  }
  console.log("type:  ", action.type);
  console.log("payload:  ", action.payload);
  console.log("currentState:  ", store.getState());

  next(action);

  console.log("next state:  ", store.getState());
};

const middlewares = [customLoggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
