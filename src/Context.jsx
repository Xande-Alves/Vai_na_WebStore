import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [carrinho, setCarrinho] = useState(0);

    return (
        <AppContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </AppContext.Provider>
    );
}

