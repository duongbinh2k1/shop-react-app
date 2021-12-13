import { ActionTypes } from "../containts/action-types";

export const setPrice = (price) => {
  return {
    type: ActionTypes.SET_PRICE,
    payload: price,
  }
}
