import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// Logger allows us to see what the state looks like before action dispatch what the action is, and what state looks like after
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { thunk } from "redux-thunk";

//mainly want to use 1 redux library saga / thunk
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

// Redux Persist Config
const persistConfig = {
  key: "root",
  // what do we want to store it into
  storage,
  // values that we don't want to persist
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [
  import.meta.env.MODE === "development" && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean); //'production' : will not log !

const composeEnhancer =
  (import.meta.env.MODE === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
