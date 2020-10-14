import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
export default () => 
    <Fragment>
        
            <div className="col-12 text-center">
                <div className="fof-wrap pb-5">
                    <span className="display-1 d-block">404</span>
                    <div className="mb-4 lead">The page you are looking for was not found.</div>                        
                    <Link className="btn btn-link" to="/">Back to Main Page</Link>
                </div>                
            </div>
        
    </Fragment>

