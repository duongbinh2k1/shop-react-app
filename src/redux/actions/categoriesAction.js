import { ActionTypes } from "../containts/action-types";

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories
  }
}

export const selectCategory = (catagory) => {
  return {
    type: ActionTypes.SELECT_CATEGORY,
    payload: catagory,
  }
}