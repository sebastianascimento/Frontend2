import { Middleware } from "@reduxjs/toolkit";


const longgerMiddleware: Middleware = (store) => (next) => (action) => {
    console.log("Action:" , action);
    console.log("Estado anterior:", store.getState());

    const result = next(action);

    console.log("Estado actual:", store.getState());
    return result;
};

export default longgerMiddleware;



    
        