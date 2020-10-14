import React from 'react';
import Spinner from '../../assets/images/svg-loaders/rings.svg';
import {useSelector} from 'react-redux';

const Loader = () => {
        const { isLoading } = useSelector(state => state.app)
        return isLoading == true? (
                <div className="loader">
                        <div className="loader_content">
                        <img src={Spinner} alt="Loading ...." width="800" />
                        </div>
                </div>
        ) : ""
}
export default Loader;