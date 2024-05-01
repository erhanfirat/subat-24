import axios from "axios";
import { ProductActions } from "../reducers/productReducer";

export const setProductsActionCreator = (newProductList) => ({
  type: ProductActions.setProducts,
  payload: newProductList,
});

export const getProductsAction = () => (dispatch, getState) => {
  console.log("getProductsAction ******** ", getState().global.user.name);

  axios
    .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
    .then((res) => {
      dispatch(setProductsActionCreator(res.data));
    });
};
