import { deepEqual } from "./utils";
import React, { useState } from 'react';

export const stateService = (initialState = {}) => {
  let state = initialState;
  const listeners: any = [];

  const handleChange = (newState: any, update: any) => {
    listeners.forEach((listener: any) => {
      listener.call(null, newState, update);
    });
  };

  const addListener = (listener: any) => {
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
