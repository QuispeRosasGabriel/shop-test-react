import axiosClient from "../config/axiosClient";
import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, SELECT_PRODUCT, DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR } from '../types'
import Swal from 'sweetalert2'

export const getProducts = () => async (dispatch) => {
    dispatch(downLoadProducts());
    try {
        const { data: { amiibo } } = await axiosClient.get('/amiibo/');
        const dataWithPrice = amiibo.map((val) => ({ ...val, price: 30 }));
        const newData = { dataWithPrice };
        dispatch(downLoadProductsSuccess(newData));
    } catch (error) {
        dispatch(downLoadProductsError(error));
    }
}

const downLoadProducts = () => ({
    type: GET_PRODUCTS,
    payload: true,
});

const downLoadProductsSuccess = (productsData) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: productsData,
});

const downLoadProductsError = (value) => ({
    type: GET_PRODUCTS_ERROR,
    payload: value,
});


export const addProductToCart = (product) => (dispatch) => {
    dispatch(selectProductToBuy(product))
    Swal.fire(
        'Good job!',
        'Product added succesfuly!',
        'success'
      )
}

const selectProductToBuy = (product) => ({
    type: SELECT_PRODUCT,
    payload: product
});

export const deleteSelectedProduct = (image) => (dispatch) => {
    dispatch(deleteProduct(image))
    try {
        dispatch(deleteProductSuccess())
    } catch (error) {
        dispatch(deleteProductError(error))
    }
}

const deleteProduct = (image) => ({
    type: DELETE_PRODUCT,
    payload: image
});

const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: true
})

const deleteProductError = (err) => ({
    type: DELETE_PRODUCT_ERROR,
    payload: err,
})