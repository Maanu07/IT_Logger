import {
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
} from "./types";

// get the log items from the server
export function getLogs() {
  return async (dispatch) => {
    try {
      dispatch(setLoader());
      const res = await fetch("http://localhost:5000/logs");
      const data = await res.json();
      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.message,
      });
    }
  };
}

// async action creator (uses thunk middleware)
export function addLog(log) {
  return async (dispatch) => {
    try {
      dispatch(setLoader());
      // adding a new log to the server
      const res = await fetch("http://localhost:5000/logs", {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.message,
      });
    }
  };
}

export function deleteLog(id) {
  return async (dispatch) => {
    try {
      dispatch(setLoader());
      await fetch(`http://localhost:5000/logs/${id}`, {
        method: "DELETE",
      });
      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.message,
      });
    }
  };
}

export const updateLog = (log) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader());
      await fetch(`http://localhost:5000/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "CONTENT-TYPE": "application/json",
        },
      });
      dispatch({
        type: UPDATE_LOG,
        payload: log,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.messages,
      });
    }
  };
};

export function searchLogs(text) {
  return async (dispatch) => {
    try {
      dispatch(setLoader());
      const res = await fetch(`http://localhost:5000/logs?q=${text}`);
      const data = await res.json();
      dispatch({
        type: SEARCH_LOGS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.message,
      });
    }
  };
}

export function setCurrent(log) {
  return {
    type: SET_CURRENT,
    payload: log,
  };
}

// sets loading to true
function setLoader() {
  return {
    type: SET_LOADING,
  };
}
// action creator returns action object
