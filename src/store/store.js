//steps to configure store such that everyone should know the store is available for access
import { configureStore } from "@reduxjs/toolkit";

import authReducer from './authslice';

//exporting the configurestore variables 
export default configureStore({
    reducer:{
        auth: authReducer,
    }
})


