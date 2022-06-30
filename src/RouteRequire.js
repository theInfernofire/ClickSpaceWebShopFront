import { useNavigate, Outlet } from "react-router-dom";
import useUserContext from "./data/context/useUserContext";

const RequireAuth = ({ allowedRoles }) => {
    const { user } = useUserContext();
    const navigate = useNavigate();

    return (
        user?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : user?.user
                ? navigate("/unauthorized" )
                : navigate("/login" )
    );
}

export default RequireAuth;