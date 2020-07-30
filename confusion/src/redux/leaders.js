import * as ActionTypes from "./ActionTypes";

export const Leaders = (
  state = { isLoading: true, errMess: null, leaders: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload,
      };

    case ActionTypes.LEADERS_LOADING:
      return { ...state, isLoading: true, errMess: null, leaders: [] };

    case ActionTypes.LEADERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.ADD_FEEDBACK:
      var feedback = action.payload;
      return { ...state, feedback: state.feedback.concat(feedback) };

    default:
      return state;
  }
};
