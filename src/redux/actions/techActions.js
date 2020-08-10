import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  LOADING_TECH,
  TECHS_ERROR,
} from "../types";

export const getTechs = () => async (dispatch) => {
  dispatch({ type: LOADING_TECH });

  try {
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};

export const addTech = (newTech) => async (dispatch) => {
  dispatch({ type: LOADING_TECH });

  try {
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(newTech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteTech = (techID) => async (dispatch) => {
  dispatch({ type: LOADING_TECH });

  try {
    await fetch(`/techs/${techID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: DELETE_TECH,
      payload: techID,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};
