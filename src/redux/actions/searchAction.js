import { ActionTypes } from "../containts/action-types";

export const searchAction = (search) => {
  return {
    type: ActionTypes.SET_SEARCH,
    payload: search
  }
}