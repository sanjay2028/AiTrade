/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date : 17th Oct, 2020
 * Purpose: Products listing page
 */

import React, {useEffect, Fragment} from 'react';
import { ProductItem, AppPagination } from '../components/utils';
import {useSelector, useDispatch } from 'react-redux';
import { fetchListing } from '../actions/products.actions';
import { PAGE_LIMIT } from '../helpers/constants';
export default () => {

    let products = useSelector(state => state.listProducts.products)
    const current = useSelector(state => state.listProducts.current)
    const dispatch = useDispatch()

    /**
     * Paginate the results by calculating offset and limit
     */
    let offset = PAGE_LIMIT * (current - 1) + 1;
    let limit = PAGE_LIMIT * current + 1;    

    if(products.length > 0)  products = products.slice(offset, limit)


    /**
     * Load the items on page initialization
     */
    useEffect(() => { dispatch(fetchListing()) }, [])
    
    let output = products.map((item, index) => 
        <div key={`prd_${index}`} className="col-12 col-md-6 col-lg-4">
            <ProductItem {...item} key={`product_id_${item.id}`} />
        </div>
    )

    /**
     * Render component here
     */
    return (
        <Fragment>
            {output}
            <AppPagination />
        </Fragment>        
    )
    
}
 