import { Middleware, AnyAction } from "redux";
import { RootState } from "../store";

export const customLoggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action: AnyAction) => {
    // Ensure action has a type
    if (!action.type) {
      return next(action);
    }

    console.log("type:  ", action.type);
    console.log("payload:  ", action.payload);
    console.log("currentState:  ", store.getState());

    next(action);

    console.log("next state:  ", store.getState());
  };
