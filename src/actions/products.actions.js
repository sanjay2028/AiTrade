import { 
    LISTING_SUCCESS, LISTING_FAILED
} from '../helpers/constants';

import { appLoadingStarts, appLoadingEnds } from './app.actions';
import productService from '../services';

const fetchListingSuccess = (payload) => ({
    type : LISTING_SUCCESS, payload
})

const fetchListingFailed = (payload) => ({
    type : LISTING_FAILED, payload
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


export { fetchListing }