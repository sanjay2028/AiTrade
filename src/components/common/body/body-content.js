/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date Created: 10-13-2020
 * Purpose: Renders the content section in the body area
 */

import React, {Fragment} from 'react';

export default ({children}) => 
    <div className="container">
        <div className="row">{children}</div>
    </div>

    