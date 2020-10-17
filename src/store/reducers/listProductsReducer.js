import { 
    APP_LOADING_STARTS, APP_LOADING_ENDS, LISTING_SUCCESS, LISTING_FAILED, PAGINATE_LIST, PAGE_LIMIT
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
    console.log("Type is %s", type)
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
        total_pages = Math.ceil(payload.length/PAGE_LIMIT);           
        return {
            ...state, products : payload, total_pages,current: 1, previous: null, next: 2
        }

        case LISTING_FAILED:                        
        return {
            ...state, error : payload, total_pages: 0, current: null, previous: null,next: null
        }

        case PAGINATE_LIST:                        

            if(state.products.length > 0){
                let {previous, next, current, total_pages } = state;
                previous = (payload - 1 > 0)? payload - 1  : null;

                next = parseInt(payload) + 1;
                if(next < total_pages) console.log("Condition 1")
                else console.log("Condition 2 %s", next)

                next = (next <= total_pages)? next  : null;
                current = payload;

                console.log("Updated previous = ", previous);
                console.log("Updated next = ", next);
                console.log("Updated current = ", current);
                console.log("Total pages = ", total_pages);

                return {
                    ...state, current, next, previous
                };
            }        
          return state;


        default:
            return state;
    }
}


export default listProductReducer;