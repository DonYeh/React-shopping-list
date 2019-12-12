import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

export default function ItemsContext() {
    
    
    
    return(
        <ItemsContext.Provider>

{props.children}
        </ItemsContext.Provider>   
        ) 
    
    <div></div>;
}
