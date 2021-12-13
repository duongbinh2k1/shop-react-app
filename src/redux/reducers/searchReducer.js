import { ActionTypes } from "../containts/action-types";

const initialState = {
  search: ''
}

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SEARCH:
      return {...state, search: payload}
    default:
      return state
  }
}

export default searchReducer