import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { PRODUCT_DEFAULT_EXCERPT } from '../../helpers/constants'
import product_image_placeholder from '../../assets/images/fff.png';

const ProductThumb = (props) => 
        <Fragment>
            <img className="card-img-top prd-thumb" {...props} />
            <img className="card-img-top placeholder" src={product_image_placeholder} alt={props.title} />
        </Fragment>
    

const ProductItem =  ({image, title, description, price, id:product_id}) => {
    title = title.length > 42? title.substr(0, 39) + "..." : title;
    description = description.length > 150? description.substr(0, 147) + " ..." : description;
    return( 
        <div className="card mb-3">
            <div className="image-wrap"><ProductThumb src={image} alt={title} /></div>                            
            <div className="card-body">
                <h4 className="card-title product-title"><Link to={`/product/${product_id}`}>{title}</Link></h4>
                <p className="card-text product-card-description">{description}</p>
                <div className="row">
                    <div className="col"><p className="btn btn-danger btn-block">{price} $</p></div>
                    <div className="col">
                        <Link to={`/product/${product_id}`} className="btn btn-success btn-block">View Details</Link>                                    
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductItem.propstypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,    
}

ProductItem.defaultProps = {
    image : product_image_placeholder,
    title: "New Product",
    description: PRODUCT_DEFAULT_EXCERPT,
    price: "0.00",
    id: "0",   
}

export default ProductItem;