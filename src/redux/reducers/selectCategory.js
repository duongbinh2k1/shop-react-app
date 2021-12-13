import { ActionTypes } from "../containts/action-types";

const initialState = {
  category: [],
};

const selectedCategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_CATEGORY:
      return { ...state, category: payload };
    default:
      return state;
  }
};

export default selectedCategoryReducer;
