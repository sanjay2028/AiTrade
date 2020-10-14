/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date Created: 10-13-2020
 * Purpose: Renders the branding / logo section
 */


import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'

export default () => 
    <Fragment>
        <Link className="navbar-brand" to="/">Simple Ecommerce</Link>        
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarsExampleDefault" 
            aria-controls="navbarsExampleDefault" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    </Fragment>

    