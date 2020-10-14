/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date Created: 10-13-2020
 * Purpose: Application Header
 */
import React from 'react';
import BrandLogo from './brand-logo';
import AppNavigation from './navigation';

export default () => 
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <BrandLogo />
            <AppNavigation />
        </div>
    </nav>