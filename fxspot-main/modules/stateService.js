import { deepEqual } from "./deepEqual.js";

export function stateService(initialState = {}) {
  let state = initialState;
  const listeners = [];

  const handleChange = (newState, update) => {
    listeners.forEach((listener) => {
      listener.call(null, newState, update);
    });
  };

  const addListener = (listener) => {
    listeners.push(listener);

    // immediate
    handleChange(state, state);
  };

  const getState = () => state;

  const setState = (update = {}) => {
    const newState = { ...state, ...update };

    if (!deepEqual(newState, state)) {
      handleChange(newState, update);
      state = newState;
    }
  };

  return {
    setState,
    getState,
    addListener,
  };
}
