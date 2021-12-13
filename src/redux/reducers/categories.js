import { ActionTypes } from "../containts/action-types";

const initialState = {
  categories: []
}

const categoiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES: {
      return {...state, categories: payload}
    }
    default:
      return state
  }
}

export default categoiesReducer

