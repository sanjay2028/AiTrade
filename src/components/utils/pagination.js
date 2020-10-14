import React from 'react';
import {useSelector} from 'react-redux';


const PageItem = ({label, isCurrent=false, isDisabled=false}) => {
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

    const total_pages = useSelector(state => state.listProducts.total_pages);
    const previous = useSelector(state => state.listProducts.previous);
    const next = useSelector(state => state.listProducts.next);

    let paging_items = [];


    if(total_pages){
        for(let page = 1; page<= total_pages; page++){
            paging_items.push(<PageItem label={page} />)
        }
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