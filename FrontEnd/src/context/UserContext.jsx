import { createContext,useContext,useState } from "react"
import  AdminApi  from '../services/Api/Adminn/AdminApi.js';

export const UserStateContext= createContext({
    user:{},
    authenticated:false,
    setUser:()=>{},
    login:(email,password)=>{},
    setAuthenticated:()=>{},
    logout:()=>{},
});

export default function UserContext({children}){
    const [user, setUser]=useState({});
    const [authenticated, _setAuthenticated]=useState(window.localStorage.getItem('AUTHENTICATED'));
    const login = async (email, password) => {
            await AdminApi.getCsrfToken();
            const loginResponse = await AdminApi.login(email, password);
            return loginResponse;
    };

    const logout=()=>{
        setUser({})
        _setAuthenticated(false)
    };
    const setAuthenticated=(isAuthenticated)=>{
        _setAuthenticated(isAuthenticated)
        window.localStorage.setItem('AUTHENTICATED',isAuthenticated)
    }
    return<>
    <UserStateContext.Provider value={{
        user,
        login,
        authenticated,
        setAuthenticated,
        logout,
        setUser,
    }}>
        {children}
    </UserStateContext.Provider>
    </>
}
export const useUserContext =()=> useContext(UserStateContext);
