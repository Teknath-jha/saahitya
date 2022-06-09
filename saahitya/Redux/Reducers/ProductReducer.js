import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const productsReducer = createReducer(initialState, {
  allProductRequest: state => {
    state.loading = true;
  },
  allProductSuccess: (state, action) => {
    (state.loading = false),
      (state.products = action.payload.products),
      (state.productsCount = action.payload.productsCount);
    state.resultPerPage = action.payload.resultPerPage;
    state.filteredProductsCount = action.payload.filteredProductsCount;
  },
  allProductFail:(state,action) => {
    state.loading = false;
    state.error = action.payload;
  }
  ,
  productCreateRequest: state => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  productCreateSuccess: (state = {product: {}}, action) => {
    state.loading = false;
    state.product = action.payload;
    state.isAuthenticated = true;
  },
  productCreateFail: (state = {product: {}}, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.product = null;
    state.error = action.payload;
  },
});


