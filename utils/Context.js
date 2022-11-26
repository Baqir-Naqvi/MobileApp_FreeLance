import { createContext,useContext } from "react";
import { useState } from "react";
const Context = createContext();
export const ContextProvider = ({ children }) => {
      const [count,setCount] = useState(0)
    const [FontLoaded, setFontLoaded] = useState(false);
    return (
        <Context.Provider value={{
            count,setCount,
            FontLoaded, setFontLoaded
             }}>
        {children}
        </Context.Provider>
    );
    }
export const useModal = () => useContext(Context);