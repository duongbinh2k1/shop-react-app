import { ActionTypes } from "../containts/action-types";

const initialState = {
  price: []
}

const priceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRICE : {
      return {...state, price: payload}
    }
    default:
      return state
  }
}

export default priceReducer