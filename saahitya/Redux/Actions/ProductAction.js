import axios from 'axios';

export const getProduct = () => async dispatch => {
  try {
    dispatch({
      type: 'allProductRequest',
    });
    const {data} = await axios.get(
      'https://saahityapinodejs.herokuapp.com/api/v2/products',
    );
    dispatch({
      type: 'allProductSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'allProductFail',
      payload: error.response.data.message,
    });
  }
};

// Create Product --------Admin
export const createProduct =
  (name, description, price, images, category, Stock) => async dispatch => {
    try {
      dispatch({type: 'productCreateRequest'});

      const {data} = await axios.post(
        `https://saahityapinodejs.herokuapp.com/api/v2/product/new`,
        {name, description, price, images, category, Stock},
        {headers: {'Content-Type': 'application/json'}},
      );

      dispatch({
        type: 'productCreateSuccess',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'productCreateFail',
        payload: error.response.data.message,
      });
    }
  };
