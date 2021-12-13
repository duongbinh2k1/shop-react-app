import { ActionTypes } from "../containts/action-types"

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  }
}

export const addProduct = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: product
  }
}

export const removeProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: product
  }
}

export const addFavorite = (product) => {
  return {
    type: ActionTypes.ADD_FAVORITE,
    payload: product,
  }
}

export const removeFavorite = (product) => {
  return {
    type: ActionTypes.REMOVE_FAVORITE,
    payload: product
  }
}