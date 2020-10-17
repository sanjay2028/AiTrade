/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date : 13th Oct, 2020
 * Purpose: Manages pagination of the procuts page
 */

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { paginateList } from '../../actions/products.actions';

const PageTicker = ({label, paginate, page=false, isDisabled=true}) => {
    let className = isDisabled? "page-item disabled" : "page-item";
    return (
        <li className={className}>
            <a className="page-link" id={page} href="#" onClick={(event) => paginate(event)}>{label}</a>
        </li>
    )

}

const PageItem = ({label, paginate, isCurrent=false, isDisabled=0 }) => {

    let className = isCurrent? "page-item active" : "page-item";
    if(isCurrent == true){
        className = "page-item active"
    } else if(isDisabled == true){
        className = "page-item disabled"
    } else {
        className = "page-item"
    }

    return (
        <li className={className}>
            <a className="page-link" id={parseInt(label)} onClick={(event) => paginate(event)}>
                {label} {isCurrent && <span className="sr-only">(current)</span>}
            </a>
        </li>
    )
}

const AppPagination = () => {    

    let paging_items = [];
    const total_pages = useSelector(state => state.listProducts.total_pages);
    const current = useSelector(state => state.listProducts.current);
    const previous = useSelector(state => state.listProducts.previous);
    const next = useSelector(state => state.listProducts.next);    

    const dispatch = useDispatch();

    const onPaginateNext = (event) => {        
        event.preventDefault();
        if(!!next) dispatch(paginateList(next))
    }

    const onPaginatePrev = (event) => {        
        event.preventDefault();
        if(!!previous) dispatch(paginateList(previous))
    }

    const onPaginate = (event) => {        
        dispatch(paginateList(event.target.id))
    }

    if(total_pages){        
        for(let page = 1; page<= total_pages; page++)
            paging_items.push(<PageItem key={`paged_${page}`} label={page} paginate={onPaginate} isCurrent={current==page? true : false }/>)
        
        /**
         * Paginate Previous
         */
        paging_items.unshift(
            <PageTicker 
                key="paged_previous" 
                label="Previous" 
                page={previous} 
                isDisabled={!!!previous} 
                paginate={onPaginatePrev}  />
        );
        
        /**
         * Paginate Next
         */
        paging_items.push(
            <PageTicker 
                key="paged_next" 
                label="Next" 
                page={next} 
                isDisabled={!!!next} 
                paginate={onPaginateNext} />
            )

    }

    return !!total_pages? (
        <div className="col-12">
            <nav aria-label="...">
                <ul className="pagination">{paging_items}</ul>
            </nav>
        </div>
    ) : "No Pagination"
}
export default AppPagination;