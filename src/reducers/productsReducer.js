import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_PRODUCTS, SELECT_PRODUCT, DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR } from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false,
    selectedProducts: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProducts: [...state.selectedProducts, action.payload]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                selectedProducts: state.selectedProducts.filter((product, idx) => product.image === action.payload ? product.image = action.payload : product.image)
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}