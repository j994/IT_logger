import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  LOADING_TECH,
  TECHS_ERROR,
} from "../types";

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        loading: false,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };
    case LOADING_TECH:
      return {
        ...state,
        loading: true,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
