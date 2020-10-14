import { 
    APP_LOADING_STARTS, APP_LOADING_ENDS, LISTING_SUCCESS, LISTING_FAILED
} from '../../helpers/constants';

const initialState = {
    products : [],    
    current : null,
    total_pages : 0,
    previous: null,    
    next: null,    
    error: null
}


const listProductReducer = (state=initialState, {type, payload=null}) => {    
    let total_pages;
    switch(type){
        case APP_LOADING_STARTS:                        
            return {
                ...state, isLoading : true
            }
        
        case APP_LOADING_ENDS:                        
            return {
                ...state, isLoading : false
            }
            
        case LISTING_SUCCESS:             
        total_pages = Math.ceil(payload.length/6);           
        return {
            ...state, products : payload, total_pages,current: 1, previous: null, next: 2
        }

        case LISTING_FAILED:                        
        return {
            ...state, error : payload, total_pages: 0, current: null, previous: null,next: null
        }

        default:
            return state;
    }
}


export default listProductReducer;