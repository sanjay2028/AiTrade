import React, {Fragment} from 'react';
import {useSelector} from 'react-redux'

const ProductSummary = () => {
    const data = useSelector((state) => state.product.data);    

    if(!!!data) return ""; 

    let {id, title, price, description } = data;
    return(
        <Fragment>
            <h3 className="product-title">{title}</h3>
            <p className="product-description">{description}</p>
            <h4 className="price mb-5 mt-5">current price: <span>${price}</span></h4>		    
            <div className="action">
			    <button className="add-to-cart btn btn-default" type="button">Add to Cart</button>
				<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
			</div>
        </Fragment>
    );        
}
export default ProductSummary;