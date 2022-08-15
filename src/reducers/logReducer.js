import {
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  ADD_LOG,
  SET_CURRENT,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "../actions/types";

const initialState = {
  logs: [],
  current: null,
  loader: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loader: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loader: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id != action.payload),
        loader: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        loader: false,
        logs: state.logs.map((log) => {
          if (log.id == action.payload.id) return action.payload;
          return log;
        }),
      };

    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
        loader: false,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loader: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
