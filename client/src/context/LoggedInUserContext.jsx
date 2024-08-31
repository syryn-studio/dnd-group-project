import { createContext, useState, useEffect } from "react";
import UserService from "../services/users.services";

export const LoggedInUserContext = createContext(undefined);

export const LoggedInUserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        UserService.getCurrentUser()
            .then((res) => {
                if (res.data) {
                    setIsLoggedIn(true);
                    setUser(res.data);
                }
            })
            .catch((err) => {
                setIsLoggedIn(false);
                setUser(null);
            });
    }, []);

    return (
        <LoggedInUserContext.Provider
            value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoggedInUserContext.Provider>
    );
};
