/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date Created: 10-13-2020
 * Purpose: Renders the breadcrumbs
 */


import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'

export default () => 
<div className="container">
    <div className="row">
        <div className="col">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="category.html">Product</a></li>                    
                </ol>
            </nav>
        </div>
    </div>
</div>

    