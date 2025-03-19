export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

// You want to make sure you define actions with and without a payload
export type Action<T> {
  type: T
};

export function createAction<T extends string,  P>(type: T, payload: P): ActionWithPayload<T, P>

export function createAction<T extends string>(type: T, payload: void): Action <T>

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload}
}
// export const createAction = (type, payload) => ({
//   type,
//   payload,
// });


