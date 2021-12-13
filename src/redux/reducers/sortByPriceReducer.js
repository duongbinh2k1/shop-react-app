import { ActionTypes } from "../containts/action-types";

const initialState = {
  state: 0,
}

const sortByPriceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SORT: {
      return {...state, state: payload}
    }
    default:
      return state
  }
}

export default sortByPriceReducer