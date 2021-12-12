
import React, { createContext,useContext,useReducer } from "react";
//set up data layer,need this to track basket

//data layer

export const StateContext=createContext();

//provider to wrap around for giving access to data lyer

export const StateProvider=({reducer, initialState, children})=>{
    return(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>);
};


export const useStateValue=()=>useContext(StateContext)