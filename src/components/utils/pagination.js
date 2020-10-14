import React from 'react';
import {useSelector} from 'react-redux';


const PageTicker = ({label, page=false, isDisabled=true}) => {
    let className = isDisabled? "page-item disabled" : "page-item";
    return (
        <li className={className}>
            <a className="page-link" id={page} href="#">{label}</a>
        </li>
    )

}

const PageItem = ({label, isCurrent=false, isDisabled=0}) => {
    let className = isCurrent? "page-item active" : "page-item";
    if(isCurrent == true){
        className = "page-item active"
    } else if(isDisabled == true){
        className = "page-item disabled"
    } else {
        className = "page-item"
    }

    return (
    <li className={className}><a className="page-link" href="#">{label} {
        isCurrent && <span className="sr-only">(current)</span>
    }</a></li>
    )
}

const AppPagination = () => {    

    let paging_items = [];
    const total_pages = useSelector(state => state.listProducts.total_pages);
    const previous = useSelector(state => state.listProducts.previous);
    const next = useSelector(state => state.listProducts.next);
    console.log("previous", previous)
    console.log("Next", next)
    if(total_pages){        
        for(let page = 1; page<= total_pages; page++)
            paging_items.push(<PageItem key={`paged_${page}`} label={page} />)
        
        paging_items.unshift(<PageTicker key="paged_previous" label="Previous" page={previous} isDisabled={!!previous} />)
        paging_items.push(<PageTicker key="paged_next" label="Next" page={next} isDisabled={!!next} />)

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