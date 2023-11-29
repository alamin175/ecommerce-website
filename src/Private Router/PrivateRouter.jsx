import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../components/Context/AuthContext';

const PrivateRouter = ({children}) => {
    const {user , loading} = useContext(UserContext)
    const location = useLocation()
    console.log(location);
    if(loading){
        return ('loading')
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} ></Navigate>
        
    //     // <div>
    //     //     {
    //     //         user? children : <Navigate to='/login'></Navigate>
    //     //     }
    //     // </div>
    // );
};

export default PrivateRouter;