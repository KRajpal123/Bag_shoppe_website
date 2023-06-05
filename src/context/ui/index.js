import { createContext, useContext, useState } from "react";


export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children}) => {
    const[openDrawer,setDrawerOpen] = useState(false);
    const[searchBox,setSearchBox] = useState(false);
    const value = {
        openDrawer,
        setDrawerOpen,
        searchBox,
        setSearchBox    
    }
    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}