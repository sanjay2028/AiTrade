import axios from 'axios';

const networkError = {    
    status_code : 511,    
    data: "Network Error",
    flash: "Network Unavailable. Please try again"
}

const BASE_URL = 'https://fakestoreapi.com'

const configVals = () => ({
    headers: { 'Accept': 'application/json',}
});

export default {    
    listProducts: () => {
        return axios.get(`${BASE_URL}/products?limit=100`, configVals())
               .then(({data}) =>  data)
               .catch(error => {                
                   if(typeof error.response == 'undefined'){                       
                        return Promise.reject(networkError); 
                   } else {
                        return Promise.reject({
                            status_code : error.response.status,
                            data : error.response.statusText,
                            flash: error.response.statusText,
                        });                        
                   }       
               }); 
    },
}