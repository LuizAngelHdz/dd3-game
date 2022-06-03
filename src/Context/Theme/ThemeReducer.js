import { CHANGE_THEME } from "../Types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: payload,
      };

    default:
      return state;
  }
};
