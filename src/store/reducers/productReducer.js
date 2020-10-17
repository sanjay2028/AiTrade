import { 
    PRODUCT_LOADING_STARTS, PRODUCT_LOADING_ENDS , PRODUCT_FETCING_SUCCESS,
    PRODUCT_FETCING_FAILED  
} from '../../helpers/constants';

const initialState = {
    data : {},    
    isLoading : true,   
    error: null 
}


const productReducer = (state=initialState, {type, payload=null}) => {            
    switch(type){
        case PRODUCT_LOADING_STARTS:                        
            return {
                ...state, isLoading : true
            }
        
        case PRODUCT_LOADING_ENDS:                        
            return {
                ...state, isLoading : false
            }
            
        case PRODUCT_FETCING_SUCCESS:                     
        return {
            ...state, data : payload, error: null
        }

        case PRODUCT_FETCING_FAILED:                        
        return {
            ...state, data: {}, error: payload
        }

        default:
            return state;
    }
}


export default productReducer;