import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from "../types";

export const getLogs = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const addLog = (newLog) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(newLog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteLog = (logID) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    await fetch(`/logs/${logID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: DELETE_LOG,
      payload: logID,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const updateLog = (id, log) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await fetch(`/logs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(log),
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const searchLogs = (text) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const setCurrent = (logID) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: logID,
  });
};

export const clearCurrent = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};
