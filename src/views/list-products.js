import React, {useEffect, Fragment} from 'react';
import { ProductItem, AppPagination } from '../components/utils';
import {useSelector, useDispatch } from 'react-redux';
import { fetchListing } from '../actions/products.actions';
export default () => {

    let products = useSelector(state => state.listProducts.products)
    const current = useSelector(state => state.listProducts.current)
    const dispatch = useDispatch()

    if(products.length > 0) {
        products = products.slice(0, 6*current)
    }

    useEffect(() => {
        dispatch(fetchListing());        
    }, [])
    
    let output = products.map((item, index) => 
        <div key={`prd_${index}`} className="col-12 col-md-6 col-lg-4">
            <ProductItem {...item} key={`product_id_${item.id}`} />
        </div>
    )

    return (
        <Fragment>
            {output}
            <AppPagination />
        </Fragment>
        
    )
    
}
