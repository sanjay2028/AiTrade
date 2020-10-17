import { 
    LISTING_SUCCESS, 
    LISTING_FAILED, 
    PAGINATE_LIST,
    PRODUCT_LOADING_STARTS, 
    PRODUCT_LOADING_ENDS , 
    PRODUCT_FETCING_SUCCESS,
    PRODUCT_FETCING_FAILED ,
} from '../helpers/constants';

import { appLoadingStarts, appLoadingEnds } from './app.actions';
import productService from '../services';


/**
 * Single Product Actions
 */
const fetchProductStarts = { type: PRODUCT_LOADING_STARTS }
const fetchProductEnds = { type: PRODUCT_LOADING_ENDS }

const fetchProductSuccess = (payload) => ({
    type : PRODUCT_FETCING_SUCCESS, payload
})


const fetchProductFailed = (payload) => ({
    type : PRODUCT_FETCING_FAILED, payload
})


const fetchProductByID = (payload) => {        
    return function async (dispatch) {         
        dispatch(fetchProductStarts);        
        return productService
        .fetchProductById(payload)
        .then((data) => {
            if(!!data) dispatch(fetchProductSuccess(data))
            else dispatch(fetchProductFailed("Invalid product"))            
        }).catch(({flash}) => {                       
            dispatch(fetchProductFailed(flash))            
        }).finally(() => {            
            dispatch(fetchProductEnds)
        });        
    }
}



/** 
 * Product listing actions
 */
const fetchListingSuccess = (payload) => ({
    type : LISTING_SUCCESS, payload
})

const fetchListingFailed = (payload) => ({
    type : LISTING_FAILED, payload
})


/** 
 * Product pagination actions
 */
const pageinateResults = (payload) => ({
    type : PAGINATE_LIST, payload
})

const fetchListing = () => {        
    return function async (dispatch) {         
        dispatch(appLoadingStarts);        
        return productService
        .listProducts()
        .then((data) => {                                                
            dispatch(fetchListingSuccess(data))
        }).catch(({status_code, data, flash}) => {                       
            dispatch(fetchListingFailed(flash))            
        }).finally(() => {            
            dispatch(appLoadingEnds)
        });        
    }
}


const paginateList = (payload) => {        
    return function async (dispatch) {   
        console.log("Paylod is in action ", payload)      
        dispatch(pageinateResults(payload));                
    }
}


export { fetchListing, fetchProductByID, paginateList }