import { ActionTypes } from "../containts/action-types";

const initialState = {
  products: [],
};

export const favoriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_FAVORITE: {
      const newState = [...state.products];
      const checkProduct = newState.find(item => item.id === payload.id)
      if (!checkProduct) {
        newState.push(payload)
      }
      return { ...state, products: newState };
    }
    case ActionTypes.REMOVE_FAVORITE: {
      const newState = [...state.products];
      const oldProduct = newState.find(item => item.id === payload.id)
      const newState1 = newState.filter(item => item.id !== oldProduct.id)
      return { ...state, products: newState1 };
    }
    default:
      return state;
  }
};
