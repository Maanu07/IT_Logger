import {
  ADD_TECH,
  TECHS_ERROR,
  GET_TECHS,
  SET_LOADING,
  DELETE_TECH,
} from "./types";

// add technician to the server
export const addTech = (tech) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader());
      const res = await fetch("http://localhost:5000/techs", {
        method: "POST",
        body: JSON.stringify(tech),
        headers: {
          "CONTENT-TYPE": "application/json",
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
        payload: error.message,
      });
    }
  };
};

// get the technicians from the server
export const getTechs = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader());
      // server pe request jayegi to get techs
      const res = await fetch("http://localhost:5000/techs");
      const data = await res.json();
      dispatch({
        type: GET_TECHS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TECHS_ERROR,
        payload: error.message,
      });
    }
  };
};

// delete the technician from the server
export const deleteTech = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:5000/techs/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.message,
    });
  }
};

// set loader to true
const setLoader = () => {
  return {
    type: SET_LOADING,
  };
};
