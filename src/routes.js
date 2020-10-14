/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date Created: 10-13-2020
 * Purpose: List all the routes in the application 
 */

import React from 'react';
import ListProducts from './views/list-products';

const routes = [
  { path: '/', exact: true, name: 'Home', component : ListProducts },    
];

export default routes;
