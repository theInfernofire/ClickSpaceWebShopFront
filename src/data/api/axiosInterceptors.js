import { useEffect,} from "react"
import { axiosPrivate } from "./axios"
import useUserContext from "../context/useUserContext"
import {useNavigate} from "react-router-dom"


const useAxiosPrivate = () => {
    const {user,setUser} = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        const requestInterceptor = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${user?.token}`;
                }
                return config;
            }, (err) => {
                Promise.reject(err)
            }
        );

        const responseInterceptor = axiosPrivate.interceptors.response.use(
            response => response,
            async(error) => {
                const prevReq = error?.config;
                if(error?.response?.status === 401){
                    setUser({});
                    navigate("/login");
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
            axiosPrivate.interceptors.response.eject(responseInterceptor);
        }

    },)

    return axiosPrivate;
}

export default useAxiosPrivate;