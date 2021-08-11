import axios from 'axios'
import Product from '../components/Product'

import {
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_FAIL,

    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_FAIL,

} from '../constants/productConstant'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        //  const {data} 

        dispatch({
            type: PRODUCT_LIST_SUCCESS,

        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.message.data.detail : error.message
        })
    }
}

// export const listProductDetails = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_DETAILS_REQUEST })
//         // const { data } = await axios.get(`/api/products/${id}`)

//         dispatch({
//             type: PRODUCT_DETAILS_SUCCESS,
//             // payload: data
//         })

//     } catch (error) {
//         dispatch({
//             type: PRODUCT_DETAILS_FAIL,
//             payload: error.response && error.response.data.message
//                 ? error.message.data.message : error.message
//         })
//     }
// }

export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST })

        const { userLogin: { userInfo }, } = getState

        // const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            // payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.message.data.message : error.message
        })
    }
}