import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
   
    const { user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
      return  <div className='text-3xl text-center my-52'>Loading....</div>
    }
    if(user){
       return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;