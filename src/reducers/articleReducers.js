import { SET_LOADING_STATUS } from "../actions/actionTypes";
export const intiState = {
  loading: false,
};

const articleReducer = (state = intiState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };

    default:
      return state;
  }
};

export default articleReducer;
