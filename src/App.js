/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date Created: 10-13-2020
 * Purpose: For rendering different rount content
 */

import React, {useEffect} from 'react';
import AppLayout from './components/layout';
import {BrowserRouter} from 'react-router-dom';
import {Loader} from './components/utils'

function App() {
  return <BrowserRouter><Loader /><AppLayout /></BrowserRouter>  
}

export default App;
