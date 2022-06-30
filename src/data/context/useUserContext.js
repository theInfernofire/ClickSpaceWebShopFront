import { useContext, useDebugValue } from "react";
import UserContext from "./userContext";

const useUserContext = () => {
    const { user } = useContext(UserContext);
    useDebugValue(user, user => user?.email ? "Logged In" : "Logged Out")
    return useContext(UserContext);
}

export default useUserContext;