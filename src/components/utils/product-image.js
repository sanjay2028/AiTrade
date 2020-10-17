import React from 'react';
import { useSelector } from 'react-redux';
import defaultProductThumb from '../../assets/images/fff.png';
import PropTypes from 'prop-types'

const ProductImage = (props) => {
    const data = useSelector(state => state.product.data);

    if(!!!data) return ""; 

    return(
        <div className="preview-pic tab-content">
			<div className="tab-pane active" id="pic-1">
                <img { ...{...props, src: data.image} } />
            </div>						  
		</div>
    );        
}
export default ProductImage;

ProductImage.propTypes = {
    src : PropTypes.string.isRequired
}

ProductImage.defaultProps = {
    src : defaultProductThumb
}