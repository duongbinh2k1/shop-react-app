import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import { cartReducer } from './cartProducts'
import { favoriteReducer } from './favoriteProduct'
import categoiesReducer from './categories'
import selectedCategoryReducer from './selectCategory'
import priceReducer from './priceReducer'
import sortByPriceReducer from './sortByPriceReducer'
import searchReducer from './searchReducer'

export const reducers = combineReducers({
  allProducts: productReducer,
  cartProducts: cartReducer,
  favoriteProducts: favoriteReducer,
  allCategories: categoiesReducer,
  selectCategory: selectedCategoryReducer,
  setPrice: priceReducer,
  setSort: sortByPriceReducer,
  setSearch: searchReducer,
})