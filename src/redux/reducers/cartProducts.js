import { ActionTypes } from "../containts/action-types";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT: {
      const newState = [...state.products];
      const productOld = newState.find((item) => item.id === payload.id);
      if (productOld) {
        productOld.quality++;
      } else {
        payload.quality = 1;
        newState.push(payload);
      }
      return { ...state, products: newState };
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const newState = [...state.products];
      const productOld = newState.find((item) => item.id === payload.id);
      if (productOld.quality !== 1) {
        productOld.quality--;
        return { ...state, products: newState };
      } else {
        const newState1 = newState.filter(item => item.id !== productOld.id);
        return { ...state, products: newState1 };
      }
    }
    default:
      return state;
  }
};
