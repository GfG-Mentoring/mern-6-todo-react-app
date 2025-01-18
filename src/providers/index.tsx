import { createContext, useState } from "react";


export const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: (value: boolean) => { }
});


export const AuthProvider = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {props.children}
    </AuthContext.Provider>
}