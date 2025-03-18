export const customLoggerMiddleware = (store) => (next) => (action) => {
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