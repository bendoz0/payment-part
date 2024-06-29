import { createContext, useContext } from "react";

export const DataContext = createContext({
    duration: 0,
    setDuration: () => {},
});

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("No data available in the context");
    }
    return context;
};
