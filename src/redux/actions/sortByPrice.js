import { ActionTypes } from "../containts/action-types";

export const sortByPriceAction = (state) => {
  return {
    type: ActionTypes.SET_SORT,
    payload: state,
  }
}