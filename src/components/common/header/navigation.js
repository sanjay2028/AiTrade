/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date Created: 10-13-2020
 * Purpose: Renders application main navigation
 */
import React from 'react';
import {Link} from 'react-router-dom'

export default () => 
    <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
        <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>            
                </li>        
            </ul>
    </div>
