/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date : 17th Oct, 2020
 * Purpose: Single Prodcut page
 */

import React, {useEffect, Fragment} from 'react';
import { ProductImage, ProductSummary, BodyLoader } from '../components/utils';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductByID } from '../actions/products.actions';
import { Redirect } from 'react-router-dom';
import ErrorPage from '../components/error';
export default (props) => {

    /**
     * Extract the product ID
     */
    const product_id = props.match.params.id;    

    /**
     * Get isLoading value. 
     * If yes, show loader 
     * else show the content as per response received
     */
    const isLoading = useSelector(state => state.product.isLoading);
    const error = useSelector(state => state.product.error);

    console.log("IsLoading", isLoading)
    console.log("Error", error)

    /**
     * dispatch instance to dispatch action
     */
    const dispatch = useDispatch();

    /**
     * Call dispatch on page initialization
     */
    useEffect(() => {        
        dispatch(fetchProductByID(product_id));
    },[])

    if(!!!isLoading  && !!error) return <ErrorPage />
    /**
     * Render component here
     */
    return isLoading? <BodyLoader /> : (
        <Fragment>
            <div className="preview col-md-6 mb-5 mt-2">
                <ProductImage src="http://placekitten.com/400/252" />
            </div>
            <div className="details col-md-6 mb-5 mt-2">
                <ProductSummary />
            </div>            
        </Fragment>        
    )
    
}
 