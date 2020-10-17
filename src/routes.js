/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date Created: 10-13-2020
 * Purpose: List all the routes in the application 
 */

import React from 'react';
import ListProducts from './views/list-products';
import SingleProduct from './views/single-products';

const routes = [
  { path: '/', exact: true, name: 'Home', component : ListProducts },    
  { path: '/product/:id', exact: true, name: 'Home', component : SingleProduct },    
];

export default routes;
