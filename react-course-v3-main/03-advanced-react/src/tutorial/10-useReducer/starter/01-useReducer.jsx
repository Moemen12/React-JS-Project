import React, { useEffect, useReducer, useState } from "react";
import { data } from "../../../data";

const defaultState = {
  people: data,
};

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (action.type === RESET_LIST) {
    return { people: data };
  } else if (action.type === REMOVE_ITEM) {
    const updatedPeople = state.people.filter(
      (element) => element.id !== action.payload
    );
    return { ...state, people: updatedPeople };
  }

  throw new Error(`No matching "${action.type}"- action type`);
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const remove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const reset_clear = () => {
    state.people.length
      ? dispatch({ type: CLEAR_LIST })
      : dispatch({ type: RESET_LIST });
  };

  return (
    <div className="container">
      {state.people.map((element) => {
        return (
          <div key={element.id}>
            <p>{element.name}</p>
            <button
              onClick={() => {
                remove(element.id);
              }}
              className="btn"
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={reset_clear}
        style={{ marginTop: "2rem" }}
      >
        {state.people.length ? "clear" : "restore"}
      </button>
    </div>
  );
};

export default ReducerBasics;
